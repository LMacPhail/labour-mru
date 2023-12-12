export type PartyIDs = "CON" | "SNP" | "LDM" | "LAB";

export type DataStatus = "loading" | "complete" | "error";

export const policyTypeNames = [
  "climate",
  "migration",
  "LGBTQ",
  "workers",
  "NHS",
  "benefits",
  "publicOwnership",
  "housing",
  "palestine",
];

export type PolicyType = (typeof policyTypeNames)[number];

export type Policy = {
  source?: string;
  positive?: boolean;
};

export type WinningProbability = {
  percentage: number; // 44
  source: string; // 45
};

// number comments are the column index
export type PolicyInterests = {
  climate: Policy; // 20 - 21
  migration: Policy; // 22
  LGBTQ: Policy; // 24
  workers: Policy; // 26
  NHS: Policy; // 28
  benefits: Policy; // 30
  publicOwnership: Policy; // 34
  housing: Policy; // 41
  palestine: Policy; // 43
};

export type SocialMediaLinks = {
  twitter?: string; // 12
  facebook?: string; // 13
  linkedin?: string;
  instagram?: string;
};

export type Contact = {
  email?: string;
  phone?: string;
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
  contact?: Contact; // 40
  education?: string; // 41
  notes?: string; // 42
  profilePic?: string; // 43
  winningProbability?: WinningProbability;
};

export type ViewType = "about" | "index";

export type Filters = {
  policies: Record<Partial<PolicyType>, Policy>;
  searchInput: string;
  sortDescending?: boolean;
};
