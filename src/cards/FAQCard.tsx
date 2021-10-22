import classnames from "classnames";
import React, { useState } from "react";
import { MdChevronLeft } from "react-icons/md";
import { ResultCardProps } from "../types";
import { getFieldValues } from "../utilities/fields";

const FAQCard = ({ result, verticalKey }: ResultCardProps) => {
  const { id, title, body, url } = getFieldValues(result, verticalKey);
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={classnames("overflow-hidden")}>
      <button
        className=" py-2 hover:bg-gray-100 text-left w-full font-medium flex items-center justify-between"
        onClick={() => setExpanded((e) => !e)}
      >
        <div>{title}</div>
        <div className="px-2 ">
          <MdChevronLeft
            className={classnames(
              "text-gray-500 text-lg transition-all  transform",
              {
                "-rotate-90": !expanded,
                "rotate-90": expanded,
              }
            )}
          />
        </div>
      </button>
      <div
        className={classnames(" text-sm text-gray-600 transition-all", {
          "h-0 opacity-0 ": !expanded,
          "py-2": expanded,
        })}
      >
        {body}
      </div>
    </div>
  );
};

export default FAQCard;
