@echo off
REM APK Build Script for Windows
REM Builds the Android APK after validating all fixes

setlocal enabledelayedexpansion

echo ================================================
echo      APK Build Script - Boot Error Fixes
echo ================================================
echo.

REM Get project root
cd /d %~dp0..
set PROJECT_ROOT=%CD%

echo Project Root: %PROJECT_ROOT%
echo.

REM Step 1: Check Node.js
echo [Step 1] Checking Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js not found!
    exit /b 1
)
echo OK: Node.js found
echo.

REM Step 2: Check Java
echo [Step 2] Checking Java...
java -version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Java not found!
    exit /b 1
)
echo OK: Java found
echo.

REM Step 3: Run validation (if Python available)
echo [Step 3] Running validation...
python --version >nul 2>&1
if not errorlevel 1 (
    python scripts\validate-fixes.py
    if errorlevel 1 (
        echo ERROR: Validation failed!
        exit /b 1
    )
    echo OK: Validation passed
) else (
    echo WARNING: Python not found, skipping validation
)
echo.

REM Step 4: Clean previous build
echo [Step 4] Cleaning previous build...
if exist android\app\build (
    rmdir /s /q android\app\build
    echo OK: Previous build cleaned
) else (
    echo OK: No previous build found
)
echo.

REM Step 5: Install dependencies
echo [Step 5] Installing dependencies...
if not exist node_modules (
    echo Installing npm packages...
    call npm install
    if errorlevel 1 (
        echo ERROR: npm install failed!
        exit /b 1
    )
) else (
    echo OK: node_modules found
)
echo.

REM Step 6: Build web assets
echo [Step 6] Building web assets...
call npm run build
if errorlevel 1 (
    echo ERROR: Web build failed!
    exit /b 1
)
echo OK: Web assets built
echo.

REM Step 7: Sync Capacitor
echo [Step 7] Syncing Capacitor...
call npx cap sync android
if errorlevel 1 (
    echo ERROR: Capacitor sync failed!
    exit /b 1
)
echo OK: Capacitor synced
echo.

REM Step 8: Build APK
echo [Step 8] Building APK...
cd android
call gradlew.bat clean assembleDebug
if errorlevel 1 (
    echo ERROR: APK build failed!
    cd ..
    exit /b 1
)
cd ..
echo OK: APK built
echo.

REM Step 9: Verify APK
echo [Step 9] Verifying APK...
set APK_FILE=android\app\build\outputs\apk\debug\app-debug.apk
if exist "%APK_FILE%" (
    echo OK: APK found at %APK_FILE%

    REM Copy to project root
    copy "%APK_FILE%" twahh-debug.apk
    echo OK: Copied to twahh-debug.apk
) else (
    echo ERROR: APK not found!
    exit /b 1
)
echo.

REM Build Summary
echo ================================================
echo         BUILD COMPLETED SUCCESSFULLY!
echo ================================================
echo.
echo APK Location: %PROJECT_ROOT%\twahh-debug.apk
echo.
echo Next Steps:
echo   1. Connect headset: adb devices
echo   2. Install APK: adb install -r twahh-debug.apk
echo   3. View logs: adb logcat ^| findstr TwahhPlugin
echo.
echo Build completed at %date% %time%
echo.

pause
