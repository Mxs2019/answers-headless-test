import { useAnswersState } from "@yext/answers-headless-react";
import classnames from "classnames";
import React from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import RichText from "./RichText";

type Props = {
  //Insert Props Here
  className?: string;
};

const DirectAnswer = ({ className }: Props) => {
  const directAnswer = useAnswersState(
    (state) =>
      state.vertical.results?.directAnswer ??
      state.universal.results?.directAnswer
  );

  if (!directAnswer) return null;

  console.log(directAnswer);

  const href = directAnswer.relatedResult.rawData.websiteUrl as string;
  const title = directAnswer.relatedResult.name;

  return (
    <div className={classnames(className)}>
      {directAnswer?.type === "FEATURED_SNIPPET" && (
        <div>
          <div className="text-3xl font-medium">{directAnswer.value}</div>
          {directAnswer.fieldType === "rich_text" && (
            <RichText className="text-gray-500 mt-2">
              {directAnswer.snippet.value}
            </RichText>
          )}
          {directAnswer.fieldType !== "rich_text" && (
            <div className="text-gray-500 mt-2">
              {directAnswer.snippet.value}
            </div>
          )}
          <a
            className="text-brand line-clamp-1 hover:underline mt-2 font-medium"
            href={href}
          >
            Read more on {title}
          </a>
        </div>
      )}
      <div className="flex gap-4 items-center mt-2">
        <div className="bg-gray-300 w-full " style={{ height: "1px" }}></div>
        <div className="flex-none text-xs text-gray-500 flex gap-2 items-center">
          <div>Was this answer helpful?</div>

          <FaThumbsUp />
          <FaThumbsDown />
        </div>
      </div>
    </div>
  );
};

export default DirectAnswer;
