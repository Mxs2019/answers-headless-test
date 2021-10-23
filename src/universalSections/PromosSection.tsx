import classnames from "classnames";
import React from "react";
import PromoCard from "../cards/PromoCard";
import SectionHeader from "../components/SectionHeader";
import { SectionProps } from "../types";

const PromosSection = ({ title, results, verticalKey }: SectionProps) => {
  return (
    <div className={classnames("")}>
      <SectionHeader>{title}</SectionHeader>
      <div className="divide-y border-b">
        {results.map((r) => (
          <PromoCard key={r.id} result={r} verticalKey={verticalKey} />
        ))}
      </div>
    </div>
  );
};

export default PromosSection;
