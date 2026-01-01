/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,html}",
    ],
    theme: {
        extend: {
            colors: {
                'neon-cyan': 'var(--neon-cyan)',
                'neon-magenta': 'var(--neon-magenta)',
                'neon-yellow': 'var(--neon-yellow)',
                'neon-green': 'var(--neon-green)',
                'bg-dark': 'var(--bg-dark)',
                'glass-bg': 'var(--glass-bg)',
            },
        },
    },
    plugins: [],
}
