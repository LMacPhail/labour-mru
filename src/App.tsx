import React, { useCallback } from "react";
import "./App.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import Main from "./components/Main";
import { SidebarContent } from "./components/sidebar/SidebarContent";
import { Header } from "./components/Header";
import { AppState } from "./state/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchMPs } from "./data/utils";
import { DataStatus, MP } from "./data/types";
import { SET_DATA_ACTION } from "./state/actions";

function App() {
  const view = useSelector((state: AppState) => state.view);
  const dispatch = useDispatch();
  const updateData = useCallback((mpData: MP[], status: DataStatus) => {
    dispatch({
      type: SET_DATA_ACTION,
      payload: { profiles: mpData, status },
    });
  }, []);
  fetchMPs(updateData);

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
