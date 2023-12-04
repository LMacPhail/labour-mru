import {
  Contact,
  DataStatus,
  Filters,
  MP,
  PartyIDs,
  PolicyInterests,
  PolicyType,
  WinningProbability,
} from "./../types";
import { extractContacts } from "./string";

const TWITTER_IDX = 12;
const FB_IDX = 13;
const LI_IDX = 14;
const INSTA_IDX = 15;
const MEMBERSHIP_ORG_IDX = 17;
const CHARITIES_ORG_IDX = 18;
const DIRECTOR_ORG_IDX = 19;

const mpIdxLookup: Record<number, keyof MP> = {
  0: "name",
  1: "constituency",
  8: "incumbentParty",
  9: "incumbentMajoritySize",
  10: "alreadyCouncillor",
  11: "biography",
  12: "socialMedia",
  13: "socialMedia",
  14: "socialMedia",
  15: "socialMedia",
  16: "currentProfession",
  17: "organisationalLinks",
  18: "organisationalLinks",
  19: "organisationalLinks",
  20: "policyInterests",
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
  36: "policyInterests",
  37: "policyInterests",
  38: "policyInterests",
  39: "policyInterests",
  40: "contact",
  41: "educationType",
  42: "notes",
  44: "profilePic",
  45: "winningProbability",
  46: "winningProbability",
};

const winningLookupIdx: Record<number, keyof WinningProbability> = {
  45: "percentage",
  46: "source",
};

const policyLookupIdx: Record<number, keyof PolicyInterests> = {
  20: "climate",
  21: "climate",
  22: "migration",
  23: "migration",
  24: "LGBTQ",
  25: "LGBTQ",
  26: "workers",
  27: "workers",
  28: "NHS",
  29: "NHS",
  30: "benefits",
  31: "benefits",
  32: "strikes",
  33: "strikes",
  34: "publicOwnership",
  35: "publicOwnership",
  36: "housing",
  37: "housing",
  38: "palestine",
  39: "palestine",
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
    climate: {
      positive: undefined,
    },
    migration: {
      positive: undefined,
    },
    LGBTQ: {
      positive: undefined,
    },
    workers: {
      positive: undefined,
    },
    NHS: {
      positive: undefined,
    },
    benefits: {
      positive: undefined,
    },
    strikes: {
      positive: undefined,
    },
    publicOwnership: {
      positive: undefined,
    },
    housing: {
      positive: undefined,
    },
    palestine: {
      positive: undefined,
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
          if (x % 2 === 1) {
            mp.policyInterests[policyType].positive =
              v === "Positive" ? true : v === "Negative" ? false : undefined;
          } else {
            if (v !== "Nothing found") {
              mp.policyInterests[policyType].source = v;
            }
          }
          break;
        case "incumbentMajoritySize":
          mp.incumbentMajoritySize = v ? parseInt(v) : "n/a";
          break;
        case "incumbentParty":
          mp.incumbentParty = v as PartyIDs;
          break;
        case "contact":
          mp.contact = extractContacts(v);
          break;
        case "winningProbability":
          const winningProbabilityType = winningLookupIdx[x];
          if (winningProbabilityType === "percentage" && v !== "") {
            mp.winningProbability = {
              percentage: +v.replace("%", ""),
              source: "",
            };
          }
          if (winningProbabilityType === "source" && v !== "") {
            mp.winningProbability = {
              percentage: mp.winningProbability?.percentage ?? 0,
              source: v,
            };
          }
          break;
        default:
          if (v !== "") {
            mp[valueIdx] = v;
          }
      }
    });
    mpData.push(mp);
  });

  return mpData;
};

const sortAB = (a: number | undefined, b: number | undefined): number => {
  if (a === b) return 0;
  if (a === undefined && b) return -1;
  if (a && b === undefined) return 1;

  // can assert because if both are undefined they will have been already returned
  if (a! < b!) return -1;
  if (a! > b!) return 1;

  return 0;
};

export const sortByWin = (profiles: MP[], descending: boolean): MP[] => {
  return profiles.sort((a, b) => {
    const aPercent = a.winningProbability
      ? a.winningProbability.percentage
      : undefined;
    const bPercent = b.winningProbability
      ? b.winningProbability.percentage
      : undefined;
    const sorted = sortAB(aPercent, bPercent);
    return descending ? -sorted : sorted;
  });
};

export const filterProfiles = (profiles: MP[], filters: Filters): MP[] => {
  const policyFilters = filters.policies;

  // If there are no active filters, then return all data
  if (
    !Object.values(policyFilters).some((p) => p.positive !== undefined) &&
    filters.searchInput === ""
  )
    return profiles;

  const checkedFilters = Object.keys(policyFilters).filter(
    (type: PolicyType) => policyFilters[type].positive
  );

  return profiles.filter(
    (profile) =>
      matchesSelectedPolicies(profile, checkedFilters) &&
      matchesSearchInput(profile, filters.searchInput.toLowerCase())
  );
};

const matchesSelectedPolicies = (
  profile: MP,
  checkedFilters: PolicyType[]
): boolean =>
  checkedFilters.every(
    (policyType) =>
      profile.policyInterests[policyType].source !== "" &&
      profile.policyInterests[policyType].source !== undefined
  );

const matchesSearchInput = (profile: MP, searchInput: string): boolean =>
  profile.name.toLowerCase().includes(searchInput) ||
  profile.constituency.toLowerCase().includes(searchInput);

export const fetchMPs = (
  updateProfiles: (profiles: MP[], status: DataStatus) => void
) => {
  const apiUrl =
    (process.env.REACT_APP_API_ENDPOINT ?? "") +
    "/" +
    (process.env.REACT_APP_API_COLS ?? "");
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      updateProfiles(formatResponse(data.values), "complete");
    })
    .catch((_error) => {
      updateProfiles([], "error");
    });
};
