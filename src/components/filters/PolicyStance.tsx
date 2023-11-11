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
  const policy = useSelector(
    (state: AppState) => state.activeFilters.policies[category]
  );
  const [negativeChecked, setNegativeChecked] = useState<boolean>(
    policy.positive ? !policy.positive : false
  );
  const [positiveChecked, setPositiveChecked] = useState<boolean>(
    policy?.positive ?? false
  );

  const dispatch = useDispatch();
  const handleCheck = (stance: "positive" | "negative") => {
    let positiveUpdate = undefined;
    if (stance === "positive") {
      const positive = !positiveChecked;
      setPositiveChecked(positive);
      if (negativeChecked) {
        setNegativeChecked(false);
      }
      positiveUpdate = positive ? positive : undefined;
    }

    if (stance === "negative") {
      const negative = !negativeChecked;
      setNegativeChecked(negative);
      if (positiveChecked) {
        setPositiveChecked(false);
      }
      // Bit confusing here: basically, if 'negative' is 'true', we want to set 'positive' to 'false'. Ahhh, naming.
      positiveUpdate = !negativeChecked ? false : undefined;
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
        checked={negativeChecked}
        onClick={() => handleCheck("negative")}
      />
      <p className="flex align-middle text-center capitalize">
        {category === "publicOwnership" ? "public ownership" : category}
      </p>
      <input
        type="checkbox"
        className="checkbox checkbox-bordered-success"
        checked={positiveChecked}
        onClick={() => handleCheck("positive")}
      />
    </div>
  );
};
