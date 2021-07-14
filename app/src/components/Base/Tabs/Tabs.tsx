import React from "react";
import type { FC } from "react";

const Tabs: FC = ({ children }) => {
  return (
    <div>
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
