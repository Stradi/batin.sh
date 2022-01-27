import React from "react";

import { Container } from "../Container";

interface HeaderProps {
  mainText?: string;
  children?: React.ReactNode;
}

Header.defaultProps = {
  mainText: "This is the main text",
  children: null
};

function Header(props: HeaderProps) {  
  return (
    <Container>
      <div className="my-4 md:my-16 flex flex-col justify-center">
        <h1 className="mb-4 font-bold text-4xl md:text-8xl">{ props.mainText }</h1>
        <h1 className="text-2xl md:text-4xl">{ props.children }</h1>
      </div>
    </Container>
  )
}

export { Header };