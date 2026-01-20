import os
import sys
import subprocess
import re

def check_file(path):
    if not os.path.exists(path):
        print(f"[ERROR] File not found: {path}")
        return False
    return True

def find_in_file(path, pattern):
    try:
        with open(path, 'r') as f:
            content = f.read()
            if re.search(pattern, content):
                return True
    except Exception as e:
        print(f"[ERROR] Reading {path}: {e}")
    return False

def main():
    print("=== TW DASHBOARD REGRESSION TEST ===")
    
    files_to_check = [
        "/Volumes/FATTY/apk/builder.py",
        "/Volumes/FATTY/apk/src/components/Dashboard.ts",
        "/Volumes/FATTY/apk/src/components/StartupDiagnostics.ts"
    ]
    
    all_ok = True
    for f in files_to_check:
        if not check_file(f):
            all_ok = False

    print("\n--- Feature Verification ---")
    features = [
        ("/Volumes/FATTY/apk/builder.py", "TextToSpeech", "TTS Integration"),
        ("/Volumes/FATTY/apk/builder.py", "connectELM327", "ELM327 Logic"),
        ("/Volumes/FATTY/apk/builder.py", "/storage/emulated/0/", "Log Path (Default)"),
        ("/Volumes/FATTY/apk/src/components/Dashboard.ts", "THEMES", "Theme System"),
        ("/Volumes/FATTY/apk/src/components/Dashboard.ts", "autoConnectELM327", "OBD Auto-Connect"),
        ("/Volumes/FATTY/apk/src/components/Dashboard.ts", "updateOBDDisplay", "OBD UI Tracking")
    ]
    
    for path, pattern, name in features:
        if find_in_file(path, pattern):
            print(f"[OK] {name} present")
        else:
            print(f"[FAIL] {name} missing or broken")
            all_ok = False

    print("\n--- Build Health ---")
    # Check for unclosed literals or common syntax issues
    if find_in_file("/Volumes/FATTY/apk/builder.py", r'".*[^"]$'):
        print("[WARN] Possible unclosed string literal detected in builder.py")
        
    if all_ok:
        print("\n[SUCCESS] Regression test passed. Ready for build.")
    else:
        print("\n[ERROR] Regression test failed. Please fix issues before building.")
        sys.exit(1)

if __name__ == "__main__":
    main()
