import React from "react";
import { SidebarContent } from "./SidebarContent";

export const Sidebar: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="drawer md:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="menu p-4 w-72 min-h-full text-base-content bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          {/* Sidebar content here */}
          <SidebarContent />
        </div>
      </div>
    </div>
  );
};
