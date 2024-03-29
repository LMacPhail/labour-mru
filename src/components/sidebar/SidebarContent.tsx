import React from "react";
import { ProjectTitle } from "../atoms/ProjectTitle";
import { Footer } from "./Footer";
import { PolicyStance } from "../filters/PolicyStance";
import { SortByDropdown } from "../filters/Filters";

export const SidebarContent: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between mx-8 z-20">
      <div>
        <ProjectTitle />
        <div className="divider"></div>
      </div>
      <SortByDropdown />
      <PolicyStance />
      <Footer />
    </div>
  );
};
