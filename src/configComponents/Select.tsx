import classnames from "classnames";
import React from "react";
import ReactSelect from "react-select";

type Props = {
  //Insert Props Here
  className?: string;
  name: string;
  label?: string;
  value?: string;
  onChange: (value?: string) => void;
  placeholder?: string;
  options: { value: string; label: string }[];
};

const Select = ({
  className,
  options,
  name,
  label,
  onChange,
  value,
  placeholder,
}: Props) => {
  return (
    <div className={classnames(className)}>
      <div>
        {label && (
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
        )}
        <div className="">
          <ReactSelect
            options={options}
            placeholder={placeholder}
            value={options.find((o) => o.value === value)}
            onChange={(o) => onChange(o?.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Select;
