import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../state/store";
import { PolicyType } from "../../data/types";
import { SET_POLICY_STANCE_ACTION } from "../../state/actions";

const categories: PolicyType[] = [
  "climate",
  "migration",
  "LGBTQ",
  "workers",
  "nhs",
  "benefits",
  "strikes",
  "publicOwnership",
];

export const PolicyStance: React.FC = () => {
  return (
    <div className="my-4">
      <h3 className="w-full my-4 text-center font-bold text-lg">
        Stance on policy
      </h3>
      <div className="flex flex-row justify-between mx-2">
        <span>Negative</span>
        <span>Positive</span>
      </div>
      {categories.map((category) => (
        <PositiveNegativeChoice category={category} />
      ))}
    </div>
  );
};

const PositiveNegativeChoice: React.FC<{
  category: PolicyType;
}> = ({ category }) => {
  const policy = useSelector((state: AppState) =>
    state.activeFilters.policies.find((p) => p.type === category)
  );
  const [negative, setNegative] = useState<boolean>(
    policy ? !policy.positive : false
  );
  const [positive, setPositive] = useState<boolean>(policy?.positive ?? false);

  const dispatch = useDispatch();
  const handleCheck = (stance: "positive" | "negative") => {
    let positiveUpdate = undefined;
    if (stance === "positive") {
      setPositive(!positive);
      if (negative) {
        setNegative(false);
      }
      positiveUpdate = positive ? positive : undefined;
    }

    if (stance === "negative") {
      setNegative(!negative);
      if (positive) {
        setPositive(false);
      }
      // Bit confusing here: basically, if 'negative' is 'true', we want to set 'positive' to 'false'. Ahhh, naming.
      positiveUpdate = negative ? false : undefined;
    }
    dispatch({
      type: SET_POLICY_STANCE_ACTION,
      payload: { category, positive: positiveUpdate },
    });
  };

  return (
    <div className="flex flex-row justify-between m-3">
      <input
        type="checkbox"
        className="checkbox checkbox-bordered-error"
        checked={negative}
        onClick={() => handleCheck("negative")}
      />
      <p className="flex align-middle text-center">{category}</p>
      <input
        type="checkbox"
        className="checkbox checkbox-bordered-success"
        checked={positive}
        onClick={() => handleCheck("positive")}
      />
    </div>
  );
};
