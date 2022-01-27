import React from "react";
import { PageProps } from "gatsby";

import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { BigArticleList } from "../components/BigArticleList";

//TODO:
// - Change <b></b> tags to Links to actual pages. For example <b>articles</b> should
// changed into <Link to="articles" classNames="">articles</Link> and so on.
function IndexPage(props: PageProps) {
  return (
    <Layout>
      <Header mainText="Hi, I am Batın">
        <div>
          Most of the time, I draw <b>stuff</b> with code.
        </div>
        <div>
          I also try to write <b>articles</b> about <b>Generative Art</b>, <b>WebGL</b>, <b>Three.js</b>, <b>React</b> and more.
        </div>
      </Header>
      <BigArticleList
        title="Featured Articles"
        titleButton={{
          text: "See all",
          url: "/blog"
        }}
      />
    </Layout>
  )
}

export default IndexPage;