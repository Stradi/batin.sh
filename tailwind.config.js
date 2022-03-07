function withOpacity(variable, isImportant = false) {
  return (arg) => {
    if(arg && arg.opacityValue) {
      return `rgba(var(${ variable }), ${ arg.opacityValue || "1" }) ${ isImportant ? "!important" : ""}`;
    } else {
      return `rgb(var(${ variable })) ${ isImportant ? "!important" : ""}`;
    }
  };
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "540px",
        lg: "720px",
        xl: "960px"
      }
    },
    extend: {
      colors: {
        "background": withOpacity("--color-background"),
        "on-background": withOpacity("--color-on-background"),

        "primary": withOpacity("--color-primary"),
        "on-primary": withOpacity("--color-on-primary"),

        "gray": withOpacity("--color-gray")
      },
      typography: {
        DEFAULT: {
          css: {
            "*": {
              color: withOpacity("--color-on-background")()
            },
          }
        }
      },
      fontFamily: {
        "body": "Source Sans Pro, sans-serif"
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp")
  ],
}