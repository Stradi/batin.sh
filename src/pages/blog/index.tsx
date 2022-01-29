import React from "react";
import { PageProps, graphql } from "gatsby";

import { Layout } from "../../components/Layout";
import { BigArticleList } from "../../components/BigArticleList";

interface QueryResult {
  allMdx: {
    nodes: [{
      frontmatter: {
        title: string;
        date: string;
        author: string;
      }
      id: string;
      slug: string;
      excerpt: string;
    }]
  }
}

function BlogPage(props: PageProps<QueryResult>) {
  const articles = props.data.allMdx.nodes.map(post => (
    {
      title: post.frontmatter.title,
      url: post.slug,
      author: post.frontmatter.author,
      excerpt: post.excerpt
    }
  ));
  return (
    <Layout>
      <BigArticleList title="All Articles" articles={ articles } />
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
        }
        id
        slug
        excerpt(pruneLength: 75)
      }
    }
  }
`;

export default BlogPage;