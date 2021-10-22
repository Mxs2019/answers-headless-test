import classnames from "classnames";
import React, { useState } from "react";
import { MdChevronLeft } from "react-icons/md";

type Props = {
  //Insert Props Here
  className?: string;
  title: React.ReactNode;
  children: React.ReactNode;
  defaultExpanded?: boolean;
};

const Expandable = ({
  className,
  title,
  children,
  defaultExpanded = false,
}: Props) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  return (
    <div
      className={classnames(className, {
        "overflow-hidden": !expanded,
      })}
    >
      <button
        className=" py-2 hover:bg-gray-100 text-left w-full font-medium flex items-center justify-between "
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
        {children}
      </div>
    </div>
  );
};

export default Expandable;
