/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{html,js,php}"],
    theme: {
        extend: {
            fontFamily: {
                'inter': ['inter'],
            },
            zIndex: {
                '100': '100',
            }
        },
        container: {
            center: true,
            padding: '1rem',
            screen: {
                lg: '1124px',
                xl: '1124px',
                '2xl': '1124px'
            }
        }
    },
    plugins: [],
}