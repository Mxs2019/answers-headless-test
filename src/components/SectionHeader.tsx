import React from "react";

type Props = {
  //Insert Props Here
  children: React.ReactNode;
};

const SectionHeader = ({ children }: Props) => {
  return (
    <div className="text-gray-500 uppercase tracking-wider text-xs font-medium flex items-center">
      <div className="flex-none pr-2">{children}</div>
      <div className="bg-gray-200 w-full" style={{ height: "1px" }}></div>
    </div>
  );
};

export default SectionHeader;
