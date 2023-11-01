import React, { useEffect } from "react";
import { ProjectTitle } from "./ProjectTitle";
import { Filters } from "./Filters";

export const FilterSidebar: React.FC<{}> = ({}) => {
  return (
    <>
      <input type="checkbox" id="drawer-left" className="drawer-toggle" />
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center py-4">
          <label
            className="text-gray-500 hover:text-gray-600"
            htmlFor="drawer-left"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="w-5 h-5"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </label>
        </div>
      </div>
      <label className="overlay" htmlFor="drawer-left"></label>
      <div className="drawer bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="drawer-content flex flex-col h-full top-0 left-0 bottom-0 z-[60] w-64  pt-7 pb-10 overflow-y-auto scrollbar-y ">
          <label
            htmlFor="drawer-left"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="px-6">
            <ProjectTitle />
          </div>
          <Filters />
        </div>
      </div>
      <div
        id="application-sidebar"
        className={`hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700`}
      >
        <Filters />
      </div>
    </>
  );
};
