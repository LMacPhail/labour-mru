import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SET_SORTBY_ACTION } from "../../state/actions";
import TextLink from "../atoms/Link";

type SelectedSortDirection = "ascending" | "descending";
const DESCENDING_OPT_TEXT = "Most Likely";
const ASCENDING_OPT_TEXT = "Least Likely";

// TODO: Not make this break everything
export const SortByDropdown: React.FC = () => {
  const dispatch = useDispatch();

  const [sortDirection, setSortDirection] = useState<
    SelectedSortDirection | undefined
  >("descending");

  const handleSelectChange = (value: SelectedSortDirection) => {
    dispatch({
      type: SET_SORTBY_ACTION,
      payload: { descending: value === "descending" },
    });
    setSortDirection(value);
  };

  return (
    <div>
      <span className="text-xs">
        Sort by likeliness to win:{" "}
        <TextLink link="https://www.electoralcalculus.co.uk/">
          (source)
        </TextLink>
      </span>
      <select
        className="select select-ghost-primary select-sm"
        value={
          sortDirection === "descending"
            ? DESCENDING_OPT_TEXT
            : ASCENDING_OPT_TEXT
        }
        onChange={(event) =>
          handleSelectChange(
            event.target.value === DESCENDING_OPT_TEXT
              ? "descending"
              : "ascending"
          )
        }
        aria-label="sort profiles"
      >
        <option key={"descending"}>{DESCENDING_OPT_TEXT}</option>
        <option key={"ascending"}>{ASCENDING_OPT_TEXT}</option>
      </select>
    </div>
  );
};
