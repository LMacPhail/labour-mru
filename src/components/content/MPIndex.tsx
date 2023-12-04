import React, { useEffect, useState } from "react";
import { SearchInput } from "../SearchInput";
import { Accordion } from "./Accordion";
import { filterProfiles } from "../../data/utils/utils";
import { useSelector } from "react-redux";
import { AppState } from "../../state/store";
import { MP } from "../../data/types";
import { Spinner } from "../atoms/Spinner";
import { Filters } from "../filters/Filters";

const MPIndex: React.FC = () => {
  const filters = useSelector((state: AppState) => state.activeFilters);
  const data = useSelector((state: AppState) => state.data);
  const { profiles, status } = data;
  const [mps, setMPs] = useState<MP[]>(filterProfiles(profiles, filters));

  useEffect(() => {
    setMPs(filterProfiles(profiles, filters));
  }, [filters, profiles]);

  return (
    <>
      {status === "loading" ? (
        <div className="h-screen w-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col">
          <Filters />
          <Accordion mps={mps} />
        </div>
      )}
    </>
  );
};

export default MPIndex;
