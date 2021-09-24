import classnames from "classnames";
import React from "react";
import SectionHeader from "../components/SectionHeader";

type SectionProps = {
  //Insert Props Here
  children: React.ReactNode;
  title: string;
};

const DefaultSection = ({ title, children }: SectionProps) => {
  return (
    <div className={classnames("mt-4")}>
      <SectionHeader>{title}</SectionHeader>
      <div className="divide-y">{children}</div>
    </div>
  );
};

export default DefaultSection;
