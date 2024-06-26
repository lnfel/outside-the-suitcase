import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: 'selector',
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
        extend: {
            colors: {
                /**
                 * https://uicolors.app/create
                 * Base: #b55829
                 */
                'tuscany': {
                    '50': '#fcf6ee',
                    '100': '#f5e6d0',
                    '200': '#eacb9d',
                    '300': '#dfac6a',
                    '400': '#d79248',
                    '500': '#ce7532',
                    '600': '#b55829',
                    '700': '#974026',
                    '800': '#7c3324',
                    '900': '#662c21',
                    '950': '#3a140e',
                },
            },
            animation: {
                'loading-spin': 'loading-spin 5s infinite'
            },
            keyframes: {
                'loading-spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '10%': { transform: 'rotate(-90deg)' },
                    '15%': { transform: 'rotate(-90deg)' },
                    '20%': { transform: 'rotate(-180deg)' },
                    '25%': { transform: 'rotate(-180deg)' },
                    '30%': { transform: 'rotate(-270deg)' },
                    '35%': { transform: 'rotate(-270deg)' },
                    '40%': { transform: 'rotate(-360deg)' },
                    '50%': { transform: 'rotate(-360deg)' },
                    '100%': { transform: 'rotate(720deg)' }
                }
            }
        }
    },
};

export default config;
