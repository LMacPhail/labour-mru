import React, { useMemo, useState } from "react";
import { Accordion } from "../components/content/Accordion";
import { filterProfiles, sortByWin } from "../data/utils/utils";
import { useSelector } from "react-redux";
import { AppState } from "../state/store";
import { MP } from "../data/types";
import { Spinner } from "../components/atoms/Spinner";

const MPIndex: React.FC = () => {
  const filters = useSelector((state: AppState) => state.activeFilters);
  const data = useSelector((state: AppState) => state.data);
  const { profiles, status } = data;
  const [mps, setMPs] = useState<MP[]>(filterProfiles(profiles, filters));

  useMemo(() => {
    if (filters.sortDescending !== undefined) {
      setMPs(
        sortByWin(
          filterProfiles(profiles, filters).slice(),
          filters.sortDescending
        )
      );
    } else {
      setMPs(filterProfiles(profiles, filters));
    }
  }, [filters, profiles]);

  return (
    <>
      {status === "loading" ? (
        <div className="h-screen w-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <Accordion mps={mps} />
        </div>
      )}
    </>
  );
};

export default MPIndex;
