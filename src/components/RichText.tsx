import classnames from "classnames";
import React from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  //Insert Props Here
  className?: string;
  children: string;
};

const RichText = ({ className, children }: Props) => {
  return (
    <ReactMarkdown className={classnames(className, "prose")}>
      {children}
    </ReactMarkdown>
  );
};

export default RichText;
