import { values } from "../test/rawResponse";
import { Filters, MP } from "../types";
import { filterProfiles, formatResponse, sortByWin } from "./utils";

// Here are the policies the test profiles mention
// Frank McNally
// NHS
// strikes

// Roisin
// NHS

// Martin Rhodes
// climate
// LGBTQ
// NHS

// Michael Shanks
// migration
// LGBTQ
// benefits

// John Grady
// climate
// workers
// NHS
// publicOwnership

// Gordon mckee
// climate

const expectedValues = [
  {
    name: "Frank McNally",
    constituency:
      "Coatbridge and Bellshill (formerly Coatbridge, Chryston and Bellshill)",
    incumbentParty: "SNP",
    incumbentMajoritySize: 5,
    alreadyCouncillor:
      "Yes. Councillor for Mossend and Holytown (North Lanarkshire)",
    biography:
      "Frank McNally has been selected as Scottish Labour…nce 2012, representing Mossend and Holytown ward.",
    socialMedia: {
      twitter: "https://twitter.com/FJMcNally",
      facebook: "https://www.facebook.com/frank.mcnally.52",
      linkedin: "https://www.linkedin.com/in/frank-mcnally-6320bb139",
      instagram: "",
    },
    currentProfession: "Councillor for North Lanarkshire since 2012",
    organisationalLinks: {
      membershipOrg: "Food 365 - campaign to deliver free school meals",
      charitiesBoard: "",
      directorOfCompanies: "",
    },
    contact: undefined,
    winningProbability: {
      percentage: 90,
      source: "",
    },
    policyInterests: {
      climate: {
        source: "",
        positive: undefined,
      },
      migration: {
        source: "",
        positive: undefined,
      },
      LGBTQ: {
        source: "",
        positive: undefined,
      },
      workers: {
        source: "",
        positive: undefined,
      },
      NHS: {
        source: "Made a passing reference to NHS cuts in this campaign video",
        positive: undefined,
      },
      benefits: {
        source: "",
        positive: undefined,
      },
      publicOwnership: {
        source: "",
        positive: undefined,
      },
      housing: {
        source: "",
        positive: undefined,
      },
      palestine: {
        source: "",
        positive: undefined,
      },
    },
  },
  {
    name: "Roisin McKenna Favier",
    constituency: "Glasgow Central [to be abolished]",
    incumbentParty: "",
    incumbentMajoritySize: "n/a",
    alreadyCouncillor: "",
    biography:
      "Roisin McKenna was selected as the next candidate …al-year medical student at University of Glasgow.",
    socialMedia: {
      twitter: "https://twitter.com/Roisin_McKenna",
      facebook: "",
      linkedin:
        "https://www.linkedin.com/in/roisin-mckenna-favier-423774151/?originalSubdomain=uk",
      instagram: "",
    },
    currentProfession: "Final-year Medical Student (according to LabourList)",
    organisationalLinks: {
      membershipOrg:
        "Member of a number of student societies including …icial, Medical Student Ambassador for Glasgow Uni",
      charitiesBoard: "",
      directorOfCompanies: "",
    },
    contact: undefined,
    winningProbability: {
      percentage: 92,
      source: "",
    },
    policyInterests: {
      climate: {
        source: "",
        positive: undefined,
      },
      migration: {
        source: "",
        positive: undefined,
      },
      LGBTQ: {
        source: "",
        positive: undefined,
      },
      workers: {
        source: "",
        positive: undefined,
      },
      NHS: {
        source: "Ran the Great North Run for MS Society",
        positive: undefined,
      },
      benefits: {
        source: "",
        positive: undefined,
      },
      publicOwnership: {
        source: "",
        positive: undefined,
      },
      housing: {
        source: "",
        positive: undefined,
      },
      palestine: {
        source: "",
        positive: undefined,
      },
    },
  },
  {
    name: "Martin Rhodes",
    constituency: "Glasgow North",
    incumbentParty: "SNP",
    incumbentMajoritySize: 6,
    alreadyCouncillor: "",
    biography:
      "Martin Rhodes has been picked as the candidate for…uncil, representing Partick East/Kelvindale ward.",
    socialMedia: {
      twitter: "https://twitter.com/MartinRhodes21",
      facebook: "https://www.facebook.com/MartinRhodesGlasgow/",
      linkedin:
        "https://www.linkedin.com/in/martin-rhodes-645385188/?originalSubdomain=uk",
      instagram: "",
    },
    currentProfession:
      "Chief Executive of Scottish Fair Trade Forum (appears to be now retired)",
    organisationalLinks: {
      membershipOrg: "",
      charitiesBoard: "",
      directorOfCompanies: "",
    },
    contact: undefined,
    winningProbability: {
      percentage: 93,
      source: "",
    },
    policyInterests: {
      climate: {
        source:
          "Has been involved in Fair Trade campaigning for a … about trade justice and climate justice - Source",
        positive: true,
      },
      migration: {
        source: "",
        positive: undefined,
      },
      LGBTQ: {
        source:
          "Elected honourary member of LGBT+ Labour Scotland in February 2020.",
        positive: true,
      },
      workers: {
        source: "",
        positive: undefined,
      },
      NHS: {
        source: "Shared petition for 75th anniversary of NHS on Facebook ",
        positive: true,
      },
      benefits: {
        source: "",
        positive: undefined,
      },
      publicOwnership: {
        source: "",
        positive: undefined,
      },
      housing: {
        source: "",
        positive: undefined,
      },
      palestine: {
        source: "",
        positive: undefined,
      },
    },
  },
  {
    name: "Michael Shanks MP",
    constituency: "Rutherglen and Hamilton West",
    incumbentParty: "",
    incumbentMajoritySize: "n/a",
    alreadyCouncillor: "",
    biography:
      "Winner of byelection 10.23 - CURRENT MP. Shanks is…ction to Westminster and the Scottish parliament.",
    socialMedia: {
      twitter: "https://twitter.com/mgshanks?lang=en",
      facebook:
        "There is this Michael Shanks who also lives in Gla…/www.facebook.com/michael.shanks.129?locale=en_GB",
      linkedin: "",
      instagram: "",
    },
    currentProfession:
      "Teacher. This website says he was Head of Policy a…ly 35 - seems to have had a large number of jobs)",
    organisationalLinks: {
      membershipOrg: "",
      charitiesBoard:
        "Board member of Epilepsy Scotland\nBoard member of …d active member of St Mary's Episcopal Cathedral)",
      directorOfCompanies: "",
    },
    contact: undefined,

    winningProbability: {
      percentage: 94,
      source: "",
    },
    policyInterests: {
      climate: {
        source: "",
        positive: undefined,
      },
      migration: {
        source:
          'Resigned from the labour party over its Brexit sta… for now / "dismissing the impact on EU families"',

        positive: undefined,
      },
      LGBTQ: {
        source: "Support for 'demedicalisation' (self-ID) for trans people",
        positive: true,
      },
      workers: {
        source: "",
        positive: undefined,
      },
      NHS: {
        source: "",
        positive: undefined,
      },
      benefits: {
        source:
          "Said that he would scrap the two-child benefit cap ('a heinous policy') and bedroom tax ",
        positive: true,
      },
      publicOwnership: {
        source: "",
        positive: undefined,
      },
      housing: {
        source: "",
        positive: undefined,
      },
      palestine: {
        source: "",
        positive: undefined,
      },
    },
  },
  {
    name: "John Grady",
    constituency: "Glasgow East",
    incumbentParty: "SNP",
    incumbentMajoritySize: 6,
    alreadyCouncillor: "",
    biography:
      "John Grady was chosen as the next candidate for Gl… partner at the law firm Shepherd and Wedderburn.",
    socialMedia: {
      twitter:
        "https://twitter.com/johnadgrady?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      facebook: "Personal twitter\nLabour twitter",
      linkedin:
        "https://www.linkedin.com/in/john-grady-a1757031/?originalSubdomain=uk",
      instagram: "",
    },
    currentProfession:
      "Partner at Shepherd and Wedderburn. Worked there f…al law, especially competition and price controls",
    organisationalLinks: {
      membershipOrg: "",
      charitiesBoard: "",
      directorOfCompanies: "",
    },
    contact: undefined,

    winningProbability: {
      percentage: 95,
      source: "",
    },
    policyInterests: {
      climate: {
        source:
          "In his role as lawyer, he was positive about progr…d for local prosperity to flow from new projects)",
        positive: true,
      },
      migration: {
        source: "",
        positive: undefined,
      },
      LGBTQ: {
        source: "",
        positive: undefined,
      },
      workers: {
        source: "Some (mildly) positive union words",
        positive: true,
      },
      NHS: {
        source:
          "Lots of tweets about the decline in quality of local services, especially in the NHS (e.g. here)",
        positive: true,
      },
      benefits: {
        source: "",
        positive: undefined,
      },
      publicOwnership: {
        source:
          "His interview about energy transition doesn't incl…e need to ensure that investors see a good return",
        positive: undefined,
      },
      housing: {
        source: "",
        positive: undefined,
      },
      palestine: {
        source: "",
        positive: undefined,
      },
    },
  },
  {
    name: "Gordon McKee",
    constituency: "Glasgow South",
    incumbentParty: "SNP",
    incumbentMajoritySize: 9,
    alreadyCouncillor: "",
    biography:
      "Gordon McKee was picked as the next candidate for … adviser to Shadow Scotland Secretary Ian Murray.",
    socialMedia: {
      twitter: "https://twitter.com/gordonmckee_",
      facebook: "https://www.facebook.com/gordon.mckee.73",
      linkedin: "",
      instagram: "https://www.instagram.com/gordon.mckee/ (private account)",
    },
    currentProfession:
      "McKee is a political adviser to Shadow Scotland Secretary Ian Murray.",
    organisationalLinks: {
      membershipOrg: "",
      charitiesBoard: "",
      directorOfCompanies: "None",
    },
    contact: undefined,
    winningProbability: {
      percentage: 96,
      source: "",
    },
    policyInterests: {
      climate: {
        source:
          "Visit to EMEC (Eureopean Marine Energy Centre) 'A …itter.com/GordonMcKee_/status/1521399496558657536",
        positive: true,
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
      publicOwnership: {
        source: "",
        positive: undefined,
      },
      housing: {
        source: "",
        positive: undefined,
      },
      palestine: {
        source: "",
        positive: undefined,
      },
    },
  },
];

describe("formatResponse", () => {
  it("parses raw data to acceptable response", () => {
    const formatted = formatResponse(values);
    expect(formatted).toStrictEqual(expectedValues);
  });
});

const blankFilters = (): Filters => ({
  searchInput: "",
  policies: {
    climate: {
      source: undefined,
      positive: undefined,
    },
    migration: {
      source: undefined,
      positive: undefined,
    },
    LGBTQ: {
      source: undefined,
      positive: undefined,
    },
    workers: {
      source: undefined,
      positive: undefined,
    },
    NHS: {
      source: undefined,
      positive: undefined,
    },
    benefits: {
      source: undefined,
      positive: undefined,
    },
    publicOwnership: {
      source: undefined,
      positive: undefined,
    },
  },
  sortDescending: true,
});

describe("filterProfiles", () => {
  it("filters profiles that match any NHS mentions", () => {
    const NHSFilter: Filters = blankFilters();
    NHSFilter.policies["NHS"].positive = true;
    const filtered = filterProfiles(expectedValues as MP[], NHSFilter);
    expect(filtered.length).toBe(4);
    expect(filtered[0].name).toBe("Frank McNally");
    expect(filtered[2].name).toBe("Martin Rhodes");
  });

  it("filters profiles that match NHS and climate mentions", () => {
    const NHSFilter: Filters = blankFilters();
    NHSFilter.policies["NHS"].positive = true;
    NHSFilter.policies["climate"].positive = true;

    const filtered = filterProfiles(expectedValues as MP[], NHSFilter);
    expect(filtered.length).toBe(2);
    expect(filtered[0].name).toBe("Martin Rhodes");
    expect(filtered[1].name).toBe("John Grady");
  });

  it("filters no profiles when no profile matches", () => {
    const NHSFilter: Filters = blankFilters();
    NHSFilter.policies["NHS"].positive = true;
    NHSFilter.policies["climate"].positive = true;
    NHSFilter.policies["publicOwnership"].positive = true;
    NHSFilter.policies["benefits"].positive = true;

    const filtered = filterProfiles(expectedValues as MP[], NHSFilter);
    expect(filtered.length).toBe(0);
  });

  it("returns all profiles if the filters are all undefined (not active)", () => {
    const NHSFilter: Filters = blankFilters();
    const filtered = filterProfiles(expectedValues as MP[], NHSFilter);
    expect(filtered.length).toBe(6);
    expect(filtered[0].name).toBe("Frank McNally");
  });
});

describe("sortByWin", () => {
  it("sorts by descent", () => {
    const sorted = sortByWin(expectedValues as MP[], true);
    expect(sorted.map((x) => x.name)).toStrictEqual([
      "Gordon McKee",
      "John Grady",
      "Michael Shanks MP",
      "Martin Rhodes",
      "Roisin McKenna Favier",
      "Frank McNally",
    ]);
  });
});
