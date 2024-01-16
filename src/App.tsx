import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import Main from "./components/Main";
import { SidebarContent } from "./components/sidebar/SidebarContent";
import { Header } from "./components/Header";
import { AppState } from "./state/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchMPs } from "./data/utils/utils";
import { DataStatus, MP } from "./data/types";
import { SET_DATA_ACTION } from "./state/actions";
import { useAnalytics } from "./analytics";
import { supabase } from "./supabaseClient";
import Auth from "./Auth";
import Account from "./Account";
import { Session } from "@supabase/supabase-js";

function App() {
  const view = useSelector((state: AppState) => state.view);
  const dispatch = useDispatch();
  const updateData = useCallback(
    (mpData: MP[], status: DataStatus) => {
      dispatch({
        type: SET_DATA_ACTION,
        payload: { profiles: mpData, status },
      });
    },
    [dispatch]
  );
  fetchMPs(updateData);
  useAnalytics();

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="">
      {!session ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
      {/* <Header view={view} />
      <Sidebar>
        <SidebarContent />
      </Sidebar>
      <Main view={view} /> */}
    </div>
  );
}

export default App;
