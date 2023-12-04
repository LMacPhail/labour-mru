import React, { useState } from "react";
import { SearchInput } from "../SearchInput";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../state/store";
import { SET_SORTBY_ACTION } from "../../state/actions";

export const Filters: React.FC = () => {
  return (
    <div className="flex flex-row gap-4">
      <SearchInput />
      <SortByDropdown />
    </div>
  );
};

type SelectedSortDirection = "ascending" | "descending";

const SortByDropdown: React.FC = () => {
  const dispatch = useDispatch();

  const sortBy = useSelector(
    (state: AppState) => state.activeFilters.sortByDescending
  );

  const [sortDirection, setSortDirection] = useState<SelectedSortDirection>(
    sortBy ? "descending" : "ascending"
  );

  const handleSelectChange = (value: SelectedSortDirection) => {
    dispatch({
      type: SET_SORTBY_ACTION,
      payload: { descending: value === "descending" },
    });
    setSortDirection(value);
  };

  return (
    <>
      <select
        className="select select-ghost-primary"
        value={sortDirection}
        onChange={(event) =>
          handleSelectChange(event.target.value as SelectedSortDirection)
        }
        aria-label="sort profiles"
      >
        <option>Most Likely to Win</option>
        <option>Least Likely to Win</option>
      </select>
    </>
  );
};
