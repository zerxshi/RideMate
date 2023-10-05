/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "my-dark": "#222222",
                "my-gray": "#2e2e2e",
                "my-blue": "#aaf5ff",
                "my-white": "#fbfbfb",
                "my-copper": "#d28536",
                "my-dark2": "#303030",
                "my-gray2": "#6d9398",
            },
            width: {
                1500: "1500px",
            },
            transformOrigin: {
                "top-center": "top center",
            },
            keyframes: {
                growOut: {
                    "0%": {
                        transform: "scale(0)",
                    },
                    "100%": {
                        transform: "scale(1)",
                    },
                },
            },
            animation: {
                growOut: "growOut 300ms ease-in-out",
            },
        },
    },
    plugins: [],
}
