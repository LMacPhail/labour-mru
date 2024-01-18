import React from "react";
import About from "./content/About";
import MPIndex from "./content/MPIndex";

const Main: React.FC<{ view: "about" | "index" }> = ({ view }) => {
  return (
    <div className="w-full pt-4 px-4 sm:px-6 md:px-8">
      {view === "about" && <About />}
      {view === "index" && <MPIndex />}
    </div>
  );
};

export default Main;
