import React, { useState } from "react";
import { SearchInput } from "../SearchInput";
import { useDispatch } from "react-redux";
import { SET_SORTBY_ACTION } from "../../state/actions";
export const Filters: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <SearchInput />
      <SortByDropdown />
    </div>
  );
};

type SelectedSortDirection = "ascending" | "descending";

// TODO: Not make this break everything
const SortByDropdown: React.FC = () => {
  const dispatch = useDispatch();

  const [sortDirection, setSortDirection] = useState<
    SelectedSortDirection | undefined
  >(undefined);

  const handleSelectChange = (value: SelectedSortDirection) => {
    dispatch({
      type: SET_SORTBY_ACTION,
      payload: { descending: value === "descending" },
    });
    setSortDirection(value);
  };

  return (
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
  );
};
