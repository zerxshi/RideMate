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
                605: "605px",
            },
            transformOrigin: {
                "top-center": "top center",
            },
            scale: {
                99: "0.99",
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
                remove: {
                    "0%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                    "100%": {
                        opacity: "0",
                        transform: "translateY(200%)",
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
                slideDown400: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-400%)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                slideDownImg: {
                    "0%": {
                        transform: "translateY(-30%)",
                    },
                    "100%": {
                        transform: "translateY(0)",
                    },
                },
                slideUp: {
                    "0%": {
                        transform: "translateY(100%)",
                    },
                    "100%": {
                        transform: "translateY(0)",
                    },
                },
                slideUp400: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(400%)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
            },
            animation: {
                growOut: "growOut 300ms ease-in-out",
                append: "append 500ms ease-in-out",
                remove: "remove 500ms ease-in-out",
                slideDown: "slideDown 300ms ease-in-out",
                slideDownImg: "slideDownImg 300ms ease-in-out",
                slideUp: "slideUp 300ms ease-in-out",
                slideDown400: "slideDown400 500ms ease-in-out",
                slideUp400: "slideUp400 500ms ease-in-out",
            },
        },
    },
    plugins: [],
}
