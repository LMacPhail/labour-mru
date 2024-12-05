import { DataStatus, Filters, MP, PolicyType } from "./../types";

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
  const sorted = profiles.sort((a, b) => {
    const aPercent = parseInt(a.winning_probability?.replace("%", "") ?? "0");
    const bPercent = parseInt(b.winning_probability?.replace("%", "") ?? "0");
    const sorted = sortAB(aPercent, bPercent);
    return descending ? -sorted : sorted;
  });
  return sorted;
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
      profile.policy_interests[policyType]?.source !== "" &&
      profile.policy_interests[policyType]?.source !== undefined
  );

const matchesSearchInput = (profile: MP, searchInput: string): boolean =>
  profile.name.toLowerCase().includes(searchInput) ||
  profile.constituency.toLowerCase().includes(searchInput);

export const fetchMPs = (
  updateProfiles: (profiles: MP[], status: DataStatus) => void
) => {
  const apiUrl = process.env.REACT_APP_API_ENDPOINT ?? "";
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      updateProfiles(data.mps, "complete");
    })
    .catch((_error) => {
      updateProfiles([], "error");
    });
};
