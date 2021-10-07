import classnames from "classnames";
import React from "react";
import { FaSpinner } from "react-icons/fa";

type Props = {
  //Insert Props Here
  className?: string;
};

const Spinner = ({ className }: Props) => {
  return (
    <div className={classnames(className)}>
      <FaSpinner className="animate-spin" />
    </div>
  );
};

export default Spinner;
