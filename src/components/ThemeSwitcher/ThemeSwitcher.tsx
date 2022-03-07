import React, { useState } from "react";
import { Theme, ThemeContext } from "../../context";

function ThemeSwitcher() {
  function changeTheme(ctx: { theme: string, setTheme: (v?: any) => void }): void {
    if(ctx.theme == Theme.Dark) {
      ctx.setTheme(Theme.Minimal);
    } else {
      ctx.setTheme(Theme.Dark);
    }
  }

  return (
    <ThemeContext.Consumer>
      {
      ctx => (
          <a className="mx-2 px-4 font-medium text-on-surface text-lg hover:cursor-pointer" onClick={ () => { changeTheme(ctx) }}>
            {
              ctx.theme == Theme.Minimal ? "🌚" : "🌕"
            }
          </a>
        )
      }
    </ThemeContext.Consumer>
  )
}

export { ThemeSwitcher };