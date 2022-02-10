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
        "surface": withOpacity("--color-surface"),
        "primary": withOpacity("--color-primary"),
        "secondary": withOpacity("--color-secondary"),
        "on-background": withOpacity("--color-on-background"),
        "on-surface": withOpacity("--color-on-surface"),
        "on-primary": withOpacity("--color-on-primary"),
        "on-secondary": withOpacity("--color-on-secondary"),
        "surface-hover": withOpacity("--color-surface-hover")
      },
      typography: {
        DEFAULT: {
          css: {
            "*": {
              color: withOpacity("--color-on-background")()
            },
            "h1, h2, h3, h4, th": {
              fontWeight: "700",
              marginBottom: "1rem !important",
              marginTop: "1rem !important"
            },
            p: {
              marginBottom: "1rem",
              marginTop: "1rem"
            },
            a: {
              color: withOpacity("--color-on-background")(),
              "&:hover": {
                color: withOpacity("--color-primary", true)()
              }
            }
          }
        }
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}