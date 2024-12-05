import React from "react";
import { extractLinks } from "../../data/utils/string";
import TextLink from "../atoms/Link";

export const FormattedContent: React.FC<{
  subHeader: string;
  rawContent: string | undefined;
}> = ({ subHeader, rawContent }) => {
  if (rawContent === undefined) return <></>;

  const contentArray = rawContent.split("|");
  if (contentArray.length === 1 && contentArray[0] === "") return <></>;

  const formattedContent = contentArray.map((content) => extractLinks(content));

  return (
    <div className="mb-2">
      <p className="mb-1 capitalize">
        <strong>{subHeader}</strong>
      </p>{" "}
      {formattedContent.length > 1 ? (
        <ul>
          {formattedContent.map((formattedPoint, i) => (
            <li key={i}>
              {formattedPoint.content}{" "}
              {formattedPoint.link?.[0] && (
                <TextLink link={formattedPoint.link[0]}>(source)</TextLink>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <>
          {formattedContent[0].content}{" "}
          {formattedContent[0].link && formattedContent[0].link.length > 0 && (
            <TextLink link={formattedContent[0]?.link[0]}>(source)</TextLink>
          )}
        </>
      )}
    </div>
  );
};
