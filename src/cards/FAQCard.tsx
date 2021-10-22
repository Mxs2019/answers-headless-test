import classnames from "classnames";
import React, { useState } from "react";
import { MdChevronLeft } from "react-icons/md";
import Expandable from "../components/Expandable";
import { ResultCardProps } from "../types";
import { getFieldValues } from "../utilities/fields";

const FAQCard = ({ result, verticalKey }: ResultCardProps) => {
  const { id, title, body, url } = getFieldValues(result, verticalKey);
  const [expanded, setExpanded] = useState(false);

  return <Expandable title={title}>{body}</Expandable>;
  
};

export default FAQCard;
