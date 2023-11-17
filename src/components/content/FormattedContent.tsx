import React from "react";
import { extractLinks } from "../../data/utils/string";

export const FormattedContent: React.FC<{
  subHeader: string;
  rawContent: string;
}> = ({ subHeader, rawContent }) => {
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
                <a className="text-blue-500" href={formattedPoint.link[0]}>
                  (source)
                </a>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <>
          {formattedContent[0].content}{" "}
          {formattedContent[0].link && formattedContent[0].link.length > 0 && (
            <a className="text-blue-500" href={formattedContent[0]?.link[0]}>
              (source)
            </a>
          )}
        </>
      )}
    </div>
  );
};
