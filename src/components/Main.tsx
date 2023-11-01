import React from "react";
import { Accordion } from "./Accordion";
import { formatResponse } from "../data/utils";
import { values } from "../data/test/rawResponse";

const Main: React.FC = () => {
  const mps = formatResponse(values);
  return (
    <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
      <Accordion mps={mps} />
    </div>
  );
};

export default Main;
