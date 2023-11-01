import React from "react";
import { SocialMediaLinks } from "../data/types";

export const ProfileHeader: React.FC<{
  name: string;
  constituency: string;
  socials: SocialMediaLinks;
}> = ({ name, constituency, socials }) => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <h2 className="font-bold">{name}</h2>
        <span>
          <p className="font-light text-sm italic">{constituency}</p>
        </span>
      </div>
      <span className="font-extralight text-sm italic">
        (social media links go here)
      </span>
    </div>
  );
};

export const ProfileContent: React.FC<{ bio: string }> = ({ bio }) => {
  return (
    <>
      <p>{bio}</p>
      <p className="pt-12 font-light italic">
        (things like profession and organisation links go here)
      </p>
    </>
  );
};
