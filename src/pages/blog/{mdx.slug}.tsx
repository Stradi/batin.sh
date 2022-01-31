import React from "react";
import { PageProps, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Layout } from "../../components/Layout";
import { Container } from "../../components/Container";

import { DateUtils, QueryUtils } from "../../utils";
import { GetArticleQueryResult } from "../../types";

function BlogPost(props: PageProps<GetArticleQueryResult>) {
  const article = QueryUtils.getArticle(props.data);
  return (
    <Layout>
      <Container>
        <div className="mt-8 prose prose-xl prose-headings:font-bold prose-headings:my-4 prose-p:my-4 max-w-none">
          <div className="text-center mb-16">
            <p>Written by <span className="font-bold">{ article.author }</span> on { DateUtils.toReadableFullDate(new Date(props.data.mdx.frontmatter.date)) }</p>
            <h1>{ article.title }</h1>
            <p>
              {
                article.tags.map(tag => (
                  <span className="bg-gray-300 mx-2 px-2 py-1 rounded-md" key={ tag }>{ tag }</span>
                )) 
              }
            </p>
          </div>
          <MDXRenderer>
            { article.body }
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