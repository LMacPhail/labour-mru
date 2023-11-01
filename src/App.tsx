import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import Main from "./components/Main";
import { Filters } from "./components/filters/Filters";

function App() {
  return (
    <div className="">
      <Header />
      <Sidebar>
        <Filters />
      </Sidebar>
      <Main />
    </div>
  );
}

export default App;
