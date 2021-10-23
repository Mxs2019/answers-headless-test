import classnames from "classnames";
import React from "react";

type Props = {
  //Insert Props Here
  className?: string;
  icon?: React.ReactNode;
  children: string;
  href?: string;
};

const CTA = ({ className, icon, children, href = "#" }: Props) => {
  return (
    <div>
      <a
        className={classnames(
          className,
          "text-left inline-flex items-center text-brand gap-2 -my-1 py-1 hover:bg-brand hover:text-white -mx-2 px-2 rounded overflow-hidden transition-all hover:shadow-lg"
        )}
        href={href}
      >
        {icon && <div>{icon}</div>}
        <div>{children}</div>
      </a>
    </div>
  );
};

export default CTA;
