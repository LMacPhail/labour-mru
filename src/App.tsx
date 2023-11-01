import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { FilterSidebar } from "./components/FilterSidebar";
import Main from "./components/Main";

function App() {
  return (
    <div className="">
      <Header />
      <FilterSidebar />
      <Main />
    </div>
  );
}

export default App;
