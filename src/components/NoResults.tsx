import classnames from "classnames";
import React from "react";

type Props = {
  //Insert Props Here
  className?: string;
};

const NoResults = ({ className }: Props) => {
  return <div className={classnames("bg-gray-200 p-8")}>No Results</div>;
};

export default NoResults;
