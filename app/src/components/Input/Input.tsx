import React, { ButtonHTMLAttributes, FC } from "react";

// type Input = "button" | "submit" | "reset" | undefined;
interface Props {
  label: String
}




const Input: FC<Props> = ({ label }) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">
        {label}
        <input type="text" name="name" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
      </label>
    </>
  );
};

export { Input };
