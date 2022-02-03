import React from "react";
import { PageProps, graphql } from "gatsby";

import { Layout } from "../../components/Layout";
import { ArticleList } from "../../components/ArticleList";
import { SEO } from "../../components/SEO";

import { QueryUtils } from "../../utils";
import { GetAllArticlesQueryResult } from "../../types";

function BlogPage(props: PageProps<GetAllArticlesQueryResult>) {
  const articles = QueryUtils.getAllArticles(props.data);

  return (
    <Layout>
      <SEO title="Blog" />
      <ArticleList title="All Articles" articles={ articles } addFilters />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { source: { eq: "blog" }}}
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          tags
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

export default BlogPage;