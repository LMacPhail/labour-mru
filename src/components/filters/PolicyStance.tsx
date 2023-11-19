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
  "NHS",
  "benefits",
  "strikes",
  "publicOwnership",
  "housing",
  "palestine",
];

export const PolicyStance: React.FC = () => {
  return (
    <div className="my-4">
      <h3 className="w-full my-4 text-center font-bold text-lg">
        Stance on policy
      </h3>
      {categories.map((category) => (
        <FilterCheckbox category={category} key={category} />
      ))}
    </div>
  );
};

const FilterCheckbox: React.FC<{
  category: PolicyType;
}> = ({ category }) => {
  const policy = useSelector(
    (state: AppState) => state.activeFilters.policies[category]
  );
  const [checked, setChecked] = useState<boolean>(policy.positive ?? false);

  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch({
      type: SET_POLICY_STANCE_ACTION,
      payload: { category, positive: !checked ? true : undefined },
    });

    setChecked(!checked);
  };

  return (
    <div
      className={`flex flex-row justify-between m-3 ${category}`}
      key={category}
    >
      <p className="flex align-middle text-center capitalize">
        {category === "publicOwnership" ? "public ownership" : category}
      </p>
      <input
        type="checkbox"
        className="checkbox"
        checked={checked}
        onClick={() => handleCheck()}
        onChange={(_e) => handleCheck()}
      />
    </div>
  );
};
