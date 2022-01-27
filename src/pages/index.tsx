import React from "react";
import { PageProps } from "gatsby";

import { NavigationBar } from "../components/NavigationBar";
import { Header } from "../components/Header/Header";

//TODO:
// - Change <b></b> tags to Links to actual pages. For example <b>articles</b> should
// changed into <Link to="articles" classNames="">articles</Link> and so on.
function IndexPage(props: PageProps) {
  const navigationLinks = [
    { text: "Blog", to: "/blog" },
    { text: "About", to: "/about" }
  ];

  return (
    <React.Fragment>
      <NavigationBar brandText="Batın Evirgen" links={ navigationLinks } />
      <Header mainText="Hi, I am Batın">
        <div>
          Most of the time, I draw <b>stuff</b> with code.
        </div>
        <div>
          I also try to write <b>articles</b> about <b>Generative Art</b>, <b>WebGL</b>, <b>Three.js</b>, <b>React</b> and more.
        </div>
      </Header>
    </React.Fragment>
  )
}

export default IndexPage;