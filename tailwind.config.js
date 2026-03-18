/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-blue': '#0474C4',
                'brand-purple': '#5379AE',
                'dark-bg': '#262B40',
                sapphire: {
                    sky: '#0474C4',
                    mist: '#5379AE',
                    deep: '#2C444C',
                    frost: '#A8C4EC',
                    abyss: '#06457F',
                    night: '#262B40',
                },
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                space: ['Space Grotesk', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
