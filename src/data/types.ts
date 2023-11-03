export type PartyIDs = "CON" | "SNP" | "LDM" | "LAB";

export type Policy = {
  links: string[];
  positive?: boolean;
};

export type PolicyInterests = {
  climate: Policy; // 21 - 22
  migration: Policy; // 23
  LGBTQ: Policy; // 25
  workers: Policy; // 27
  nhs: Policy; // 29
  benefits: Policy; // 31
  strikes: Policy; // 33
  publicOwnership: Policy; // 35
};

export type SocialMediaLinks = {
  twitter: string; // 13
  facebook: string;
  linkedin: string;
  instagram: string;
};

export type MP = {
  name: string; // 0
  constituency: string; // 1
  incumbentParty: PartyIDs; // 9
  incumbentMajoritySize: number | "n/a"; // 10
  alreadyCouncillor: string;
  biography: string;
  socialMedia: SocialMediaLinks;
  currentProfession: string; // 17
  organisationalLinks: {
    membershipOrg: string; // 18
    charitiesBoard: string;
    directorOfCompanies: string;
  };
  policyInterests: PolicyInterests;
  notes?: string; // 36
};
