import classnames from "classnames";
import React from "react";
import SectionHeader from "../components/SectionHeader";

type SectionProps = {
  //Insert Props Here
  children: React.ReactNode;
  title: string;
};

const GridSection = ({ title, children }: SectionProps) => {
  return (
    <div className={classnames("")}>
      <SectionHeader>{title}</SectionHeader>
      <div className="grid grid-cols-4 gap-2">{children}</div>
    </div>
  );
};

export default GridSection;
