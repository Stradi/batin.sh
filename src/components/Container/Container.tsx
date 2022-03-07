import React from "react";
import cx from "classnames";

interface ContainerProps {
  isCentered?: boolean;
  children: React.ReactNode;
  className?: string;
};

Container.defaultProps = {
  isCentered: true,
  className: ""
};

function Container(props: ContainerProps) {
  const classes = cx(
    "container max-w-full sm:max-w-xl px-2",
    { "mx-auto": props.isCentered }, 
    props.className
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