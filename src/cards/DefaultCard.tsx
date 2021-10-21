import classnames from "classnames";
import React from "react";
import { ResultCardProps } from "../types";
import { getFieldValues } from "../utilities/fields";

const DefaultCard = ({ result, verticalKey }: ResultCardProps) => {
  const { id, title, body, url } = getFieldValues(result, verticalKey);
  return (
    <div className={classnames("py-2")}>
      <a href={url} className="text-brand hover:underline font-medium">
        {title}
      </a>
      <div className="text-sm text-gray-600">{body}</div>
    </div>
  );
};

export default DefaultCard;
