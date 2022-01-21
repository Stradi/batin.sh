import React from "react";
import cx from "classnames";

interface ContainerProps {
  isCentered?: boolean;
  children: React.ReactNode;
};

function Container(props: ContainerProps) {
  const classes = cx(
    "container px-4",
    { "mx-auto": props.isCentered }
  )

  return (
    <div className={ classes }>
      { props.children }
    </div>
  )
}

Container.defaultProps = {
  isCentered: true
}

export { Container };