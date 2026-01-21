#!/usr/bin/env python3
"""
Testing Script to Validate All Boot Log Error Fixes
Checks: AIDL interface, permissions, transaction mapping, native fallback
"""

import os
import sys
import re
import subprocess
import json
from pathlib import Path

class Colors:
    GREEN = '\033[92m'
    RED = '\033[91m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    RESET = '\033[0m'
    BOLD = '\033[1m'

def print_section(title):
    print(f"\n{Colors.BOLD}{Colors.BLUE}{'='*60}{Colors.RESET}")
    print(f"{Colors.BOLD}{Colors.BLUE}{title}{Colors.RESET}")
    print(f"{Colors.BOLD}{Colors.BLUE}{'='*60}{Colors.RESET}\n")

def print_success(msg):
    print(f"{Colors.GREEN}✓{Colors.RESET} {msg}")

def print_error(msg):
    print(f"{Colors.RED}✗{Colors.RESET} {msg}")

def print_warning(msg):
    print(f"{Colors.YELLOW}⚠{Colors.RESET} {msg}")

def print_info(msg):
    print(f"{Colors.BLUE}ℹ{Colors.RESET} {msg}")

class FixValidator:
    def __init__(self):
        self.project_root = Path(__file__).parent.parent
        self.results = {
            "aidl_interface": False,
            "permissions": {},
            "transaction_mapping": {},
            "native_fallback": False,
            "overall": False
        }

    def validate_aidl_interface(self):
        """Validate AIDL interface fix in TwahhPlugin.java"""
        print_section("1. AIDL Interface Fix")

        file_path = self.project_root / "android/app/src/main/java/com/twahh/rm/TwahhPlugin.java"

        if not file_path.exists():
            print_error(f"TwahhPlugin.java not found at {file_path}")
            return False

        with open(file_path, 'r') as f:
            content = f.read()

        # Check if CarServiceAidl is first in the array
        pattern = r'String\[\]\s+possibleInterfaces\s*=\s*\{[^}]*?"com\.tw\.carinfoservice\.CarServiceAidl"'

        if re.search(pattern, content):
            print_success("CarServiceAidl interface found in possibleInterfaces array")

            # Check if it's the FIRST entry
            array_match = re.search(r'String\[\]\s+possibleInterfaces\s*=\s*\{([^}]+)\}', content, re.DOTALL)
            if array_match:
                array_content = array_match.group(1)
                first_entry = re.search(r'"([^"]+)"', array_content)
                if first_entry and "CarServiceAidl" in first_entry.group(1):
                    print_success("CarServiceAidl is the FIRST entry (highest priority)")
                    self.results["aidl_interface"] = True
                else:
                    print_warning("CarServiceAidl found but not as first entry")
                    print_info(f"First entry: {first_entry.group(1) if first_entry else 'unknown'}")
        else:
            print_error("CarServiceAidl NOT found in possibleInterfaces array")
            print_info("Expected: com.tw.carinfoservice.CarServiceAidl as first entry")

        return self.results["aidl_interface"]

    def validate_permissions(self):
        """Validate permissions in AndroidManifest.xml"""
        print_section("2. Permissions Check")

        file_path = self.project_root / "android/app/src/main/AndroidManifest.xml"

        if not file_path.exists():
            print_error(f"AndroidManifest.xml not found at {file_path}")
            return False

        with open(file_path, 'r') as f:
            content = f.read()

        required_permissions = {
            "Storage": [
                "READ_EXTERNAL_STORAGE",
                "WRITE_EXTERNAL_STORAGE",
                "MANAGE_EXTERNAL_STORAGE"
            ],
            "Bluetooth": [
                "BLUETOOTH",
                "BLUETOOTH_ADMIN",
                "BLUETOOTH_CONNECT",
                "BLUETOOTH_SCAN"
            ],
            "System": [
                "SYSTEM_ALERT_WINDOW",
                "BIND_DEVICE_ADMIN"
            ],
            "CANbus Custom": [
                "com.tw.carinfoservice.permission.ACCESS_CANBUS",
                "com.tw.car.permission.ACCESS_SERVICE"
            ]
        }

        all_found = True

        for category, perms in required_permissions.items():
            print(f"\n{Colors.BOLD}{category} Permissions:{Colors.RESET}")
            category_results = []

            for perm in perms:
                if perm in content:
                    print_success(f"{perm}")
                    category_results.append(True)
                else:
                    print_error(f"{perm} - MISSING")
                    category_results.append(False)
                    all_found = False

            self.results["permissions"][category] = all(category_results)

        # Summary
        if all_found:
            print(f"\n{Colors.GREEN}{Colors.BOLD}All permissions added successfully!{Colors.RESET}")
        else:
            print(f"\n{Colors.YELLOW}{Colors.BOLD}Some permissions missing - see above{Colors.RESET}")

        return all_found

    def validate_transaction_mapping(self):
        """Validate expanded transaction mapping in VehicleHAL.ts"""
        print_section("3. Transaction Mapping")

        file_path = self.project_root / "src/services/VehicleHAL.ts"

        if not file_path.exists():
            print_error(f"VehicleHAL.ts not found at {file_path}")
            return False

        with open(file_path, 'r') as f:
            content = f.read()

        tx_codes = {
            "TX=3": ("Speed", r'if\s*\(\s*tx\s*===\s*3'),
            "TX=4": ("Voltage", r'if\s*\(\s*tx\s*===\s*4'),
            "TX=5": ("RPM=0 Detection", r'if\s*\(\s*tx\s*===\s*5'),
            "TX=7,8": ("Door/Climate Status", r'if\s*\(\s*\(\s*tx\s*===\s*7\s*\|\|\s*tx\s*===\s*8\s*\)'),
            "TX=9": ("Coolant Temp", r'if\s*\(\s*tx\s*===\s*9'),
            "TX=10": ("Oil Temp", r'if\s*\(\s*tx\s*===\s*10'),
            "TX=18": ("Gear Position", r'if\s*\(\s*tx\s*===\s*18'),
            "TX=20": ("Body Status", r'if\s*\(\s*tx\s*===\s*20')
        }

        all_mapped = True

        for tx_code, (description, pattern) in tx_codes.items():
            if re.search(pattern, content):
                print_success(f"{tx_code} → {description}")
                self.results["transaction_mapping"][tx_code] = True
            else:
                print_error(f"{tx_code} → {description} - NOT MAPPED")
                self.results["transaction_mapping"][tx_code] = False
                all_mapped = False

        # Check for documentation
        if "Transaction Code Reference" in content:
            print_success("Transaction code documentation found")
        else:
            print_warning("Transaction code documentation missing")

        return all_mapped

    def validate_native_fallback(self):
        """Validate native CANbus fallback in OBD2Service.ts"""
        print_section("4. Native CANbus Fallback")

        file_path = self.project_root / "src/services/OBD2Service.ts"

        if not file_path.exists():
            print_error(f"OBD2Service.ts not found at {file_path}")
            return False

        with open(file_path, 'r') as f:
            content = f.read()

        checks = {
            "nativeFallbackMode": ("Native fallback mode flag", True),
            "initNativeFallback": ("Native fallback initialization", True),
            "isUsingNativeFallback": ("Native fallback status method", True),
            "getConnectionStatus": ("Connection status method", True),
            "else if (this.nativeFallbackMode)": ("Native mode in scanForFaults", True)
        }

        all_implemented = True

        for keyword, (description, required) in checks.items():
            if keyword in content:
                print_success(description)
            else:
                if required:
                    print_error(f"{description} - NOT FOUND")
                    all_implemented = False
                else:
                    print_warning(f"{description} - OPTIONAL, not found")

        # Check for AIDL active detection
        if "this.hal.isAidlActive()" in content:
            print_success("AIDL active detection implemented")
        else:
            print_error("AIDL active detection missing")
            all_implemented = False

        self.results["native_fallback"] = all_implemented
        return all_implemented

    def check_build_prerequisites(self):
        """Check if build environment is ready"""
        print_section("5. Build Environment Check")

        checks = []

        # Check Node.js
        try:
            result = subprocess.run(['node', '--version'], capture_output=True, text=True)
            node_version = result.stdout.strip()
            print_success(f"Node.js installed: {node_version}")
            checks.append(True)
        except FileNotFoundError:
            print_error("Node.js not found")
            checks.append(False)

        # Check npm
        try:
            result = subprocess.run(['npm', '--version'], capture_output=True, text=True)
            npm_version = result.stdout.strip()
            print_success(f"npm installed: {npm_version}")
            checks.append(True)
        except FileNotFoundError:
            print_error("npm not found")
            checks.append(False)

        # Check package.json
        package_json = self.project_root / "package.json"
        if package_json.exists():
            print_success("package.json found")
            checks.append(True)
        else:
            print_error("package.json not found")
            checks.append(False)

        # Check Capacitor
        try:
            result = subprocess.run(['npx', 'cap', '--version'], capture_output=True, text=True, cwd=self.project_root)
            cap_version = result.stdout.strip()
            print_success(f"Capacitor installed: {cap_version}")
            checks.append(True)
        except:
            print_error("Capacitor not found")
            checks.append(False)

        # Check Android directory
        android_dir = self.project_root / "android"
        if android_dir.exists() and android_dir.is_dir():
            print_success("Android directory found")
            checks.append(True)
        else:
            print_error("Android directory not found")
            checks.append(False)

        # Check gradlew
        gradlew = self.project_root / "android/gradlew"
        if gradlew.exists():
            print_success("gradlew found")
            checks.append(True)
        else:
            print_error("gradlew not found")
            checks.append(False)

        return all(checks)

    def generate_report(self):
        """Generate final validation report"""
        print_section("Validation Report")

        overall = (
            self.results["aidl_interface"] and
            all(self.results["permissions"].values()) and
            all(self.results["transaction_mapping"].values()) and
            self.results["native_fallback"]
        )

        self.results["overall"] = overall

        # Print summary table
        print(f"{Colors.BOLD}{'Fix':<30} {'Status':<15}{Colors.RESET}")
        print("-" * 45)

        status_icon = lambda x: f"{Colors.GREEN}✓ PASS{Colors.RESET}" if x else f"{Colors.RED}✗ FAIL{Colors.RESET}"

        print(f"{'1. AIDL Interface':<30} {status_icon(self.results['aidl_interface'])}")

        perm_pass = all(self.results["permissions"].values())
        print(f"{'2. Permissions':<30} {status_icon(perm_pass)}")

        tx_pass = all(self.results["transaction_mapping"].values())
        print(f"{'3. Transaction Mapping':<30} {status_icon(tx_pass)}")

        print(f"{'4. Native Fallback':<30} {status_icon(self.results['native_fallback'])}")

        print("\n" + "-" * 45)

        if overall:
            print(f"\n{Colors.GREEN}{Colors.BOLD}✓ ALL FIXES VALIDATED SUCCESSFULLY!{Colors.RESET}")
            print(f"{Colors.GREEN}Ready to build and deploy.{Colors.RESET}\n")
            return 0
        else:
            print(f"\n{Colors.RED}{Colors.BOLD}✗ VALIDATION FAILED{Colors.RESET}")
            print(f"{Colors.YELLOW}Please review errors above and fix before building.{Colors.RESET}\n")
            return 1

    def save_report_json(self):
        """Save validation report as JSON"""
        output_file = self.project_root / "validation-report.json"
        with open(output_file, 'w') as f:
            json.dump(self.results, f, indent=2)
        print_info(f"Detailed report saved to: {output_file}")

def main():
    print(f"\n{Colors.BOLD}{Colors.BLUE}{'='*60}{Colors.RESET}")
    print(f"{Colors.BOLD}{Colors.BLUE}Boot Log Error Fixes - Validation Script{Colors.RESET}")
    print(f"{Colors.BOLD}{Colors.BLUE}{'='*60}{Colors.RESET}\n")

    validator = FixValidator()

    # Run all validations
    validator.validate_aidl_interface()
    validator.validate_permissions()
    validator.validate_transaction_mapping()
    validator.validate_native_fallback()
    validator.check_build_prerequisites()

    # Generate report
    exit_code = validator.generate_report()
    validator.save_report_json()

    if exit_code == 0:
        print_info("Next steps:")
        print("  1. Run: npm run build")
        print("  2. Run: npx cap sync android")
        print("  3. Run: cd android && ./gradlew assembleDebug")
        print("  4. Install APK on headset")

    sys.exit(exit_code)

if __name__ == "__main__":
    main()
