import React from "react";
import { Policy, PolicyType, SocialMediaLinks } from "../../data/types";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import { extractLinks } from "../../data/utils/string";

const LOGO_SIZE = 24;

export const ProfileHeader: React.FC<{
  name: string;
  bio: string;
  constituency: string;
  socials: SocialMediaLinks;
}> = ({ name, bio, constituency, socials }) => {
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
      <div className="lg:w-2/3">
        <h2 className="font-bold mb-2">{name}</h2>
        <span>
          <p className="font-light text-sm mb-2">{bio}</p>
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

export const ProfileContent: React.FC<{
  profession: string;
  orgs: {
    membershipOrg: string;
    charitiesBoard: string;
    directorOfCompanies: string;
  };
  policyInterests: Record<PolicyType, Policy>;
}> = ({ profession, orgs, policyInterests }) => {
  const professionalInfo = [
    profession,
    orgs.membershipOrg,
    orgs.charitiesBoard,
    orgs.directorOfCompanies,
  ].some((info) => info !== "");
  return (
    <>
      {professionalInfo ? (
        <>
          <ContentPoint subHeader="Profession" rawContent={profession} />
          <ContentPoint
            subHeader="Organisation membership"
            rawContent={orgs.membershipOrg}
          />
          <ContentPoint
            subHeader="Board of charities"
            rawContent={orgs.charitiesBoard}
          />
          <ContentPoint
            subHeader="Director of companies"
            rawContent={orgs.directorOfCompanies}
          />
        </>
      ) : (
        <p className="mb-2 font-light italic">
          No professional information found for this candidate at this time
        </p>
      )}
    </>
  );
};

const ContentPoint: React.FC<{ subHeader: string; rawContent: string }> = ({
  subHeader,
  rawContent,
}) => {
  const contentArray = rawContent.split("|");
  if (contentArray.length === 1 && contentArray[0] === "") return <></>;

  const formattedContent = contentArray.map((content) => extractLinks(content));

  return (
    <p className="mb-2">
      <strong>{subHeader}</strong>:{" "}
      {formattedContent.length > 1 ? (
        <ul>
          {formattedContent.map((formattedPoint) => (
            <li>
              {formattedPoint.content}{" "}
              {formattedPoint.link?.[0] && (
                <a className="text-blue-500" href={formattedPoint.link[0]}>
                  (source)
                </a>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <>
          {formattedContent[0].content}{" "}
          {formattedContent[0].link && formattedContent[0].link.length > 0 && (
            <a className="text-blue-500" href={formattedContent[0]?.link[0]}>
              (source)
            </a>
          )}
        </>
      )}
    </p>
  );
};
