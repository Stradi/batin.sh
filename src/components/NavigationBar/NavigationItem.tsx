import { Link } from "gatsby";
import React from "react";
import cx from "classnames";

interface NavigationItemProps {
  to?: string;
  text?: string;
  isBrand?: boolean;
}

NavigationItem.defaultProps = {
  to: "/",
  text: "Default Link",
  isBrand: false
}

function NavigationItem(props: NavigationItemProps) {
  const classes = cx(
    "ml-8 font-medium",
    { "text-3xl text-black": props.isBrand },
    { "text-lg text-gray-700 hover:text-black hover:underline": !props.isBrand }
  )

  return (
    <Link to={ props.to } className={ classes }>
      { props.text }
    </Link>
  )
}

export {
  NavigationItem,
  type NavigationItemProps
};