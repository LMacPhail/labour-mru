import React from "react";
import { Filters } from "../filters/Filters";
import { ProjectTitle } from "../atoms/ProjectTitle";
import { Footer } from "./Footer";

export const SidebarContent: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between mx-8">
      <div>
        <ProjectTitle />
        <div className="divider"></div>
      </div>
      <Filters />
      <Footer />
    </div>
  );
};
