import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  title?: string;
  titleTemplate?: string;
  description?: string;
  url?: string;
  isArticle?: boolean;
  image?: string;
}

function SEO(props: SEOProps) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          seo {
            title
            titleTemplate
            description
            twitterHandle
          }
        }
      }
    }
  `);

  const title = props.title || data.site.siteMetadata.seo.title;
  const titleTemplate = props.titleTemplate || data.site.siteMetadata.seo.titleTemplate;
  const description = props.description || data.site.siteMetadata.seo.description;
  const url = props.url ? `${ data.site.siteMetadata.siteUrl }/${ props.url }` : data.site.siteMetadata.siteUrl;
  const ogType = props.isArticle ? "article" : "website";
  const image = props.image ? `${ data.site.siteMetadata.siteUrl }${ props.image }` : undefined;
  const twitterHandle = data.site.siteMetadata.seo.twitterHandle;

  console.log(image);

  return (
    <Helmet
      title={ title }
      titleTemplate={ (title == data.site.siteMetadata.seo.title) ? "" : titleTemplate }
    >
      <meta name="description" content={ description } />

      <meta property="og:url" content={ url } />
      <meta property="og:type" content={ ogType } />
      <meta property="og:title" content={ title } />
      <meta property="og:description" content={ description } />
      { image && <meta property="og:image" content={ image } /> }
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ title } />
      <meta name="twitter:description" content={ description } />
      <meta name="twitter:creator" content={ twitterHandle } />
      { image && <meta name="twitter:image" content={ image } /> }
    </Helmet>
  )
}

export {
  SEO,
  type SEOProps
};