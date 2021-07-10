import type { FC } from "react";
import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";

interface Props {
  label: string;
  value?: Record<string, any>;
  onChange: any;
}
const Dropdown: FC<Props> = ({ value, onChange, label, children }) => {
  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">{label}</Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate">{value?.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                {children}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export { Dropdown };
