import React from "react";

import { Container } from "../Container";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { NavigationItem } from "./NavigationItem";

interface NavigationBarProps {
  brandText?: string;
  links?: { text: string, to: string }[];
}

NavigationBar.defaultProps = {
  brandText: "Brand",
  links: [
    { text: "Link A", to: "/link-a" },
    { text: "Link B", to: "/link-b" }
  ]
};

//TODO: Add burger menu for mobile
function NavigationBar(props: NavigationBarProps) {
  return (
    <header className="w-full">
      <div className="bg-black text-center text-white text-lg font-bold">
        { props.brandText }
      </div>
      <div className="flex justify-center py-4 shadow-md">
          <nav className="">
            {
              props.links.map(link => (
                <NavigationItem to={ link.to } text={ link.text } key={ link.to } />
                ))
              }
            <div className="absolute right-0 top-0">
              <ThemeSwitcher />
            </div>
          </nav>
      </div>
    </header>
  )
}

export {
  NavigationBar,
  type NavigationBarProps
};