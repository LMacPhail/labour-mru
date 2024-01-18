import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SET_SORTBY_ACTION } from "../../state/actions";
import { Question } from "@phosphor-icons/react";

type SelectedSortDirection = "highest" | "lowest";

export const SortByDropdown: React.FC = () => {
  const dispatch = useDispatch();

  const [sortDirection, setSortDirection] = useState<
    SelectedSortDirection | undefined
  >("highest");

  const handleSelectChange = (value: SelectedSortDirection) => {
    dispatch({
      type: SET_SORTBY_ACTION,
      payload: { descending: value === "highest" },
    });
    setSortDirection(value);
  };

  return (
    <div>
      <span className="text-xs">
        Sort by chance of winning:{" "}
        <span
          className="tooltip-click tooltip-right z-40"
          data-tooltip="See FAQ"
        >
          <button aria-label="See FAQ">
            <Question size={12} />
          </button>
        </span>
      </span>
      <select
        className="select select-bordered w-full select-sm capitalize"
        value={sortDirection}
        onChange={(event) =>
          handleSelectChange(
            event.target.value.toLowerCase() as SelectedSortDirection
          )
        }
        aria-label="sort profiles"
      >
        <option key={"highest"}>highest</option>
        <option key={"lowest"}>lowest</option>
      </select>
    </div>
  );
};
