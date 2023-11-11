import { values } from "./test/rawResponse";
import { Filters, MP } from "./types";
import { filterProfiles, formatResponse } from "./utils";

const expectedValues = [
  {
    name: "Maureen Burke",
    constituency: "Glasgow North East",
    incumbentParty: "SNP",
    incumbentMajoritySize: 4,
    alreadyCouncillor: "Yes. Councillor for Glasgow North East",
    biography:
      "Maureen Burke was picked to contest Glasgow North East at the next election. She is a councillor on Glasgow City Council, representing North East ward.",
    socialMedia: {
      twitter: "https://twitter.com/CllrBurke",
      facebook: "https://www.facebook.com/profile.php?id=100047615836936",
      linkedin: "",
      instagram: "",
    },
    currentProfession: "Councillor Glasgow City Council, North East Ward",
    organisationalLinks: {
      membershipOrg: "",
      charitiesBoard: "",
      directorOfCompanies:
        "Director - Glasgow East Women's Aid (resigned)\nDirector - Glasgow East Arts Company (resigned)\nDirector - Culture and Sport Glasgow CIC (resigned)\nDirector - Culture and Sport Glasgow (resigned)\nDirector - Glasgow East Arts Company Ltd (resigned)\nDirector - Jobs and Business Glasgow (resigned)\nDirector - Clude Gateway URC (resigned)\nDirector - Scottish Events Campus (resigned)",
    },
    policyInterests: {
      climate: { links: [""], positive: true },
      migration: { links: [""], positive: false },
      LGBTQ: { links: [""], positive: true },
      workers: { links: [""], positive: false },
      nhs: { links: [""], positive: false },
      benefits: { links: [""], positive: false },
      strikes: { links: [""], positive: true },
      publicOwnership: { links: [""], positive: undefined },
    },
    notes: "maureen.burke@glasgow.gov.uk",
  },
  {
    name: "Zubir Ahmed",
    constituency: "Glasgow South West",
    incumbentParty: "",
    incumbentMajoritySize: "n/a",
    alreadyCouncillor: "",
    biography:
      "Zubir Ahmed has been selected as the candidate for Glasgow South West at the next election. Ahmed is a surgeon who previously stood for election as the MSP for Glasgow Pollok in 2021, coming in second behind the SNP candidate.",
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
      climate: { links: [], positive: undefined },
      migration: { links: [], positive: undefined },
      LGBTQ: { links: [], positive: undefined },
      workers: { links: [], positive: undefined },
      nhs: { links: [], positive: undefined },
      benefits: { links: [], positive: undefined },
      strikes: { links: [], positive: undefined },
      publicOwnership: { links: [], positive: undefined },
    },
  },
  {
    name: "Frank McNally",
    constituency:
      "Coatbridge and Bellshill (formerly Coatbridge, Chryston and Bellshill)",
    incumbentParty: "SNP",
    incumbentMajoritySize: 5,
    alreadyCouncillor:
      "Yes. Councillor for Mossend and Holytown (North Lanarkshire)",
    biography:
      "Frank McNally has been selected as Scottish Labour’s candidate for Coatbridge, Chryston and Bellshill. He has served as a councillor on North Lanarkshire council since 2012, representing Mossend and Holytown ward.",
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
    policyInterests: {
      climate: { links: [""], positive: undefined },
      migration: { links: [""], positive: undefined },
      LGBTQ: { links: [""], positive: undefined },
      workers: { links: [""], positive: undefined },
      nhs: {
        links: ["Made a passing reference to NHS cuts in this campaign video"],
        positive: undefined,
      },
      benefits: { links: [""], positive: undefined },

      strikes: {
        links: [
          "Weighed in against a strike by teachers in a school with blue water coming out of the taps",
        ],
        positive: undefined,
      },
      publicOwnership: { links: [""], positive: undefined },
    },
    notes: "",
  },
  {
    name: "Roisin McKenna Favier",
    constituency: "Glasgow Central [to be abolished]",
    incumbentParty: "",
    incumbentMajoritySize: "n/a",
    alreadyCouncillor: "",
    biography:
      "Roisin McKenna was selected as the next candidate for Glasgow Central. McKenna is a final-year medical student at University of Glasgow.",
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
        "Member of a number of student societies including the University of Glasgow chapter of the Association of Women Surgeons according to Twitter bio. ",
      charitiesBoard: "",
      directorOfCompanies: "",
    },
    policyInterests: {
      climate: { links: [""], positive: undefined },
      migration: { links: [""], positive: undefined },
      LGBTQ: { links: [""], positive: undefined },
      workers: { links: [""], positive: undefined },
      nhs: {
        links: ["Ran the Great North Run for MS Society"],
        positive: undefined,
      },
      benefits: { links: [""], positive: undefined },
      strikes: { links: [""], positive: undefined },
      publicOwnership: { links: [""], positive: undefined },
    },
    notes: "",
  },
  {
    name: "Martin Rhodes",
    constituency: "Glasgow North",
    incumbentParty: "SNP",
    incumbentMajoritySize: 6,
    alreadyCouncillor: "",
    biography:
      "Martin Rhodes has been picked as the candidate for Glasgow North. Rhodes formerly served on Glasgow City Council, representing Partick East/Kelvindale ward.",
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
    policyInterests: {
      climate: {
        links: [
          "Has been involved in Fair Trade campaigning for a long time, spoken out about trade justice and climate justice",
        ],
        positive: true,
      },
      migration: { links: [""], positive: undefined },
      LGBTQ: {
        links: [
          "Elected honourary member of LGBT+ Labour Scotland in February 2020.",
        ],
        positive: undefined,
      },
      workers: { links: [""], positive: undefined },
      nhs: {
        links: ["Shared petition for 75th anniversary of NHS on Facebook "],
        positive: true,
      },
      benefits: { links: [""], positive: undefined },
      strikes: { links: [""], positive: undefined },
      publicOwnership: { links: [""], positive: undefined },
    },
    notes: "",
  },
  {
    name: "Michael Shanks MP",
    constituency: "Rutherglen and Hamilton West",
    incumbentParty: "",
    incumbentMajoritySize: "n/a",
    alreadyCouncillor: "",
    biography:
      "Winner of byelection 10.23 - CURRENT MP. Shanks is a local teacher, who has previously stood for election to Westminster and the Scottish parliament.",
    socialMedia: {
      twitter: "https://twitter.com/mgshanks?lang=en",
      facebook:
        "There is this Michael Shanks who also lives in Glasgow but it's not clear whether it's the same person - likely not. https://www.facebook.com/michael.shanks.129?locale=en_GB",
      linkedin: "",
      instagram: "",
    },
    currentProfession:
      "Teacher\nThis website says he was Head of Policy and Communications for a large children's charity and was a political advisor in the Scottish and UK Parliaments, but that's quite hard to find elsewhere online (he is only 35 - seems to have had a large number of jobs)",
    organisationalLinks: {
      membershipOrg: "",
      charitiesBoard:
        "Board member of Epilepsy Scotland\nBoard member of Glasgow Disabled Scouts\nTrustee of Interfaith Glasgow (he is a Christian and active member of St Mary's Episcopal Cathedral)",
      directorOfCompanies: "",
    },
    policyInterests: {
      climate: { links: [""], positive: undefined },
      migration: {
        links: [
          'Resigned from the labour party over its Brexit stance; has come under pressure for saying that rejoining the EU isn\'t an issue for now / "dismissing the impact on EU families"',
        ],
        positive: undefined,
      },
      LGBTQ: {
        links: ["Support for 'demedicalisation' (self-ID) for trans people"],
        positive: true,
      },
      workers: { links: [""], positive: undefined },
      nhs: { links: [""], positive: undefined },
      benefits: {
        links: [
          "Said that he would scrap the two-child benefit cap ('a heinous policy') and bedroom tax ",
        ],
        positive: true,
      },
      strikes: { links: [""], positive: undefined },
      publicOwnership: { links: [""], positive: undefined },
    },
    notes: "",
  },
  {
    name: "John Grady",
    constituency: "Glasgow East",
    incumbentParty: "SNP",
    incumbentMajoritySize: 6,
    alreadyCouncillor: "",
    biography:
      "John Grady was chosen as the next candidate for Glasgow East. He is a partner at the law firm Shepherd and Wedderburn.",
    socialMedia: {
      twitter:
        "https://twitter.com/johnadgrady?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      facebook: "Personal twitter\nLabour twitter",
      linkedin:
        "https://www.linkedin.com/in/john-grady-a1757031/?originalSubdomain=uk",
      instagram: "",
    },
    currentProfession:
      "Partner at Shepherd and Wedderburn. Worked there for a long time; started in 1998; spent some time at Scottish power in between \n\nSeems to have focused on commercial law, especially competition and price controls",
    organisationalLinks: {
      membershipOrg: "",
      charitiesBoard: "",
      directorOfCompanies: "",
    },
    policyInterests: {
      climate: {
        links: [
          "In his role as lawyer, was positive about progress made so far in energy transition (e.g. here, where he also talks about carbon capture and storage as a sensible/necessary way of using old oil/gas fields; some support for community energy projects and mentions the need for local prosperity to flow from new projects)",
        ],
        positive: true,
      },
      migration: { links: [""], positive: undefined },
      LGBTQ: { links: [""], positive: undefined },
      workers: {
        links: ["Some (mildly) positive union words"],
        positive: undefined,
      },
      nhs: {
        links: [
          "Lots of tweets about the decline in quality of local services, especially in the NHS (e.g. here)",
        ],
        positive: undefined,
      },
      benefits: { links: [""], positive: undefined },
      strikes: { links: [""], positive: undefined },
      publicOwnership: {
        links: [
          "His interview about energy transition doesn't include anything on public ownership; mentions the need for significant amounts of public finance but also the need to ensure that investors see a good return",
        ],
        positive: undefined,
      },
    },
    notes: "",
  },
  {
    name: "Gordon McKee",
    constituency: "Glasgow South",
    incumbentParty: "SNP",
    incumbentMajoritySize: 9,
    alreadyCouncillor: "",
    biography:
      "Gordon McKee was picked as the next candidate for Glasgow South. McKee is a political adviser to Shadow Scotland Secretary Ian Murray.",
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
    policyInterests: {
      climate: {
        links: [
          "Has tweeted in favour of windfall tax on energy companies https://twitter.com/GordonMcKee_/status/1521399496558657536",
        ],
        positive: undefined,
      },
      migration: { links: [""], positive: undefined },
      LGBTQ: { links: [""], positive: undefined },
      workers: { links: [""], positive: undefined },
      nhs: { links: [""], positive: undefined },
      benefits: { links: [""], positive: undefined },
      strikes: { links: [""], positive: undefined },
      publicOwnership: { links: [""], positive: undefined },
    },
    notes: "",
  },
  {
    name: "Pamela Nash",
    constituency: "Motherwell and Wishaw",
    incumbentParty: "",
    incumbentMajoritySize: "n/a",
    alreadyCouncillor: "",
    biography:
      "Pamela Nash has been picked as the candidate for Motherwell and Wishaw. She formerly represented Airdrie and Shotts in parliament from 2010 to 2015. She currently serves as chief executive of Scotland in Union, a pro-UK campaign group.",
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
      climate: { links: [], positive: undefined },
      migration: { links: [], positive: undefined },
      LGBTQ: { links: [], positive: undefined },
      workers: { links: [], positive: undefined },
      nhs: { links: [], positive: undefined },
      benefits: { links: [], positive: undefined },
      strikes: { links: [], positive: undefined },
      publicOwnership: { links: [], positive: undefined },
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
  policies: {
    climate: {
      links: undefined,
      positive: undefined,
    },
    migration: {
      links: undefined,
      positive: undefined,
    },
    LGBTQ: {
      links: undefined,
      positive: undefined,
    },
    workers: {
      links: undefined,
      positive: undefined,
    },
    nhs: {
      links: undefined,
      positive: undefined,
    },
    benefits: {
      links: undefined,
      positive: undefined,
    },
    strikes: {
      links: undefined,
      positive: undefined,
    },
    publicOwnership: {
      links: undefined,
      positive: undefined,
    },
  },
});

describe("filterProfiles", () => {
  it("filters profiles that match only nhs positive", () => {
    const nhsFilter: Filters = blankFilters();
    nhsFilter.policies["nhs"].positive = true;
    const filtered = filterProfiles(expectedValues as MP[], nhsFilter);
    expect(filtered.length).toBe(1);
    expect(filtered[0].name).toBe("Martin Rhodes");
  });

  it("filters profiles that match nhs and climate positive", () => {
    const nhsFilter: Filters = blankFilters();
    nhsFilter.policies["nhs"].positive = true;
    nhsFilter.policies["climate"].positive = true;

    const filtered = filterProfiles(expectedValues as MP[], nhsFilter);
    expect(filtered.length).toBe(3);
    expect(filtered[0].name).toBe("Maureen Burke");
  });

  it("returns all profiles if the filters are all undefined (not active)", () => {
    const nhsFilter: Filters = blankFilters();
    const filtered = filterProfiles(expectedValues as MP[], nhsFilter);
    expect(filtered.length).toBe(9);
    expect(filtered[0].name).toBe("Maureen Burke");
  });
});
