import React from "react";
import type { FC } from "react";

const Tabs: FC = ({ children }) => {
  return (
    <div>
      {/* <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          defaultValue={tabs.find(tab => tab.current)?.name}
        >
          {tabs.map(tab => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div> */}
      <div className="sm:block">
        <nav
          className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200 justify-items-center items-center"
          aria-label="Tabs"
        >
          {children}
        </nav>
      </div>
    </div>
  );
};

export { Tabs };
