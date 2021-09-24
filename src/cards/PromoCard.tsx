import classnames from "classnames";
import React from "react";
import { ResultCardProps } from "../types";

const PromoCard = ({ result }: ResultCardProps) => {
  const { id, name } = result;
  return <div className={classnames("bg-gray-100 p-8 text-sm")}>{name}</div>;
};

export default PromoCard;
