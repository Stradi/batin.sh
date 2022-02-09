import React, { useEffect, useState } from "react";

enum Theme {
  Minimal = "minimal",
  Dark = "dark"
}

const DEFAULT_STATE = {
  theme: Theme.Minimal,
  setTheme: (name: Theme) => {}
};

const ThemeContext = React.createContext(DEFAULT_STATE);

interface ThemeProviderProps {
  children?: React.ReactNode;
}

function ThemeProvider(props: ThemeProviderProps) {
  const [theme, setTheme] = useState(DEFAULT_STATE.theme);

  function changeThemeTo(newTheme: Theme) {
    if(theme == newTheme) {
      return;
    }

    setTheme(newTheme);
  }

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeThemeTo }}>
      { props.children }
    </ThemeContext.Provider>
  )
}

export {
  Theme,
  ThemeContext,
  ThemeProvider,
  ThemeProviderProps
}