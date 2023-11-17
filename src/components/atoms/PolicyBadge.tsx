import React from "react";
import { PolicyInterests } from "../../data/types";

export const PolicyBadge: React.FC<{
  positive?: boolean;
  policyName: keyof PolicyInterests;
}> = ({ positive, policyName }) => {
  const getBGColour = (positive?: boolean) =>
    positive === undefined
      ? "bg-slate-800 dark:bg-slate-100"
      : positive
      ? "bg-green-700 dark:bg-green-300"
      : "bg-red-700 dark:bg-red-300";
  return (
    <span
      className={`w-min ${getBGColour(
        positive
      )} text-white dark:text-black text-xs rounded-full px-2 py-1`}
    >
      {policyName}
    </span>
  );
};
