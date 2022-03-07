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
      <div className="text-center my-16">
        <h1 className="text-6xl font-bold">{ props.mainText }</h1>
        <h1 className="mt-8 text-lg text-gray-600">{ props.children }</h1>
      </div>
    </Container>
  )
}

export {
  Header,
  type HeaderProps
};