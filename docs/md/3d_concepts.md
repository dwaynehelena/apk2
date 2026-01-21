# 3D Concept & Design: "CyberMorphic" Enhancements

To bring a "real 3D feel" to the QuantumOS dashboard, we will evolve the current `Vehicle3D` component from a primitive representation to an immersive, reactive digital twin.

## 1. Visual Fidelity Enhancements

### A. The "Hero" Model
**Current**: `CapsuleGeometry` (Wireframe)
**Proposed**: Low-Poly Cyberpunk Vehicle (GLTF)
-   **Why**: Primitive shapes feel like a dev placeholder. A styled model grounds the experience.
-   **Style**: Matte black body, neon edges (rim light), glass cockpit.
-   **Optimization**: < 5000 polys to maintain 60FPS on Allwinner A133.

### B. "Speed Tunnel" Environment
**Current**: Empty void.
**Proposed**: Procedural "Warp Grid"
-   **Floor**: A flowing neon grid that moves underneath the car at a speed matching `hal.powertrain.speed`.
-   **Ceiling**: Occasional "overhead lights" passing by to simulate motion in a tunnel.
-   **Effect**: Gives an immediate sense of forward velocity even when stationary in traffic (slow drift).

### C. Dynamic Lighting & Reflections
**Current**: Static PointLights.
**Proposed**: Reactive Environment
-   **Underglow**: Point light beneath the chassis that pulses with `hal.media.music.bass` (if available) or `rpm`.
-   **Brake Lights**: Bloom intensity increases when `hal.powertrain.gear` is 'P' or deceleration is detected.

## 2. Telemetry Integration (The "Real" Feel)

### A. Physics-Based Camera (The "Weight")
**Current**: Fixed position relative to car.
**Proposed**: Validated Spring-Arm Camera
-   **Acceleration**: Camera lags slightly backward (FOV increases) to sell the "launch".
-   **Braking**: Camera pushes forward (FOV decreases).
-   **Turning**: Camera leans into the turn (utilizing steering angle data).

### B. Signal Visualization
-   **Turn Signals**: Left/Right indicators on the 3D model flash in sync with the real car.
-   **Door States**: If a door opens, the 3D model's door actually opens (requires rigged model or separate meshes).

## 3. Post-Processing (The "Cyber" Polish)
*Note: Expensive on mobile GPU, use sparingly.*
-   **Unreal Bloom**: Slight glow on neon edges.
-   **Chromatic Aberration**: Subtle shifting at screen edges at high speeds (>100px/s).
-   **Scanlines**: Optional CRT overlay for that 80s/90s retro-future aesthetic.

## Implementation Roadmap
1.  **Phase 1 (Code Only)**: Implement "Speed Tunnel" grid and Physics Camera in `Vehicle3D.ts`.
2.  **Phase 2 (Assets)**: Import GLTF model to replace Capsules.
3.  **Phase 3 (Shaders)**: Add Bloom and special effects.
