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

function NavigationBar(props: NavigationBarProps) {
  return (
    <header className="bg-background text-on-surface sticky top-0 w-full z-50 shadow-lg backdrop-blur-md bg-opacity-75">
      <Container className="sm:flex sm:justify-between sm:items-center py-4">
          <div className="text-center pb-4 sm:pb-0">
            <NavigationItem text={ props.brandText } isBrand />
          </div>
          <nav className="block text-center sm:inline">
            {
            props.links.map(link => (
              <NavigationItem to={ link.to } text={ link.text } key={ link.to } />
            ))
            }
            <ThemeSwitcher />
          </nav>
      </Container>
    </header>
  )
}

export {
  NavigationBar,
  type NavigationBarProps
};