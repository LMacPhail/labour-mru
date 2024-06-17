import { mps } from "../test/rawResponse";
import { Filters, MP } from "../types";
import { filterProfiles, sortByWin } from "./utils";

// // Here are the policies the test profiles mention
// // Frank McNally
// // NHS
// // strikes

// // Roisin
// // NHS

// // Martin Rhodes
// // climate
// // LGBTQ
// // NHS

// // Michael Shanks
// // migration
// // LGBTQ
// // benefits

// // John Grady
// // climate
// // workers
// // NHS
// // publicOwnership

// // Gordon mckee
// // climate

const blankFilters = (): Filters => ({
  searchInput: "",
  policies: {
    climate: {
      source: undefined,
      positive: null,
    },
    migration: {
      source: undefined,
      positive: null,
    },
    LGBTQ: {
      source: undefined,
      positive: null,
    },
    workers: {
      source: undefined,
      positive: null,
    },
    NHS: {
      source: undefined,
      positive: null,
    },
    benefits: {
      source: undefined,
      positive: null,
    },
    publicOwnership: {
      source: undefined,
      positive: null,
    },
    housing: {
      source: undefined,
      positive: null,
    },
    palestine: {
      source: undefined,
      positive: null,
    },
  },
  sortDescending: true,
});

describe("filterProfiles", () => {
  it("filters profiles that match any NHS mentions", () => {
    const NHSFilter: Filters = blankFilters();
    NHSFilter.policies["NHS"].positive = true;
    const filtered = filterProfiles(mps as MP[], NHSFilter);
    expect(filtered.length).toBe(3);
    expect(filtered[0].name).toBe("Kirith Entwistle");
    expect(filtered[2].name).toBe("Jeevun Sandher");
  });

  it("filters profiles that match NHS and climate mentions", () => {
    const NHSFilter: Filters = blankFilters();
    NHSFilter.policies["NHS"].positive = true;
    NHSFilter.policies["housing"].positive = true;

    const filtered = filterProfiles(mps as MP[], NHSFilter);
    expect(filtered.length).toBe(1);
    expect(filtered[0].name).toBe("Jeevun Sandher");
  });

  it("filters no profiles when no profile matches", () => {
    const NHSFilter: Filters = blankFilters();
    NHSFilter.policies["NHS"].positive = true;
    NHSFilter.policies["climate"].positive = true;
    NHSFilter.policies["publicOwnership"].positive = true;
    NHSFilter.policies["palestine"].positive = true;
    NHSFilter.policies["housing"].positive = true;

    const filtered = filterProfiles(mps as MP[], NHSFilter);
    expect(filtered.length).toBe(0);
  });

  it("returns all profiles if the filters are all undefined (not active)", () => {
    const NHSFilter: Filters = blankFilters();
    const filtered = filterProfiles(mps as unknown as MP[], NHSFilter);
    expect(filtered.length).toBe(4);
    expect(filtered[0].name).toBe("Kirith Entwistle");
  });
});

// describe("sortByWin", () => {
//   it("sorts by descent", () => {
//     const sorted = sortByWin(values as MP[], true);
//     expect(sorted.map((x) => x.name)).toStrictEqual([
//       "Gordon McKee",
//       "John Grady",
//       "Michael Shanks MP",
//       "Martin Rhodes",
//       "Roisin McKenna Favier",
//       "Frank McNally",
//     ]);
//   });
// });
