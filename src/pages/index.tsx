import React from "react";
import { PageProps, graphql } from "gatsby";

import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { ArticleList } from "../components/ArticleList/ArticleList";

import { QueryUtils } from "../utils";
import { GetAllArticlesQueryResult } from "../types";

//TODO:
// - Change <b></b> tags to Links to actual pages. For example <b>articles</b> should
// changed into <Link to="articles" classNames="">articles</Link> and so on.
function IndexPage(props: PageProps<GetAllArticlesQueryResult>) {
  const articles = QueryUtils.getAllArticles(props.data);

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
      <ArticleList title="Latest Articles" articles={ articles } />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          author
          tags
        }
        id
        slug
      }
    }
  }
`;

export default IndexPage;