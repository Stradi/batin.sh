import React from "react";
import { PageProps, graphql } from "gatsby";

import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { BigArticleList } from "../components/BigArticleList";

import { QueryUtils } from "../utils";
import { GetAllArticlesQueryResult } from "../types";

function IndexPage(props: PageProps<GetAllArticlesQueryResult>) {
  const articles = QueryUtils.getAllArticles(props.data, true);

  return (
    <Layout>
      <Header mainText="Hi, I am Batın">
        Most of the time I draw stuff with code. I also try to <br></br>write articles about generative art and stuff.
      </Header>
      <BigArticleList title="Here are some featured articles" articles={ articles } />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fields: {source: {eq: "blog"}}, frontmatter: {featured: {eq: true}}}
      limit: 3
    ) {
      nodes {
        frontmatter {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1)
            }
          }
          date(formatString: "MMMM D, YYYY")
        }
        id
        slug
      }
    }
  }
`;

export default IndexPage;