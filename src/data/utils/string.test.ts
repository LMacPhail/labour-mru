import { extractLinks } from "./string";

describe("extractLinks", () => {
  const basic = "Something something https://something.com";
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
