import classnames from "classnames";
import React from "react";
import DefaultCard from "../cards/DefaultCard";
import SectionHeader from "../components/SectionHeader";
import { SectionProps } from "../types";

const DefaultSection = ({ title, results, verticalKey }: SectionProps) => {
  return (
    <div className={classnames("")}>
      <SectionHeader>{title}</SectionHeader>
      <div className="divide-y border-b">
        {results.map((r) => (
          <DefaultCard key={r.id} result={r} verticalKey={verticalKey} />
        ))}
      </div>
    </div>
  );
};

export default DefaultSection;
