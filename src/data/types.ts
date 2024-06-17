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

export const socialMediaSites = [
  "facebook",
  "twitter",
  "instagram",
  "linkedin",
];

export type PolicyType = (typeof policyTypeNames)[number];

export type Policy = {
  source?: string | null;
  positive?: boolean | null;
};

export type WinningProbability = {
  percentage: number;
  source: string;
};

export type PolicyInterests = {
  climate?: Policy;
  migration?: Policy;
  LGBTQ?: Policy;
  workers?: Policy;
  NHS?: Policy;
  benefits?: Policy;
  publicOwnership?: Policy;
  housing?: Policy;
  palestine?: Policy;
};

export type Contact = {
  email?: string | null;
  phone?: string | null;
  twitter?: string | null;
  facebook?: string | null;
  linkedin?: string | null;
  instagram?: string | null;
};

export type MP = {
  name: string;
  constituency: string;
  incumbent_party: PartyIDs;
  incumbent_majority_size: number | "n/a";
  already_councillor: boolean;
  biography: string;
  contact: Contact;
  profession: {
    current?: string;
    director?: string;
    membership?: string;
    charity?: string;
  };
  policyInterests: Record<string, Policy | undefined>; // TODO - inconsistent casing (need to fix db table)
  education?: string | null;
  notes?: string;
  headshot_link?: string;
  winningProbability?: WinningProbability;
};

export type ViewType = "about" | "index";

export type Filters = {
  policies: Record<Partial<PolicyType>, Policy>;
  searchInput: string;
  sortDescending?: boolean;
};
