import { Result } from "@yext/answers-core";
import classnames from "classnames";
import React from "react";
import { getFieldValues } from "../utilities/fields";

type Props = {
  result: Result;
  verticalKey: string;
};

const DefaultCard = ({ result, verticalKey }: Props) => {
  const { title, body, url } = getFieldValues(result, verticalKey);
  return (
    <div className={classnames("py-2")}>
      <a href={url} className="text-brand hover:underline font-medium">
        {title}
      </a>
      <div className="text-sm text-gray-600 line-clamp-5">{body}</div>
    </div>
  );
};

export default DefaultCard;
