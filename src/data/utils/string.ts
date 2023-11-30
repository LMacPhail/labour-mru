import { Contact } from "../types";

const urlRegex = /(https?:\/\/[^ ]*)/g;
const bracketRegex = /[<>]/g;

const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
const phoneRegex = /^(?:\s*\d){11}$/;

/**
 * Given a content string including a hyperlink in <> parentheses, separates into content and link
 */
export const extractLinks = (
  raw: string
): { content: string[]; link?: string[] } => {
  const possibleLinks = raw.match(urlRegex);
  let link: string[] = [];
  if (possibleLinks) {
    link = possibleLinks
      .map((l) => l.replace("|", ""))
      .map((l) => l.replace(bracketRegex, ""));
  }

  const content = raw
    .replace(bracketRegex, " ")
    .replace(urlRegex, "")
    .split("|")
    .filter((string) => string !== "")
    .map((string) => string.trim());

  return { content, link };
};

const getMatchFromMatches = (
  matches: RegExpMatchArray | null
): string | undefined =>
  matches && matches.length > 0 ? matches[0] : undefined;

export const extractContacts = (raw: string): Contact | undefined => {
  console.log(raw.match(emailRegex));
  const email = getMatchFromMatches(raw.match(emailRegex));
  const phone = getMatchFromMatches(raw.match(phoneRegex));

  if (email || phone) {
    return {
      email,
      phone,
    };
  }
  return;
};
