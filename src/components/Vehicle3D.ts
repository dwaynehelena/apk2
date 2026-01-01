import * as THREE from 'three';
import { effect } from '@preact/signals-core';
import { VehicleHAL } from '../services/VehicleHAL';

export class Vehicle3D {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private carGroup: THREE.Group;
    private bodyMesh!: THREE.Mesh;
    private headlights: THREE.PointLight[] = [];
    private particles: THREE.Points;
    private particleCount = 100;
    private particlePositions: Float32Array;

    constructor(private container: HTMLElement, private hal: VehicleHAL) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(this.renderer.domElement);

        this.carGroup = new THREE.Group();
        this.scene.add(this.carGroup);

        this.initCar();
        this.initGForceParticles();
        this.initLights();

        this.camera.position.set(4, 3, 8);
        this.camera.lookAt(0, 0, 0);

        this.setupBindings();
        this.animate();

        window.addEventListener('resize', () => this.onResize());
    }

    private initCar() {
        // Organic Body
        const geometry = new THREE.CapsuleGeometry(1.2, 3, 4, 16);
        const material = new THREE.MeshBasicMaterial({
            color: 0x00f3ff,
            wireframe: true,
            transparent: true,
            opacity: 0.2
        });

        this.bodyMesh = new THREE.Mesh(geometry, material);
        this.bodyMesh.rotation.z = Math.PI / 2;
        this.carGroup.add(this.bodyMesh);

        // Core Glow
        const innerGeom = new THREE.CapsuleGeometry(0.8, 2.5, 4, 8);
        const innerMat = new THREE.MeshBasicMaterial({
            color: 0xff0055,
            wireframe: true,
            transparent: true,
            opacity: 0.1
        });
        const innerBody = new THREE.Mesh(innerGeom, innerMat);
        innerBody.rotation.z = Math.PI / 2;
        this.carGroup.add(innerBody);
    }

    private initLights() {
        // Point lights for headlights
        const leftLight = new THREE.PointLight(0x00f3ff, 0, 10);
        leftLight.position.set(2, 0.5, 1.2);

        const rightLight = new THREE.PointLight(0x00f3ff, 0, 10);
        rightLight.position.set(2, 0.5, -1.2);

        this.headlights = [leftLight, rightLight];
        this.carGroup.add(leftLight);
        this.carGroup.add(rightLight);

        // Visual Flares
        const flareGeom = new THREE.SphereGeometry(0.1, 8, 8);
        const flareMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0 });
        this.headlights.forEach(light => {
            const flare = new THREE.Mesh(flareGeom, flareMat.clone());
            light.add(flare);
        });
    }

    private initGForceParticles() {
        const geom = new THREE.BufferGeometry();
        this.particlePositions = new Float32Array(this.particleCount * 3);

        for (let i = 0; i < this.particleCount; i++) {
            this.particlePositions[i * 3] = (Math.random() - 0.5) * 10;
            this.particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            this.particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }

        geom.setAttribute('position', new THREE.BufferAttribute(this.particlePositions, 3));
        const mat = new THREE.PointsMaterial({
            color: 0xff0055,
            size: 0.05,
            transparent: true,
            opacity: 0.5
        });

        this.particles = new THREE.Points(geom, mat);
        this.scene.add(this.particles);
    }

    private setupBindings() {
        // Lights Sync
        effect(() => {
            const isOn = this.hal.body.lights.on.value;
            this.headlights.forEach(light => {
                light.intensity = isOn ? 15 : 0;
                (light.children[0] as THREE.Mesh).visible = isOn;
                ((light.children[0] as THREE.Mesh).material as THREE.MeshBasicMaterial).opacity = isOn ? 1 : 0;
            });
            (this.bodyMesh.material as THREE.MeshBasicMaterial).color.setHex(isOn ? 0xffffff : 0x00f3ff);
            (this.bodyMesh.material as THREE.MeshBasicMaterial).opacity = isOn ? 0.6 : 0.2;
        });

        // RPM Shake
        effect(() => {
            const rpm = this.hal.powertrain.rpm.value;
            const shake = (rpm / 8000) * 0.05;
            this.carGroup.position.y = (Math.random() - 0.5) * shake;
        });
    }

    private animate() {
        requestAnimationFrame(() => this.animate());

        // Dynamic Rotation
        const speed = this.hal.powertrain.speed.value;
        this.carGroup.rotation.y += 0.005 + (speed / 300) * 0.05;

        // G-Force Particle Physics
        const accel = this.hal.motion.accel;
        const positions = this.particles.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < this.particleCount; i++) {
            const idx = i * 3;
            // Particles drift based on G-force (inverted)
            positions[idx] += (Math.random() - 0.5) * 0.1 - (accel.x.value * 0.01);
            positions[idx + 1] += (Math.random() - 0.5) * 0.1 - (accel.y.value * 0.01);
            positions[idx + 2] += (Math.random() - 0.5) * 0.1;

            // Reset particles if they drift too far
            if (Math.abs(positions[idx]) > 5) positions[idx] = (Math.random() - 0.5) * 10;
            if (Math.abs(positions[idx + 1]) > 5) positions[idx + 1] = (Math.random() - 0.5) * 10;
        }
        this.particles.geometry.attributes.position.needsUpdate = true;

        this.renderer.render(this.scene, this.camera);
    }

    private onResize() {
        if (!this.container) return;
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }
}

