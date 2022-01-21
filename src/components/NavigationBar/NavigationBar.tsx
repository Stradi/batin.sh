import React from "react";

import { Container } from "../Container";
import { NavigationItem } from "./NavigationItem";

function NavigationBar() {
  return (
    <Container>
      <header className="sm:flex sm:justify-between sm:items-center py-4">
        <div className="text-center pb-4 sm:pb-0">
          <NavigationItem text="Batın Evirgen" isBrand />
        </div>
        <nav className="block text-center sm:inline">
          <NavigationItem to="blog" text="Blog" />
          <NavigationItem to="about" text="About Me" />
        </nav>
      </header>
    </Container>
  )
}

export { NavigationBar };