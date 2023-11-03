import React from "react";
import { SearchInput } from "../SearchInput";
import { Accordion } from "./Accordion";
import { formatResponse } from "../../data/utils";
import { values } from "../../data/test/rawResponse";

const MPIndex: React.FC = () => {
  const mps = formatResponse(values);
  return (
    <div className="flex flex-col">
      <SearchInput />
      <Accordion mps={mps} />
    </div>
  );
};

export default MPIndex;
