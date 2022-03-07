import { Link } from "gatsby";
import React from "react";
import cx from "classnames";

interface NavigationItemProps {
  to?: string;
  text?: string;
}

NavigationItem.defaultProps = {
  to: "/",
  text: "Default Link",
}

function NavigationItem(props: NavigationItemProps) {
  return (
    <Link to={ props.to } className="px-6 py-2 rounded-md mx-2 bg-gray font-bold transition-colors duration-100 hover:bg-primary hover:text-on-primary" activeClassName="bg-primary text-on-primary">
      { props.text }
    </Link>
  )
}

export {
  NavigationItem,
  type NavigationItemProps
};