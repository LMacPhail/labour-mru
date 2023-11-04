import React, { useCallback } from "react";
import "./App.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import Main from "./components/Main";
import { SidebarContent } from "./components/sidebar/SidebarContent";
import { Header } from "./components/Header";
import { AppState } from "./state/store";
import { useSelector } from "react-redux";

function App() {
  const view = useSelector((state: AppState) => state.view);

  return (
    <div className="">
      <Header view={view} />
      <Sidebar>
        <SidebarContent />
      </Sidebar>
      <Main view={view} />
    </div>
  );
}

export default App;
