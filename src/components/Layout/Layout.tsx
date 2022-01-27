import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { NavigationBar, NavigationBarProps } from "../NavigationBar";
import { Footer, FooterProps } from "../Footer";

interface LayoutProps {
  children?: React.ReactNode;
}

Layout.defaultProps = {
  children: null
};

function Layout(props: LayoutProps) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          brand
          navigationLinks {
            text
            to
          }
        }
      }
    }
  `);

  const navigationBarProps: NavigationBarProps = {
    brandText: data.site.siteMetadata.brand,
    links: data.site.siteMetadata.navigationLinks
  };

  const footerProps: FooterProps = {
    copyright: data.site.siteMetadata.brand
  }

  return (
    <div>
      <NavigationBar { ...navigationBarProps } />
      { props.children }
      <Footer { ...footerProps } />
    </div>
  )
}

export {
  Layout,
  type LayoutProps
};