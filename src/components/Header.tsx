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
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 md:pl-72 dark:bg-gray-800 dark:border-gray-700">
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
              className={`btn btn-${
                view === "index" ? "outline-primary" : "ghost"
              }`}
              onClick={() => setView("index")}
            >
              Home
            </button>
            <button
              className={`btn btn-${
                view === "about" ? "outline-primary" : "ghost"
              }`}
              onClick={() => setView("about")}
            >
              About
            </button>
          </div>
        </div>
        <SearchInput />
      </nav>
    </header>
  );
};
