import classnames from "classnames";
import React from "react";
import FAQCard from "../cards/FAQCard";
import SectionHeader from "../components/SectionHeader";
import { SectionProps } from "../types";

const FAQSection = ({ title, results, verticalKey }: SectionProps) => {
  return (
    <div className={classnames("")}>
      <SectionHeader>{title}</SectionHeader>
      <div className="divide-y border-b">
        {results.map((r) => (
          <FAQCard key={r.id} result={r} verticalKey={verticalKey} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
