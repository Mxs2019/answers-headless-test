import classnames from "classnames";
import React from "react";

type Props = {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
};

const Container = ({ className, children }: Props) => {
  return (
    <div
      className={classnames(
        className,
        "container mx-auto max-w-screen-lg my-4 px-2 md:px-4"
      )}
    >
      {children}
    </div>
  );
};

export default Container;
