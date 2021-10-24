import { Result } from "@yext/answers-core";
import React from "react";
import Expandable from "../components/Expandable";
import { getFieldValues } from "../utilities/fields";

type Props = {
  result: Result;
  verticalKey: string;
};

const FAQCard = ({ result, verticalKey }: Props) => {
  const { title, body } = getFieldValues(result, verticalKey);

  return <Expandable title={title}>{body}</Expandable>;
};

export default FAQCard;
