import React from "react";
import { ProjectTitle } from "../ProjectTitle";
import { PolicyStance } from "./PolicyStance";

export const Filters: React.FC = () => {
  return (
    <>
      <div className="px-6">
        <ProjectTitle />
        <PolicyStance />
      </div>
    </>
  );
};
