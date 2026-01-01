/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,html}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            colors: {
                'neon-cyan': 'var(--neon-cyan)',
                'neon-magenta': 'var(--neon-magenta)',
                'neon-yellow': 'var(--neon-yellow)',
                'neon-green': 'var(--neon-green)',
                'bg-dark': 'var(--bg-dark)',
                'glass-bg': 'var(--glass-bg)',
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scan': 'scan 3s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                scan: {
                    '0%': { backgroundPosition: '0 -100%' },
                    '100%': { backgroundPosition: '0 100%' },
                }
            }
        },
    },
    plugins: [],
}
