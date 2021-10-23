import classnames from "classnames";
import React from "react";

type Props = {
  //Insert Props Here
  className?: string;
  children: React.ReactNode;
};

const ErrorCard = ({ className, children }: Props) => {
  return (
    <div
      className={classnames(
        className,
        "p-12 bg-red-100 text-red-700 flex items-center justify-center"
      )}
    >
      {children}
    </div>
  );
};

export default ErrorCard;
