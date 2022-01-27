import React from "react";
import cx from "classnames";

interface ContainerProps {
  isCentered?: boolean;
  children: React.ReactNode;
};

Container.defaultProps = {
  isCentered: true
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

export {
  Container,
  type ContainerProps
};