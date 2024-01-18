import React from "react";
import { MP } from "../../data/types";
import { ProfileContent, ProfileHeader } from "./Profile";

export const Accordion: React.FC<{ mps: MP[] }> = ({ mps }) => {
  return (
    <div className="collapse-group">
      {mps.map((mp, i) => {
        return (
          <div className="collapse" key={i}>
            <input type="checkbox" id={`collapse-${i}`} />
            <label
              htmlFor={`collapse-${i}`}
              className="mp-card collapse-title border-b border-gray-200 bg-gray-50 dark:bg-slate-900 px-4"
              data-ph-capture-attribute-mp-name={mp.name}
            >
              <ProfileHeader
                name={mp.name}
                constituency={mp.constituency}
                socials={mp.socialMedia}
                bio={mp.biography}
                policyInterests={mp.policyInterests}
                profile={mp.profilePic}
                contact={mp.contact}
              />
            </label>
            <div className="collapse-content">
              <div className="min-h-0 p-6 border-l border-slate-400">
                <ProfileContent mp={mp} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
