import React, { useEffect, useState } from "react";
import { SearchInput } from "../SearchInput";
import { Accordion } from "./Accordion";
import { filterProfiles, formatResponse } from "../../data/utils";
import { useSelector } from "react-redux";
import { AppState } from "../../state/store";
import { MP } from "../../data/types";

const MPIndex: React.FC = () => {
  const filters = useSelector((state: AppState) => state.activeFilters);
  const mpData = useSelector((state: AppState) => state.data.profiles);
  const [mps, setMPs] = useState<MP[]>(filterProfiles(mpData, filters));

  useEffect(() => {
    setMPs(filterProfiles(mpData, filters));
  }, [filters, mpData]);

  return (
    <div className="flex flex-col">
      <SearchInput />
      <Accordion mps={mps} />
    </div>
  );
};

export default MPIndex;
