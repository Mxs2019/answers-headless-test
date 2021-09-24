import classnames from "classnames";
import React from "react";
import { ResultCardProps } from "../types";

const ProductCard = ({ result }: ResultCardProps) => {
  const { id, name } = result;
  return (
    <div className={classnames("bg-gray-100 p-4 font-medium")}>{name}</div>
  );
};

export default ProductCard;
