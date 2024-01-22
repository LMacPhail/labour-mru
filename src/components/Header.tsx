import React from "react";
import { ProjectTitle } from "./atoms/ProjectTitle";
import { SearchInput } from "./filters/SearchInput";
import { NavLink, useLocation } from "react-router-dom";
import { Session } from "@supabase/supabase-js";

export const Header: React.FC<{ session: Session | null }> = ({ session }) => {
  const route = useLocation();
  return (
    <header className="sticky top-0 z-10 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white border-b text-sm py-2.5 sm:py-4 dark:bg-gray-800 dark:border-gray-700">
      <nav
        className="flex flex-wrap justify-between flex-row gap-2 basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
        aria-label="Global"
      >
        <div className="mr-5 md:mr-0 md:hidden">
          <ProjectTitle />
        </div>

        <div className="flex items-center justify-end sm:gap-x-3 sm:order-3">
          <div className="flex flex-wrap gap-2">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            {session === null ? (
              <NavLink className="nav-link accent" to="/sign-up">
                Sign Up
              </NavLink>
            ) : (
              <NavLink className="nav-link" to="/account">
                Account
              </NavLink>
            )}

            <div className="md:hidden">
              <label
                htmlFor="my-drawer"
                className="btn btn-sm drawer-button bg-slate-200 dark:bg-slate-700"
              >
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
        {route.pathname === "/" && <SearchInput />}
      </nav>
    </header>
  );
};
