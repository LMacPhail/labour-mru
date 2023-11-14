export type PartyIDs = "CON" | "SNP" | "LDM" | "LAB";

export type DataStatus = "loading" | "complete" | "error";

export const policyTypeNames = [
  "climate",
  "migration",
  "LGBTQ",
  "workers",
  "NHS",
  "benefits",
  "strikes",
  "publicOwnership",
];

export type PolicyType = (typeof policyTypeNames)[number];

export type Policy = {
  links?: string[];
  positive?: boolean;
};

// number comments are the column index
export type PolicyInterests = {
  climate: Policy; // 20 - 21
  migration: Policy; // 22
  LGBTQ: Policy; // 24
  workers: Policy; // 26
  NHS: Policy; // 28
  benefits: Policy; // 30
  strikes: Policy; // 32
  publicOwnership: Policy; // 34
};

export type SocialMediaLinks = {
  twitter?: string; // 12
  facebook?: string; // 13
  linkedin?: string;
  instagram?: string;
};

export type MP = {
  name: string; // 0
  constituency: string; // 1
  incumbentParty: PartyIDs; // 9
  incumbentMajoritySize: number | "n/a"; // 10
  alreadyCouncillor: string;
  biography: string;
  socialMedia: SocialMediaLinks;
  currentProfession: string; // 16
  organisationalLinks: {
    membershipOrg: string; // 17
    charitiesBoard: string;
    directorOfCompanies: string;
  };
  policyInterests: Record<PolicyType, Policy>;
  notes?: string; // 35
};

export type ViewType = "about" | "index";

export type Filters = { policies: Record<Partial<PolicyType>, Policy> };
