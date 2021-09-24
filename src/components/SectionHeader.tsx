import React from "react";

type Props = {
  //Insert Props Here
  children: React.ReactNode;
};

const SectionHeader = ({ children }: Props) => {
  return (
    <div className="text-gray-700 uppercase tracking-wider text-xs font-medium">
      {children}
    </div>
  );
};

export default SectionHeader;
