/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        "body-lg": "1rem",
        body: ".875rem",
        xl: "1.2rem",
        "5xl": "50px",
        base: "17px",
        "8xl": "5.625rem",
        7.1: "1.78034375rem",
      },
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
      fontStyle: false,
      fontWeight: {
        black: "1000",
      },
      fontFamily: {
        sans: ["DM Sans"],
      },
      colors: {
        "bold-black": "#0F0F1D",
        "main-grey": "#90909B",
        "qoute-white": "#FFFFFF",
        "cool-gray": {
          100: "#F5F5F8",
        },
        electricBlue: "#4318FF",
        silverBlue: "#B5B5BE",
        jetBlack: "#0D0D0D",
        leafGreen: "#36B273",
        paleGreen: "rgba(54, 178, 115, 0.1)",
        'rgb-104-190-244': 'rgb(104, 190, 244)',
      },
      lineHeight: {
        65: "65px",
        "leading-loose": "11.5625rem",
        1.2: "1.2",
      },
      marginLeft: {
        6: "25px",
      },
      margin: {
        21.25: "5.3125rem",
        23: "5.75rem",
        25: "6.25rem",
        "1.5%": "1.5%",
      },
      bottom: {
        "42%": "42%",
      },
      marginTop: {
        10: "10px",
      },
      width: {
        62: "250px",
        "12/12": "10%",
        30: "1.875rem",
        300: "75rem",
        120: "30rem",
        "90%": "90%",
        "95%": "95%",
        "85%": "85%",
        "80%": "80%",
        "70%": "70%",
        "65%": "65%",
        "60%": "60%",
        "30%": "30%",
        "20%": "20%",
        "15%": "15%",
        "10%": "10%",
      },
      height: {
        102: "475px",
        "70%": "70px",
        51: "200px",
        92.5: "92.5vh",
      },
      padding: {
        4: "8px",
        24: "90px",
        16: "70px",
        32: "130px",
      },
      spacing: {
        "34%": "34%",
        74: "19rem",
        6.25: "1.5625rem",
        "4%": "4%",
      },
      left: {
        34: "34px",
      },
      borderRadius: {
        2.5: "0.625rem",
        17.5: "4.375rem",
        4.8: "1.213875rem",
      },
      borderWidth: {
        1: "1px",
      },
      boxShadow: {
        custom1: "0px 8px 30px 2px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
}
