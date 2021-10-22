import classnames from "classnames";
import React from "react";

type Props = {
  //Insert Props Here
  className?: string;
  children?: React.ReactNode;
  narrow?: boolean;
};

const Container = ({ className, children, narrow }: Props) => {
  return (
    <div
      className={classnames(
        className,
        "container mx-auto my-4 px-2 md:px-4 flex flex-col gap-4 max-w-screen-md"
      )}
    >
      {children}
    </div>
  );
};

export default Container;
