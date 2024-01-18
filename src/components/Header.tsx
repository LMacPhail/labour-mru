import React from "react";
import { ProjectTitle } from "./atoms/ProjectTitle";
import { ViewType } from "../data/types";
import { SET_VIEW_ACTION } from "../state/actions";
import { useDispatch } from "react-redux";
import { SearchInput } from "./filters/SearchInput";

export const Header: React.FC<{
  view: "about" | "index";
}> = ({ view }) => {
  const dispatch = useDispatch();
  const setView = (view: ViewType) => {
    dispatch({ type: SET_VIEW_ACTION, payload: { view } });
  };

  return (
    <header className="sticky top-0 z-10 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white border-b text-sm py-2.5 sm:py-4 md:pl-72 dark:bg-gray-800 dark:border-gray-700">
      <nav
        className="flex flex-wrap justify-between flex-row gap-2 basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
        aria-label="Global"
      >
        <div className="mr-5 md:mr-0 md:hidden">
          <ProjectTitle />
        </div>

        <div className="flex items-center justify-between sm:gap-x-3 sm:order-3">
          <div className="flex gap-2">
            <button
              className={`btn btn-sm`}
              onClick={() => setView("index")}
              name="Go to MP list view"
            >
              Home
            </button>
            <button
              className={`btn btn-sm`}
              onClick={() => setView("about")}
              name="Go to FAQ and about page"
            >
              About
            </button>
            <div className="md:hidden">
              <label htmlFor="my-drawer" className="btn btn-sm drawer-button">
                <span className="sr-only">Toggle Sidebar</span>
                <svg
                  className="w-5 h-5"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
        {view === "index" && <SearchInput />}
      </nav>
    </header>
  );
};
