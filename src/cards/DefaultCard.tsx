import classnames from "classnames";
import React from "react";
import { ResultCardProps } from "../types";

const DefaultCard = ({ result }: ResultCardProps) => {
  const { id, name } = result;
  return <div className={classnames("py-2")}>{name}</div>;
};

export default DefaultCard;
