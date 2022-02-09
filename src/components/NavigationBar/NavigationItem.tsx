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
    "mx-2 px-4 font-medium text-on-surface transition hover:text-primary",
    { "text-3xl": props.isBrand },
    { "text-lg": !props.isBrand }
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