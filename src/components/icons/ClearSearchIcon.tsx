import classnames from "classnames";
import React from "react";
import { MdClear } from "react-icons/md";

type Props = {
  //Insert Props Here
  className?: string;
};

const SearchIcon = ({ className }: Props) => {
  return (
    <div className={classnames(className, "text-xl")}>
      <MdClear />
    </div>
  );
};

export default SearchIcon;
