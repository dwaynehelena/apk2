import * as THREE from 'three';
import { effect } from '@preact/signals-core';
import { VehicleHAL } from '../services/VehicleHAL';

export class Vehicle3D {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private car: THREE.Group;
    private doors: { [key: string]: THREE.Mesh } = {};

    constructor(private container: HTMLElement, private hal: VehicleHAL) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);

        this.car = this.createCarModel();
        this.scene.add(this.car);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        this.scene.add(directionalLight);

        this.camera.position.z = 5;

        // Reactive Bindings
        this.setupBindings();

        // Start Loop
        this.animate();

        // Handle Resize
        window.addEventListener('resize', () => this.onResize());
    }

    private createCarModel(): THREE.Group {
        const group = new THREE.Group();

        // Main Body (Wireframe)
        const geometry = new THREE.BoxGeometry(2, 0.8, 4);
        const material = new THREE.MeshBasicMaterial({
            color: 0x00f3ff,
            wireframe: true,
            transparent: true,
            opacity: 0.5
        });
        const body = new THREE.Mesh(geometry, material);
        group.add(body);

        // Doors (Placeholder Meshes)
        this.doors['fl'] = this.createDoorMesh(-1.1, 0, 1);
        this.doors['fr'] = this.createDoorMesh(1.1, 0, 1);

        group.add(this.doors['fl']);
        group.add(this.doors['fr']);

        return group;
    }

    private createDoorMesh(x: number, y: number, z: number): THREE.Mesh {
        const geom = new THREE.BoxGeometry(0.2, 0.6, 1.2);
        const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
        const mesh = new THREE.Mesh(geom, mat);
        mesh.position.set(x, y, z);
        return mesh;
    }

    private setupBindings() {
        // Door Open = Rotate Mesh
        effect(() => {
            const isOpen = this.hal.body.doors.fl.value;
            // Simple rotation animation
            this.doors['fl'].rotation.y = isOpen ? -0.5 : 0;
            // Change color
            (this.doors['fl'].material as THREE.MeshBasicMaterial).color.setHex(isOpen ? 0xff0055 : 0xffffff);
        });

        effect(() => {
            const isOpen = this.hal.body.doors.fr.value;
            this.doors['fr'].rotation.y = isOpen ? 0.5 : 0;
            (this.doors['fr'].material as THREE.MeshBasicMaterial).color.setHex(isOpen ? 0xff0055 : 0xffffff);
        });

        // RPM = Rotation Speed?
        effect(() => {
            // Visual effect based on RPM could go here
        });
    }

    private animate() {
        requestAnimationFrame(() => this.animate());

        // Idle Rotation
        this.car.rotation.y += 0.005;

        this.renderer.render(this.scene, this.camera);
    }

    private onResize() {
        if (!this.container) return;
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }
}
