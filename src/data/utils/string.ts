const urlRegex = /(https?:\/\/[^ ]*)/;
const bracketRegex = /[\<|\>]/;

/**
 * Given a content string including a hyperlink in <> parentheses, separates into content and link
 */
export const extractLinks = (
  raw: string
): { content: string[]; link?: string[] } => {
  const possibleLinks = raw.match(urlRegex);
  let link: string[] = [];
  if (possibleLinks) {
    link = possibleLinks.map((l) => l.replace(">", ""));
  }

  const content = raw
    .split(bracketRegex)
    .filter((string) => !string.match(urlRegex) && string !== "")
    .map((string) => string.trim());

  return { content, link };
};
