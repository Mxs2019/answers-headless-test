import { useAnswersState } from "@yext/answers-headless-react";
import classnames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { StringParam, useQueryParam } from "use-query-params";
import config from "../answers.config";

type Props = {
  //Insert Props Here
  className?: string;
};

const Tab = ({
  title,
  to,
  active,
}: {
  title: string;
  to: string;
  active: boolean;
}) => {
  return (
    <Link
      to={to}
      className={classnames(
        "text-xs text-gray-600 mt-2 px-2 py-1 cursor-pointer hover:bg-gray-200",
        {
          "bg-gray-200 border-b-2 border-blue-700": active,
        }
      )}
    >
      {title}
    </Link>
  );
};

const Nav = ({ className }: Props) => {
  const activeVerticalKey = useAnswersState((state) => state.vertical?.key);
  const [queryParam, setQueryParam] = useQueryParam("query", StringParam);
  const { verticals } = config;
  const queryParams =
    "?" + (queryParam && queryParam?.length > 0 ? "query=" + queryParam : "");
  return (
    <div className={classnames("flex border-b mb-4")}>
      <Tab title="All" to={"/" + queryParams} active={!activeVerticalKey} />
      {Object.keys(verticals).map((verticalKey) => {
        const vertical = verticals[verticalKey];

        const title = vertical.title ?? verticalKey;
        return (
          <Tab
            key={verticalKey}
            title={title}
            to={verticalKey + queryParams}
            active={verticalKey === activeVerticalKey}
          />
        );
      })}
    </div>
  );
};

export default Nav;
