import classnames from "classnames";
import React from "react";
import { ResultCardProps } from "../types";

const DefaultCard = ({ result }: ResultCardProps) => {
  const { id, name } = result;
  const body = result.rawData?.s_snippet ?? result.rawData?.body;
  const title = name;
  const href = result.rawData?.website ?? "#";
  return (
    <div className={classnames("py-2")}>
      <a href={href} className="text-brand hover:underline font-medium">
        {title}
      </a>
      <div className="text-sm text-gray-600">{body}</div>
    </div>
  );
};

export default DefaultCard;
