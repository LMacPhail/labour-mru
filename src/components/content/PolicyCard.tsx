import React from "react";
import { PolicyInterests } from "../../data/types";
import { FormattedContent } from "./FormattedContent";

export const PolicyCard: React.FC<{
  positive?: boolean;
  policyName: keyof PolicyInterests;
  content: string;
}> = ({ positive, policyName, content }) => {
  const getBorderColour = (positive?: boolean) =>
    positive === undefined
      ? "border-slate-800"
      : positive
      ? "border-green-600"
      : "border-red-600";
  return (
    <div className={`border ${getBorderColour(positive)} rounded-lg p-2`}>
      <FormattedContent
        subHeader={
          policyName === "publicOwnership" ? "Public Ownership" : policyName
        }
        rawContent={content}
      />
    </div>
  );
};
