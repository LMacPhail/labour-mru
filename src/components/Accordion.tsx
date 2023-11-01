import React from "react";
import { MP } from "../data/types";
import { ProfileContent, ProfileHeader } from "./Profile";

export const Accordion: React.FC<{ mps: MP[] }> = ({ mps }) => {
  return (
    <div className="accordion-group">
      {mps.map((mp, i) => {
        return (
          <div className="accordion">
            <input
              type="checkbox"
              id={`accordion-${i}`}
              className="accordion-toggle"
            />
            <label
              htmlFor={`accordion-${i}`}
              className="accordion-title bg-gray-50 dark:bg-slate-900 px-4"
            >
              <ProfileHeader
                name={mp.name}
                constituency={mp.constituency}
                socials={mp.socialMedia}
              />
            </label>
            <div className="accordion-content">
              <div className="min-h-0 px-6 border-l-2 border-slate-400">
                <ProfileContent bio={mp.biography} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
