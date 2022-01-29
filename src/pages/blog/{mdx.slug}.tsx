import React from "react";
import { PageProps, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Layout } from "../../components/Layout";
import { Container } from "../../components/Container";

interface QueryResult {
  mdx: {
    frontmatter: {
      title: string;
      date: Date;
      author: string;
      tags: string[];
    }
    body: string;
  }
}

function BlogPost(props: PageProps<QueryResult>) {
  return (
    <Layout>
      <Container>
        <div className="mt-8 prose prose-xl prose-headings:font-bold prose-headings:my-4 prose-p:my-4 max-w-none">
          <div className="text-center mb-16">
            <p>Written by <span className="font-bold">{ props.data.mdx.frontmatter.author }</span> on { props.data.mdx.frontmatter.date }</p>
            <h1>{ props.data.mdx.frontmatter.title }</h1>
            <p>
              {
                props.data.mdx.frontmatter.tags.map(tag => (
                  <span className="bg-gray-300 mx-2 px-2 py-1 rounded-md">{ tag }</span>
                )) 
              }
            </p>
          </div>
          <MDXRenderer>
            { props.data.mdx.body }
          </MDXRenderer>
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        author
        tags
      }
      body
    }    
  }
`;

export default BlogPost;