import React from "react";
import { PolicyInterests } from "../../data/types";

export const PolicyBadge: React.FC<{
  positive?: boolean | null;
  policyName: keyof PolicyInterests;
}> = ({ positive, policyName }) => {
  const getBGColour = (positive?: boolean | null) =>
    positive === null || positive === undefined
      ? "bg-slate-800"
      : positive
      ? "bg-green-700"
      : "bg-red-700";
  return (
    <span
      className={`w-min ${getBGColour(
        positive
      )} text-white text-xs rounded-full px-2 py-1 whitespace-nowrap`}
    >
      {policyName === "publicOwnership" ? "public ownership" : policyName}
    </span>
  );
};
