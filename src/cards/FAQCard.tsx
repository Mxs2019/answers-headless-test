import { Result } from "@yext/answers-core";
import React, { useState } from "react";
import Expandable from "../components/Expandable";
import { getFieldValues } from "../utilities/fields";

type Props = {
  result: Result;
  verticalKey: string;
};

const FAQCard = ({ result, verticalKey }: Props) => {
  const { id, title, body, url } = getFieldValues(result, verticalKey);
  const [expanded, setExpanded] = useState(false);

  return <Expandable title={title}>{body}</Expandable>;
};

export default FAQCard;
