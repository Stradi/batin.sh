import React from "react";

import { NavigationBar, NavigationBarProps } from "../NavigationBar";
import { Footer, FooterProps } from "../Footer";

interface LayoutProps {
  children?: React.ReactNode;
  navigationBarProps?: NavigationBarProps;
  footerProps?: FooterProps;
}

Layout.defaultProps = {
  children: null,
  navigationBarProps: {
    brandText: "Brand",
    links: [
      { text: "Link A", to: "/link-a" },
      { text: "Link B", to: "/link-b" }
    ]
  },
  footerProps: {
    text: "Made with ❤️ and ☕.",
    copyright: "Brand"
  }
};

function Layout(props: LayoutProps) {
  return (
    <div>
      <NavigationBar { ...props.navigationBarProps } />
      { props.children }
      <Footer { ...props.footerProps } />
    </div>
  )
}

export {
  Layout,
  type LayoutProps
};