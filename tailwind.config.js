/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "470px",
      sm: "640px",
      sm2: "620px",
      sm3: "600px",
      sm4: "580px",
      sm5: "550px",
      sm6: "530px",
      md: "768px",
      md3: "665px",
      md2: "940px",
      lg: "1050px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#1DA1F2",
        secondary: "#14171A",
        wbSite: "#A73AFD",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
