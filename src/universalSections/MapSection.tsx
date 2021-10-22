import classnames from "classnames";
import React from "react";
import SectionHeader from "../components/SectionHeader";

type SectionProps = {
  //Insert Props Here
  children: React.ReactNode;
  title: string;
};

const MapSection = ({ title, children }: SectionProps) => {
  return (
    <div className={classnames("")}>
      <SectionHeader>{title}</SectionHeader>
      <div className="bg-green-300 text-green-700 text-3xl h-36 flex items-center justify-center">
        Map Goes Here
      </div>
      <div className="divide-y border-b">{children}</div>
    </div>
  );
};

export default MapSection;
