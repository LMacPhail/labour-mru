import React from "react";
import { SearchInput } from "../SearchInput";

export const Filters: React.FC = () => {
  return (
    <div className="">
      <SearchInput />
    </div>
  );
};

// type SelectedSortDirection = "ascending" | "descending";

// TODO: Not make this break everything
// const SortByDropdown: React.FC = () => {
//   const dispatch = useDispatch();
//   const profiles = useSelector((state: AppState) => state.data.profiles);

//   const [sortDirection, setSortDirection] = useState<
//     SelectedSortDirection | undefined
//   >(undefined);

//   const handleSelectChange = (value: SelectedSortDirection) => {
//     const sortedProfiles = sortByWin(profiles, value === "descending");
//     dispatch({
//       type: SET_DATA_ACTION,
//       payload: { profiles: sortedProfiles, status: "complete" },
//     });
//     setSortDirection(value);
//   };

//   return (
//     <select
//       className="select select-ghost-primary"
//       value={sortDirection}
//       onChange={(event) =>
//         handleSelectChange(event.target.value as SelectedSortDirection)
//       }
//       aria-label="sort profiles"
//     >
//       {sortDirection === undefined && (
//         <option>Sort by chance of winning</option>
//       )}
//       <option>Most Likely to Win</option>
//       <option>Least Likely to Win</option>
//     </select>
//   );
// };
