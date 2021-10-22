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
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2">
        {children}
      </div>
    </div>
  );
};

export default GridSection;
