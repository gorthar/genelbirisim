import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#333",
            a: {
              color: "#22c55e",
              "&:hover": {
                color: "#16a34a",
              },
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            code: {
              color: "#22c55e",
              backgroundColor: "#f3f4f6",
              padding: "0.25rem 0.4rem",
              borderRadius: "0.25rem",
              fontWeight: "400",
            },
            "code:not(pre code)": {
              color: "#22c55e",
            },
            pre: {
              backgroundColor: "#1f2937",
              color: "#e5e7eb",
              overflow: "auto",
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "1px solid #374151",
            },
          },
        },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-80px) scale(1.2)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 7s ease-in-out 1s infinite",
      },
    },
  },
  plugins: [typography],
};
