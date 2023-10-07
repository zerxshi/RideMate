/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "my-dark": "#303030",
                "my-blue": "#aaf5ff",
                "my-white": "#fbfbfb",
                "my-copper": "#d28536",
                "my-dark2": "#222222",
                "my-gray2": "#2e2e2e",
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
                        transform: "scaleY(0)",
                    },
                    "100%": {
                        transform: "scaleY(1)",
                    },
                },
                append: {
                    "0%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
                    },
                },
                slideDown: {
                    "0%": {
                        transform: "translateY(-100%)",
                    },
                    "100%": {
                        transform: "translateY(0)",
                    },
                },
            },
            animation: {
                growOut: "growOut 300ms ease-in-out",
                append: "append 500ms ease-in-out",
                slideDown: "slideDown 300ms ease-in-out",
            },
        },
    },
    plugins: [],
}
