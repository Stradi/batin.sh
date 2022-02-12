import React from "react";
import { PageProps, graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { GatsbyImage } from "gatsby-plugin-image";

import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { SEO } from "../components/SEO";

import { DateUtils, QueryUtils } from "../utils";
import { GetArticleQueryResult } from "../types";

import { p5Wrapper } from "../components/p5Wrapper";

function BlogTemplate(props: PageProps<GetArticleQueryResult>) {
  const article = QueryUtils.getArticle(props.data);

  const shortcodes = {
    p5Wrapper
  }
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
        <div className="mt-8 prose md:prose-xl prose-headings:my-4 prose-p:my-4 max-w-none">
          <div className="text-center">
            <p>Written by <span className="font-bold text-primary">{ article.author }</span> on { DateUtils.toReadableFullDate(new Date(props.data.mdx.frontmatter.date)) }</p>
            <h1>{ article.title }</h1>
            <div className="py-4">
              {
                article.tags.map(tag => (
                  <Link className="bg-surface text-on-surface mx-2 px-2 py-1 font-normal no-underline transition hover:bg-surface-hover" key={ tag } to={ `/tag/${ tag }` }>{ tag }</Link>
                )) 
              }
            </div>
            { article.image.data && <GatsbyImage image={ article.image.data } alt="Cover image" /> }
          </div>
          <MDXProvider components={ shortcodes }>
            <MDXRenderer>
              { article.body }
            </MDXRenderer>
          </MDXProvider>
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
            gatsbyImageData(aspectRatio: 1.717)
          }
        }
      }
      body
      slug
    }    
  }
`;

export default BlogTemplate;