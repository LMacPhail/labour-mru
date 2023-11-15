import React from "react";
import { SocialMediaLinks } from "../data/types";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

const testSocialMedia: SocialMediaLinks = {
  twitter: "",
  facebook: "",
  instagram: "",
  linkedin: "",
};
const LOGO_SIZE = 24;

export const ProfileHeader: React.FC<{
  name: string;
  constituency: string;
  socials: SocialMediaLinks;
}> = ({ name, constituency, socials }) => {
  const getLogo = (siteType: string) => {
    switch (siteType) {
      case "facebook":
        return <FacebookLogo size={LOGO_SIZE} />;
      case "twitter":
        return <TwitterLogo size={LOGO_SIZE} />;
      case "instagram":
        return <InstagramLogo size={LOGO_SIZE} />;
      case "linkedin":
        return <LinkedinLogo size={LOGO_SIZE} />;
    }
  };
  return (
    <div className="flex flex-row justify-between">
      <div>
        <h2 className="font-bold">{name}</h2>
        <span>
          <p className="font-light text-sm italic">{constituency}</p>
        </span>
      </div>
      <span className="flex flex-row font-extralight text-sm italic">
        {Object.keys(socials).map((site: string) => {
          const link = socials[site as keyof SocialMediaLinks];
          if (link !== "") {
            return (
              <a href={link} key={`${name}-${site}-link`}>
                {getLogo(site)}
              </a>
            );
          }
        })}
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
