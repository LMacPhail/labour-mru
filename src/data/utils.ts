import { PolicyStance } from "../components/filters/PolicyStance";
import { Filters, MP, PartyIDs, PolicyInterests } from "./types";

const TWITTER_IDX = 13;
const FB_IDX = 14;
const LI_IDX = 15;
const INSTA_IDX = 16;
const MEMBERSHIP_ORG_IDX = 18;
const CHARITIES_ORG_IDX = 19;
const DIRECTOR_ORG_IDX = 20;

const mpIdxLookup: Record<number, keyof MP> = {
  0: "name",
  1: "constituency",
  9: "incumbentParty",
  10: "incumbentMajoritySize",
  11: "alreadyCouncillor",
  12: "biography",
  13: "socialMedia",
  14: "socialMedia",
  15: "socialMedia",
  16: "socialMedia",
  17: "currentProfession",
  18: "organisationalLinks",
  19: "organisationalLinks",
  20: "organisationalLinks",
  21: "policyInterests",
  22: "policyInterests",
  23: "policyInterests",
  24: "policyInterests",
  25: "policyInterests",
  26: "policyInterests",
  27: "policyInterests",
  28: "policyInterests",
  29: "policyInterests",
  30: "policyInterests",
  31: "policyInterests",
  32: "policyInterests",
  33: "policyInterests",
  34: "policyInterests",
  35: "policyInterests",
  36: "notes",
  37: "notes",
};

const policyLookupIdx: Record<number, keyof PolicyInterests> = {
  21: "climate",
  22: "climate",
  23: "migration",
  24: "migration",
  25: "LGBTQ",
  26: "LGBTQ",
  27: "workers",
  28: "workers",
  29: "nhs",
  30: "nhs",
  31: "benefits",
  32: "benefits",
  33: "strikes",
  34: "strikes",
  35: "publicOwnership",
  36: "publicOwnership",
};

const blankMp = (): MP => ({
  name: "",
  constituency: "",
  incumbentParty: "CON",
  incumbentMajoritySize: 0,
  alreadyCouncillor: "",
  biography: "",
  socialMedia: {
    twitter: "",
    facebook: "",
    linkedin: "",
    instagram: "",
  },
  currentProfession: "",
  organisationalLinks: {
    membershipOrg: "",
    charitiesBoard: "",
    directorOfCompanies: "",
  },
  policyInterests: {
    11: {
      links: [],
      positive: undefined,
      type: "climate",
    },
    12: {
      links: [],
      positive: undefined,
      type: "migration",
    },
    13: {
      links: [],
      positive: undefined,
      type: "LGBTQ",
    },
    14: {
      links: [],
      positive: undefined,
      type: "workers",
    },
    15: {
      links: [],
      positive: undefined,
      type: "nhs",
    },
    16: {
      links: [],
      positive: undefined,
      type: "benefits",
    },
    17: {
      links: [],
      positive: undefined,
      type: "strikes",
    },
    18: {
      links: [],
      positive: undefined,
      type: "publicOwnership",
    },
  },
});

export const formatResponse = (values: string[][]): MP[] => {
  const mpData: MP[] = [];

  values.forEach((value, i) => {
    if (i <= 1) return;
    let mp: MP = blankMp();
    value.forEach((v, x) => {
      const valueIdx = mpIdxLookup[x];
      switch (valueIdx) {
        case undefined:
          break;
        case "socialMedia":
          if (x === TWITTER_IDX) {
            mp.socialMedia.twitter = v;
          } else if (x === FB_IDX) {
            mp.socialMedia.facebook = v;
          } else if (x === LI_IDX) {
            mp.socialMedia.linkedin = v;
          } else if (x === INSTA_IDX) {
            mp.socialMedia.instagram = v;
          }
          break;
        case "organisationalLinks":
          if (x === MEMBERSHIP_ORG_IDX) {
            mp.organisationalLinks.membershipOrg = v;
          } else if (x === CHARITIES_ORG_IDX) {
            mp.organisationalLinks.charitiesBoard = v;
          } else if (x === DIRECTOR_ORG_IDX) {
            mp.organisationalLinks.directorOfCompanies = v;
          }
          break;
        case "policyInterests":
          const policyType = policyLookupIdx[x];
          const policyIdx = Math.round(x / 2); // Unique index for each policy type
          if (mp.policyInterests[policyIdx] === undefined) {
            mp.policyInterests[policyIdx] = { type: policyType, links: [] };
          }
          if (x % 2 === 1) {
            mp.policyInterests[policyIdx].links = [v];
          } else {
            mp.policyInterests[policyIdx].positive =
              v === "Positive" ? true : v === "Negative" ? false : undefined;
          }
          break;
        case "incumbentMajoritySize":
          mp.incumbentMajoritySize = v ? parseInt(v) : "n/a";
          break;
        case "incumbentParty":
          mp.incumbentParty = v as PartyIDs;
          break;
        default:
          mp[valueIdx] = v;
      }
    });
    mpData.push(mp);
  });

  return mpData;
};

export const filterProfiles = (profiles: MP[], filters: Filters) => {};
