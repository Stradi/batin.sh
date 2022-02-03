import React from "react";
import { PageProps, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImageData } from "gatsby-plugin-image";

import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { SEO } from "../components/SEO";

import { DateUtils, QueryUtils } from "../utils";
import { GetArticleQueryResult } from "../types";

function BlogTemplate(props: PageProps<GetArticleQueryResult>) {
  const article = QueryUtils.getArticle(props.data);
  return (
    <Layout>
      <SEO
        title={ article.title }
        description={ article.description }
        url={ article.url }
        isArticle
        image={ article.image.publicURL }
      />
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
            { article.image.data && <GatsbyImage image={ article.image.data } alt="Cover image" /> }
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
        description
        image {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
      slug
    }    
  }
`;

export default BlogTemplate;