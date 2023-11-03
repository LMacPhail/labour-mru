import React, { useCallback } from "react";
import "./App.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import Main from "./components/Main";
import { SidebarContent } from "./components/sidebar/SidebarContent";
import { Header } from "./components/Header";

function App() {
  const [view, setView] = React.useState<"about" | "index">("about");

  const setPageView = useCallback(
    (view: "about" | "index") => {
      setView(view);
    },
    [view]
  );
  return (
    <div className="">
      <Header setView={setPageView} view={view} />
      <Sidebar>
        <SidebarContent />
      </Sidebar>
      <Main view={view} />
    </div>
  );
}

export default App;
