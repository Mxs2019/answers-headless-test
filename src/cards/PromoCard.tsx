import { Result } from "@yext/answers-core";
import classnames from "classnames";
import React from "react";

type Props = {
  result: Result;
  verticalKey: string;
};
const PromoCard = ({ result }: Props) => {
  const { id, name } = result;
  return <div className={classnames("bg-gray-100 p-8 text-sm")}>{name}</div>;
};

export default PromoCard;
