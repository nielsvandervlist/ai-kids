const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.js'],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            colors: {
                blue: '#3C47A0',
                blueDark: '#1E205C',
                blueDarker: '#141234',
                purple: '#8758AF',
                purpleTransparent: 'rgba(83,33,141,0.16)',
                purpleLight: '#B89FD5',
                orange: '#FF921A',
            },
            boxShadow: {
                orange: '0 0 4px 0 #FF921A',
                purple: '0 2px 7px 0 #8758AF',
                purpleCard: '0 2px 7px 0 #8758AF',
                white: '0 0 6px 3px rgba(255,255,255,0.50)',
                whiteText: '0 2px 4px rgba(255,255,255,0.50)',
                black: '0 0 11px 4px rgba(0,0,0,0.50)',
            },
            borderRadius: {
                cardInfo: '15px 0 15px 15px',
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
