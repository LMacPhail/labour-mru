import { extractContacts, extractLinks } from "./string";

describe("extractLinks", () => {
  const basic = "Something something https://something.com";
  it("splits a simple content <link> format", () => {
    const formatted = extractLinks(basic);
    expect(formatted.link?.[0]).toEqual("https://something.com");
    expect(formatted.content).toEqual(["Something something"]);
  });

  const pointyBrackets = "Something something <https://something.com>";
  it("splits a simple content <link> format", () => {
    const formatted = extractLinks(basic);
    expect(formatted.link?.[0]).toEqual("https://something.com");
    expect(formatted.content).toEqual(["Something something"]);
  });

  const sandwich = "Something something https://something.com | Bleep bloop";
  it("splits a simple content <link> format", () => {
    const formatted = extractLinks(sandwich);
    expect(formatted.link?.[0]).toEqual("https://something.com");
    expect(formatted.content[1]).toEqual("Bleep bloop");
  });
});

describe("extractContacts", () => {
  it("extracts just an email", () => {
    const contact = extractContacts("wilma.brown@nhs.net");
    expect(contact?.email).toBe("wilma.brown@nhs.net");
    expect(contact?.phone).toBe(undefined);
  });

  it("extracts email and a phone from the same string", () => {
    const contact = extractContacts(
      "contact@alex4northfield.com / 0121 303 2039"
    );
    expect(contact?.email).toBe("contact@alex4northfield.com");
    expect(contact?.phone).toBe("0121 303 2039");
  });
});
