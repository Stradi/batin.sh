import React from "react";
import { PageProps, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import { SEO } from "../components/SEO";

import { GetPageQueryResult } from "../types";
import { DateUtils, QueryUtils } from "../utils";

function PageTemplate(props: PageProps<GetPageQueryResult>) {
  const page = QueryUtils.getPage(props.data);
  return (
    <Layout>
      <SEO
        title={ page.title }
        description={ page.description }
        url={ page.url }
      />
      <Container>
        <div className="mt-8 prose md:prose-xl max-w-none">
          <div className="text-center mb-8">
            <p>Last updated on <span>{ DateUtils.toReadableFullDate(new Date(page.dateUpdated)) }</span></p>
            <h1>{ page.title }</h1>
          </div>
          <MDXRenderer>
            { page.body }
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
        dateUpdated(formatString: "MMMM D, YYYY")
        description
      }
      body
      slug
    }
  }
`;

export default PageTemplate;