import React from "react";
import { PageProps, graphql } from "gatsby";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { SmallArticleList } from "../components/SmallArticleList";

import { GetAllArticlesQueryResult } from "../types";
import { QueryUtils } from "../utils";

function TagTemplate(props: PageProps<GetAllArticlesQueryResult>) {
  const articles = QueryUtils.getAllArticles(props.data, true);

  return (
    <Layout>
      <SEO
        title={ `Posts tagged with ${ props.pageContext["tag"] }` }
        url={ `tag/${ props.pageContext["tag"] }` }
      />
      <SmallArticleList title={ `Posts tagged with ${ props.pageContext["tag"] }` } articles={ articles } />
    </Layout>
  )
}

export const query = graphql`
  query ($tag: String) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }}}
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        fields {
          source
        }
        id
        slug
      }
    }
  }
`;

export default TagTemplate;