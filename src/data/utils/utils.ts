import {
  DataStatus,
  Filters,
  MP,
  PartyIDs,
  PolicyInterests,
  PolicyType,
} from "./../types";

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
  35: "notes",
  36: "notes",
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
            mp.policyInterests[policyType].source = v;
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

export const filterProfiles = (profiles: MP[], filters: Filters): MP[] => {
  const policyFilters = filters.policies;
  // If there are no active filters, then return all data
  if (!Object.values(policyFilters).some((p) => p.positive !== undefined))
    return profiles;

  return profiles.filter((profile) =>
    Object.keys(policyFilters).some(
      (policyType: PolicyType) =>
        policyFilters[policyType].positive !== undefined &&
        profile.policyInterests[policyType].positive ===
          policyFilters[policyType].positive
    )
  );
};

export const fetchMPs = (
  updateProfiles: (profiles: MP[], status: DataStatus) => void
) => {
  fetch("http://localhost:4000/api")
    .then((response) => response.json())
    .then((data) => {
      updateProfiles(formatResponse(data.values), "complete");
    })
    .catch((_error) => {
      updateProfiles([], "error");
    });
};
