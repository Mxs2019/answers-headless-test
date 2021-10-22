import classnames from "classnames";
import React from "react";

type Props = {
  //Insert Props Here
  className?: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const TextInput = ({
  className,
  name,
  label,
  value,
  onChange,
  placeholder,
}: Props) => {
  return (
    <div className={classnames(className)}>
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <div className="mt-1">
          <input
            name={name}
            id={name}
            className="px-3 py-2 shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default TextInput;
