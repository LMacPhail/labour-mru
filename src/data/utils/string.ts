const urlRegex = /(https?:\/\/[^ ]*)/g;
const bracketRegex = /[<>]/g;

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
