#!/bin/bash

##############################################################################
# APK Build Script with Error Handling and Logging
# Builds the Android APK after validating all fixes
##############################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
BOLD='\033[1m'
NC='\033[0m' # No Color

# Project paths
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
LOG_FILE="$PROJECT_ROOT/build-log.txt"
APK_OUTPUT="$PROJECT_ROOT/android/app/build/outputs/apk/debug/app-debug.apk"

# Start logging
exec > >(tee -a "$LOG_FILE") 2>&1

echo -e "${BOLD}${BLUE}================================================${NC}"
echo -e "${BOLD}${BLUE}     APK Build Script - Boot Error Fixes${NC}"
echo -e "${BOLD}${BLUE}================================================${NC}\n"

date

##############################################################################
# Helper Functions
##############################################################################

print_step() {
    echo -e "\n${BOLD}${BLUE}>>> $1${NC}"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

check_command() {
    if ! command -v "$1" &> /dev/null; then
        print_error "$1 not found. Please install $1 first."
        exit 1
    fi
    print_success "$1 found"
}

##############################################################################
# Pre-Build Validation
##############################################################################

print_step "Step 1: Validating Environment"

cd "$PROJECT_ROOT"

# Check required tools
check_command node
check_command npm
check_command java

# Check Node version
NODE_VERSION=$(node -v)
print_success "Node.js: $NODE_VERSION"

# Check Java version
JAVA_VERSION=$(java -version 2>&1 | head -n 1)
print_success "Java: $JAVA_VERSION"

##############################################################################
# Run Validation Script
##############################################################################

print_step "Step 2: Running Fix Validation"

if [ -f "$SCRIPT_DIR/validate-fixes.py" ]; then
    python3 "$SCRIPT_DIR/validate-fixes.py"
    VALIDATION_RESULT=$?

    if [ $VALIDATION_RESULT -ne 0 ]; then
        print_error "Validation failed! Please fix errors before building."
        exit 1
    fi
    print_success "All fixes validated successfully"
else
    print_warning "Validation script not found, skipping validation"
fi

##############################################################################
# Clean Previous Build
##############################################################################

print_step "Step 3: Cleaning Previous Build"

if [ -d "$PROJECT_ROOT/android/app/build" ]; then
    print_warning "Removing previous build directory..."
    rm -rf "$PROJECT_ROOT/android/app/build"
    print_success "Previous build cleaned"
else
    print_success "No previous build found"
fi

##############################################################################
# Install Dependencies
##############################################################################

print_step "Step 4: Installing Dependencies"

if [ ! -d "$PROJECT_ROOT/node_modules" ]; then
    print_warning "node_modules not found, running npm install..."
    npm install
else
    print_success "node_modules found, skipping npm install"
fi

##############################################################################
# Build Web Assets
##############################################################################

print_step "Step 5: Building Web Assets"

npm run build

if [ $? -eq 0 ]; then
    print_success "Web assets built successfully"
else
    print_error "Web build failed"
    exit 1
fi

##############################################################################
# Sync Capacitor
##############################################################################

print_step "Step 6: Syncing Capacitor to Android"

npx cap sync android

if [ $? -eq 0 ]; then
    print_success "Capacitor sync completed"
else
    print_error "Capacitor sync failed"
    exit 1
fi

##############################################################################
# Copy Updated Java Files
##############################################################################

print_step "Step 7: Verifying Java Files"

JAVA_PLUGIN="$PROJECT_ROOT/android/app/src/main/java/com/twahh/rm/TwahhPlugin.java"

if [ -f "$JAVA_PLUGIN" ]; then
    # Check if our fixes are present
    if grep -q "com.tw.carinfoservice.CarServiceAidl" "$JAVA_PLUGIN"; then
        print_success "TwahhPlugin.java contains AIDL fix"
    else
        print_error "TwahhPlugin.java missing AIDL fix!"
        exit 1
    fi
else
    print_error "TwahhPlugin.java not found!"
    exit 1
fi

##############################################################################
# Build APK
##############################################################################

print_step "Step 8: Building Android APK (Debug)"

cd "$PROJECT_ROOT/android"

# Make gradlew executable
chmod +x ./gradlew

# Clean and build
./gradlew clean
./gradlew assembleDebug

if [ $? -eq 0 ]; then
    print_success "APK built successfully!"
else
    print_error "APK build failed"
    exit 1
fi

##############################################################################
# Verify APK
##############################################################################

print_step "Step 9: Verifying APK"

if [ -f "$APK_OUTPUT" ]; then
    APK_SIZE=$(du -h "$APK_OUTPUT" | cut -f1)
    print_success "APK found at: $APK_OUTPUT"
    print_success "APK size: $APK_SIZE"

    # Get APK info
    echo -e "\n${BOLD}APK Information:${NC}"
    aapt dump badging "$APK_OUTPUT" | grep -E "package:|application-label:|sdkVersion:|targetSdkVersion:" || true

else
    print_error "APK not found at expected location!"
    exit 1
fi

##############################################################################
# Copy APK to Easy Location
##############################################################################

print_step "Step 10: Copying APK to Project Root"

cp "$APK_OUTPUT" "$PROJECT_ROOT/twahh-debug.apk"
print_success "APK copied to: $PROJECT_ROOT/twahh-debug.apk"

##############################################################################
# Generate Installation Instructions
##############################################################################

print_step "Step 11: Generating Installation Instructions"

cat > "$PROJECT_ROOT/INSTALL.md" << 'EOF'
# APK Installation Instructions

## File Location
```
twahh-debug.apk (in project root)
```

## Installation Methods

### Method 1: ADB (Recommended)
```bash
# Check if device is connected
adb devices

# Install APK (replaces existing app)
adb install -r twahh-debug.apk

# View logs after installation
adb logcat | grep -E "TwahhPlugin|CANBUS_DUMP|VehicleHAL"
```

### Method 2: Manual Installation
1. Copy `twahh-debug.apk` to USB drive
2. Insert USB into headset
3. Use file manager to install APK
4. Enable "Install from Unknown Sources" if prompted

## Post-Installation Testing

### 1. Check Boot Log
```bash
adb shell cat /storage/emulated/0/Android/data/com.twahh.rm/files/TWLogs/Boot/twahh_boot_log.txt
```

Look for:
- `[AIDL SUCCESS!]` - AIDL interface working
- `[ACCESSIBLE]` - Permissions granted
- `Native CANbus Active` - Fallback mode enabled

### 2. Check Real-Time Logs
```bash
adb logcat -s TwahhPlugin:D CANBUS_DUMP:D
```

### 3. Verify UI Status
Open app and check Dashboard status:
- Should show "Native CANbus Active" OR "ELM327 Connected"
- Voltage should update in real-time
- Speed should display when driving

## Troubleshooting

### If AIDL Still Fails
Check logs for actual interface name:
```bash
adb logcat | grep "getInterfaceDescriptor"
```

### If Permissions Denied
Install as system app:
```bash
adb root
adb remount
adb push twahh-debug.apk /system/app/twahh.apk
adb reboot
```

### Enable Debug Mode
In app, change `VehicleHAL.ts:478`:
```typescript
const debugMode = true; // Enable verbose logging
```

## Expected Results

### Before Update:
- ❌ ELM327 CONNECTION FAILED
- ⚠️ Content providers DENIED
- ❌ AIDL interface failures

### After Update:
- ✅ Native CANbus Active
- ✅ AIDL interface connected
- ✅ Voltage reading: 12-14V
- ✅ Speed updates when driving
EOF

print_success "Installation instructions saved to INSTALL.md"

##############################################################################
# Build Summary
##############################################################################

echo -e "\n${BOLD}${GREEN}================================================${NC}"
echo -e "${BOLD}${GREEN}        BUILD COMPLETED SUCCESSFULLY!${NC}"
echo -e "${BOLD}${GREEN}================================================${NC}\n"

echo -e "${BOLD}Build Summary:${NC}"
echo -e "  APK Location: ${BLUE}$PROJECT_ROOT/twahh-debug.apk${NC}"
echo -e "  APK Size: ${BLUE}$APK_SIZE${NC}"
echo -e "  Build Log: ${BLUE}$LOG_FILE${NC}"
echo -e "  Install Guide: ${BLUE}$PROJECT_ROOT/INSTALL.md${NC}"

echo -e "\n${BOLD}Next Steps:${NC}"
echo -e "  1. Connect headset: ${YELLOW}adb devices${NC}"
echo -e "  2. Install APK: ${YELLOW}adb install -r twahh-debug.apk${NC}"
echo -e "  3. View logs: ${YELLOW}adb logcat | grep TwahhPlugin${NC}"
echo -e "  4. Test in vehicle and share new boot logs"

echo -e "\n${BOLD}${BLUE}Build completed at $(date)${NC}\n"
