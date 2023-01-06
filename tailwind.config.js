const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Open Sans', 'sans-serif'],
                jost: ['Jost', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: colors.teal,

                gray: {
                    50: '#F4F4F4',
                    100: '#ECECEC',
                    200: '#D3D4D4',
                    300: '#A7A8A8',
                    400: '#797B7C',
                    500: '#55585A',
                    600: '#404345',
                    700: '#2F3133',
                    800: '#212324',
                    900: '#18191a',
                },
            },
            animation: {
                bounce: 'bounce 0.85s cubic-bezier(0.28, 0.84, 0.42, 1)',
                elastic: 'elastic 0.85s linear forwards',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
            },
        },
        keyframes: {
            bounce: {
                '0%': { transform: 'scale(1, 1) translateY(0)' },
                '10%': { transform: 'scale(1.1, 0.9) translateY(0)' },
                '30%': { transform: 'scale(0.9, 1.1) translateY(-5px)' },
                '50%': { transform: 'scale(1.05, 0.95) translateY(0)' },
                '57%': { transform: 'scale(1, 1) translateY(-2px)' },
                '64%': { transform: 'scale(1, 1) translateY(0)' },
                '100%': { transform: 'scale(1, 1) translateY(0)' },
            },
            elastic: {
                '0%': { transform: 'translateX(0)' },
                '16%': { transform: 'translateX(55%)' },
                '28%': { transform: 'translateX(5%)' },
                '44%': { transform: 'translateX(37%)' },
                '59%': { transform: 'translateX(19%)' },
                '73%': { transform: 'translateX(22%)' },
                '88%': { transform: 'translateX(19%)' },
                '100%': { transform: 'translateX(22%)' },
            },
        },
    },
}
