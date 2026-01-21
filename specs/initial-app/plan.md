# Architecture Plan: Initial App

## Component Design
- AppDrawer: Navigation and quick access
- Dashboard: Main vehicle data and widgets
- BootScreen: Startup sequence
- DeepDiagnostics: Advanced OBD2 diagnostics
- DiagnosticsTab: Error code display
- GPSMap: Map and location
- MusicWidget: Music controls
- OffroadTab: Offroad telemetry
- PerformanceTab: Performance metrics
- TelemetryGraph: Data visualization
- Vehicle3D: 3D vehicle model
- WeatherWidget: Weather info

## Data Flow
- Services (OBD2Service, CanbusService, LocationService, MusicService, WeatherService) provide data to components via props or context.
- AppService manages global state and initialization.

## API/Integration
- OBD2 via Bluetooth/allwier a133 canbus decoder canbus/tcpip via elm327
- GPS via LocationService
- Weather via WeatherService (API)
- Music via MusicService (local or streaming)

## Build & Tooling
- Vite for build/dev
- Vitest for tests
- TypeScript strict mode
- Capacitor for Android integration
