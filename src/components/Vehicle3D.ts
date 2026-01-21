import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { effect } from '@preact/signals-core';
import { VehicleHAL } from '../services/VehicleHAL';

export class Vehicle3D {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private composer: EffectComposer;

    // Scene Objects
    private carGroup: THREE.Group;
    private gridHelper!: THREE.GridHelper;
    private particles!: THREE.Points;
    private particleCount = 200; // Increased for "Warp" effect
    private particlePositions!: Float32Array;

    // Physics State
    private camOffset = new THREE.Vector3(4, 3, 6);
    private currentCamPos = new THREE.Vector3(4, 3, 6);
    private speedFactor = 0;

    constructor(private container: HTMLElement, private hal: VehicleHAL) {
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x000000, 0.02); // Cyber fog

        this.camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);

        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for performance
        this.renderer.toneMapping = THREE.ReinhardToneMapping;
        container.appendChild(this.renderer.domElement);

        // POST-PROCESSING (Bloom)
        const renderScene = new RenderPass(this.scene, this.camera);
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(container.clientWidth, container.clientHeight), 1.5, 0.4, 0.85);
        bloomPass.threshold = 0.2;
        bloomPass.strength = 1.2; // Cyber glow strength
        bloomPass.radius = 0.5;

        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(renderScene);
        this.composer.addPass(bloomPass);

        this.carGroup = new THREE.Group();
        this.scene.add(this.carGroup);

        this.initCyberCar();
        this.initSpeedTunnel();
        this.initParticles();
        this.initLights();

        this.camera.position.copy(this.camOffset);
        this.camera.lookAt(0, 0, 0);

        this.setupBindings();
        this.animate();

        window.addEventListener('resize', () => this.onResize());
    }

    private initCyberCar() {
        // --- CHASSIS ---
        // Main Body (Low Poly Cybertruck-esque)
        const bodyGeom = new THREE.BufferGeometry();
        // Custom vertices for a sharp, angular look
        const vertices = new Float32Array([
            // Bottom
            -1.5, 0, 1, 1.5, 0, 1, -1.5, 0, -1,
            1.5, 0, 1, 1.5, 0, -1, -1.5, 0, -1,
            // Top (Cabin)
            -0.8, 1.2, 0.6, 0.8, 1.2, 0.6, -0.8, 1.2, -0.6,
            0.8, 1.2, 0.6, 0.8, 1.2, -0.6, -0.8, 1.2, -0.6,
        ]);
        // Note: Correct mesh construction would be more complex, 
        // falling back to composite primitives for stability in this code block.

        // Revised Chassis: Box Composition
        const chassisMat = new THREE.MeshStandardMaterial({
            color: 0x111111,
            roughness: 0.2,
            metalness: 0.8
        });

        const base = new THREE.Mesh(new THREE.BoxGeometry(3, 0.5, 1.8), chassisMat);
        base.position.y = 0.5;
        this.carGroup.add(base);

        const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.6, 1.4), chassisMat);
        cabin.position.y = 1.0;
        cabin.position.x = -0.2; // Slight rear bias
        this.carGroup.add(cabin);

        // --- NEON TRIMS ---
        const trimMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
        const sideStrip = new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.05, 1.85), trimMat);
        sideStrip.position.y = 0.5;
        this.carGroup.add(sideStrip);

        // --- WHEELS ---
        const wheelGeom = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 16);
        const wheelMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
        const rimMat = new THREE.MeshBasicMaterial({ color: 0xff0055 }); // Red rims

        const createWheel = (x: number, z: number) => {
            const wheelGroup = new THREE.Group();
            const tire = new THREE.Mesh(wheelGeom, wheelMat);
            tire.rotation.x = Math.PI / 2;

            // Rim Glow
            const rim = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.02, 8, 16), rimMat);
            rim.rotation.y = Math.PI / 2;

            wheelGroup.add(tire);
            wheelGroup.add(rim);
            wheelGroup.position.set(x, 0.4, z);
            this.carGroup.add(wheelGroup);
            return wheelGroup;
        };

        createWheel(-1, 0.9);
        createWheel(1, 0.9);
        createWheel(-1, -0.9);
        createWheel(1, -0.9);
    }

    private initSpeedTunnel() {
        // Creating an infinite grid effect
        // We use two grids to simulate continuous movement
        this.gridHelper = new THREE.GridHelper(40, 40, 0x00f3ff, 0x111111);
        this.gridHelper.position.y = 0;
        this.scene.add(this.gridHelper);
    }

    private initParticles() {
        // "Warp Star" particles
        const geom = new THREE.BufferGeometry();
        this.particlePositions = new Float32Array(this.particleCount * 3);

        for (let i = 0; i < this.particleCount; i++) {
            this.particlePositions[i * 3] = (Math.random() - 0.5) * 20; // Wide X
            this.particlePositions[i * 3 + 1] = Math.random() * 5;      // Height
            this.particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 40; // Deep Z
        }

        geom.setAttribute('position', new THREE.BufferAttribute(this.particlePositions, 3));
        const mat = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.08,
            transparent: true,
            opacity: 0.6
        });

        this.particles = new THREE.Points(geom, mat);
        this.scene.add(this.particles);
    }

    private initLights() {
        const ambient = new THREE.AmbientLight(0x404040, 2); // Soft base
        this.scene.add(ambient);

        // Headlights
        const leftLight = new THREE.SpotLight(0x00f3ff, 5, 20, 0.5, 0.5, 1);
        leftLight.position.set(2, 0.8, 0.6);
        leftLight.target.position.set(10, 0, 0.6);
        this.carGroup.add(leftLight);
        this.carGroup.add(leftLight.target);

        const rightLight = new THREE.SpotLight(0x00f3ff, 5, 20, 0.5, 0.5, 1);
        rightLight.position.set(2, 0.8, -0.6);
        rightLight.target.position.set(10, 0, -0.6);
        this.carGroup.add(rightLight);
        this.carGroup.add(rightLight.target);
    }

    private setupBindings() {
        // RPM Vibration
        effect(() => {
            const rpm = this.hal.powertrain.rpm.value;
            const shake = (rpm / 8000) * 0.02;
            this.carGroup.position.y = (Math.random() - 0.5) * shake;
        });
    }

    private lastFrameTime = 0;

    private animate(currTime: number = 0) {
        requestAnimationFrame((t) => this.animate(t));

        // FPS Throttling
        let targetFPS = 60;
        if (!this.hal.system.canbusActive.value) targetFPS = 15; // Power save

        const interval = 1000 / targetFPS;
        const delta = currTime - this.lastFrameTime;

        if (delta > interval) {
            this.lastFrameTime = currTime - (delta % interval);
            this.renderFrame(delta);
        }
    }

    private renderFrame(dt: number) {
        // 1. Get Telemetry
        const validSpeed = this.hal.powertrain.speed.value;
        const accel = this.hal.motion.accel.x.value; // Longitudinal accel

        // 2. Animate Grid (Speed Tunnel)
        // Move grid backwards relative to speed
        // Normalized speed factor (0 to 1 for 0-200kmh)
        this.speedFactor = validSpeed / 200;
        const gridSpeed = 0.1 + (this.speedFactor * 0.5);

        this.gridHelper.position.x -= gridSpeed;
        if (this.gridHelper.position.x < -1) {
            this.gridHelper.position.x = 0; // Reset loop
        }

        // 3. Physics Camera (Spring Arm)
        // Target position varies by speed/accel
        // Higher speed = camera moves back/up (FOV feeling)
        // Hard braking = camera moves forward
        const targetCamX = this.camOffset.x - (accel * 0.5) - (this.speedFactor * 2);
        const targetCamY = this.camOffset.y + (this.speedFactor * 0.5);
        const targetCamZ = this.camOffset.z + (this.speedFactor * 1);

        // Smooth lerp
        this.currentCamPos.x += (targetCamX - this.currentCamPos.x) * 0.1;
        this.currentCamPos.y += (targetCamY - this.currentCamPos.y) * 0.1;
        this.currentCamPos.z += (targetCamZ - this.currentCamPos.z) * 0.1;

        this.camera.position.copy(this.currentCamPos);
        this.camera.lookAt(0, 0, 0);

        // 4. Warp Particles
        const positions = this.particles.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < this.particleCount; i++) {
            const idx = i * 3;
            // Move particles back
            positions[idx] -= (gridSpeed * 3);

            // Respawn if passed camera
            if (positions[idx] < -10) {
                positions[idx] = 20; // Reset to front
                positions[idx + 1] = Math.random() * 5;
                positions[idx + 2] = (Math.random() - 0.5) * 40;
            }
        }
        this.particles.geometry.attributes.position.needsUpdate = true;

        // Render with Bloom
        this.composer.render();
    }

    private onResize() {
        if (!this.container) return;
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.composer.setSize(this.container.clientWidth, this.container.clientHeight);
    }
}
