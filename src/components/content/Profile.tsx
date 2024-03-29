import React from "react";
import {
  Contact,
  MP,
  Policy,
  PolicyInterests,
  PolicyType,
  SocialMediaLinks,
} from "../../data/types";
import {
  CaretDown,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  UserCircle,
} from "@phosphor-icons/react";
import { FormattedContent } from "./FormattedContent";
import { PolicyCard } from "./PolicyCard";
import { PolicyBadge } from "../atoms/PolicyBadge";

const LOGO_SIZE = 24;

export const ProfileHeader: React.FC<{
  name: string;
  bio: string;
  constituency: string;
  profile?: string;
  contact?: Contact;
  socials: SocialMediaLinks;
  policyInterests: Record<PolicyType, Policy>;
}> = ({
  name,
  bio,
  constituency,
  profile,
  contact,
  socials,
  policyInterests,
}) => {
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
    <div className="flex flex-col overflow-x-hidden">
      <div className="flex flex-row justify-between flex-wrap">
        <div className="flex flex-col md:flex-row gap-6">
          <span>
            {profile ? (
              <img
                className="rounded-md"
                src={profile}
                height={100}
                width={100}
                alt="MP Headshot"
              />
            ) : (
              <UserCircle size={100} />
            )}
          </span>
          <div className="lg:w-2/3">
            <h2 className="font-bold mb-2">{name}</h2>
            <span>
              <p className="font-light text-sm mb-2">{bio}</p>
              <p className="font-light text-sm italic">{constituency}</p>
              {contact && (
                <>
                  {contact.email && (
                    <p>
                      <span className="font-bold text-sm">Email: </span>
                      <span className="font-light text-sm italic hover:cursor-text">
                        {contact.email}
                      </span>
                    </p>
                  )}
                  {contact.phone && (
                    <p>
                      <span className="font-bold text-sm">Phone: </span>
                      <span className="font-light text-sm italic hover:cursor-text">
                        {contact.phone}
                      </span>
                    </p>
                  )}
                </>
              )}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-end h-full w-full gap-4 md:justify-between">
          <span className="flex flex-row gap-2 font-extralight text-sm italic justify-end">
            {Object.keys(socials)
              .filter((site) => socials[site as keyof SocialMediaLinks] !== "")
              .map((site: string) => {
                const link = socials[site as keyof SocialMediaLinks];
                return (
                  <a
                    href={link}
                    key={`${name}-${site}-link`}
                    aria-label={`${site}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {getLogo(site)}
                  </a>
                );
              })}
          </span>
          <div className="flex flex-row flex-wrap gap-1 justify-end">
            {Object.keys(policyInterests).map((policyType) => {
              const policy = policyInterests[policyType];
              if (policy.source) {
                return (
                  <PolicyBadge
                    key={`${policyType}-badge`}
                    policyName={policyType as keyof PolicyInterests}
                    positive={policy.positive}
                  />
                );
              }
              return <div key={`${policyType}-badge`} className="hidden"></div>;
            })}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <p className="text-xs font-light italic pr-4">expand for more info</p>
        <CaretDown size={16} />
      </div>
    </div>
  );
};

export const ProfileContent: React.FC<{
  mp: MP;
}> = ({ mp }) => {
  const {
    currentProfession,
    organisationalLinks,
    education,
    policyInterests,
    notes,
  } = mp;
  const { membershipOrg, charitiesBoard, directorOfCompanies } =
    organisationalLinks;
  const professionalInfo = [
    currentProfession,
    membershipOrg,
    charitiesBoard,
    directorOfCompanies,
  ].some((info) => info !== "");
  return (
    <>
      {professionalInfo ? (
        <>
          <FormattedContent
            subHeader="Profession"
            rawContent={currentProfession}
          />
          <FormattedContent
            subHeader="Organisation membership"
            rawContent={membershipOrg}
          />
          <FormattedContent
            subHeader="Board of charities"
            rawContent={charitiesBoard}
          />
          <FormattedContent
            subHeader="Director of companies"
            rawContent={directorOfCompanies}
          />
          {education && (
            <FormattedContent subHeader="Education" rawContent={education} />
          )}
          {notes && (
            <FormattedContent
              subHeader="Miscellaneous notes"
              rawContent={notes}
            />
          )}
        </>
      ) : (
        <p className="mb-2 font-light italic">
          No professional information found for this candidate at this time
        </p>
      )}
      <h4 className="font-bold my-4">Policy Interests</h4>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.keys(policyInterests).map((policyType) => {
          const policy = policyInterests[policyType];
          if (policy.source) {
            return (
              <PolicyCard
                key={`${policyType}-card`}
                policyName={policyType as keyof PolicyInterests}
                content={policy.source}
                positive={policy.positive}
              />
            );
          }
          return <div key={`${policyType}-card`} className="hidden"></div>;
        })}
      </div>
    </>
  );
};
