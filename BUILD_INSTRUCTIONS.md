# How to Build APK for The Twahh Model RM

Since this is a Progressive Web App (PWA), you can easily convert it into an Android APK.

## Method 1: Use a PWA-to-APK Service (Easiest)
1. Zip the contents of the `apk/` folder.
2. Upload the zip to a service like [PWA Builder](https://www.pwabuilder.com/).
3. Follow the steps to generate an APK.

## Method 2: Using Capacitor (Professional)
If you have Node.js installed, you can wrap it locally.

1. **Initialize Capacitor**
   ```bash
   npm init capacitor
   ```
2. **Install Android Platform**
   ```bash
   npm install @capacitor/android
   npx cap add android
   ```
3. **Point to Web Assets**
   - Edit `capacitor.config.json` and set `webDir` to `.` (current directory).
4. **Sync and Open**
   ```bash
   npx cap sync
   npx cap open android
   ```
   - This opens Android Studio where you can build the signed APK.

## Method 3: Bubblewrap (CLI)
Bubblewrap is a CLI tool from Google to create TWA (Trusted Web Activity) apps.

1. **Install Bubblewrap**
   ```bash
   npm i -g @bubblewrap/cli
   ```
2. **Initialize**
   ```bash
   bubblewrap init --manifest=manifest.json
   ```
3. **Build**
   ```bash
   bubblewrap build
   ```

## Running Locally
To test the dashboard in your browser before building:
1. Open `index.html` in Chrome or usage a local server:
   ```bash
   python3 -m http.server 8000
   ```
2. Navigate to `http://localhost:8000`.
