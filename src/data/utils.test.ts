import { values } from "./test/rawResponse";
import { formatResponse } from "./utils";

const expectedValues = [
  {
    name: "Pamela Nash",
    constituency: "Motherwell and Wishaw",
    incumbentParty: "",
    incumbentMajoritySize: NaN,
    alreadyCouncillor: "",
    biography:
      "Pamela Nash has been picked as the candidate for Motherwell and Wishaw. She formerly represented Airdrie and Shotts in parliament from 2010 to 2015. She currently serves as chief executive of Scotland in Union, a pro-UK campaign group.",
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
      climate: { links: [Array], positive: false },
      migration: { links: [Array], positive: false },
      LGBTQ: { links: [Array], positive: false },
      workers: { links: [Array], positive: false },
      nhs: { links: [Array], positive: false },
      benefits: { links: [Array], positive: false },
      strikes: { links: [Array], positive: false },
      publicOwnership: { links: [], positive: false },
    },
    notes: "",
  },
];

describe("formatResponse", () => {
  it("parses raw data to acceptable response", () => {
    const formatted = formatResponse(values);
    console.log(formatted[1]);
    expect(formatted.length).toBe(9);
  });
});
