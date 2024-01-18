import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Header } from "./components/Header";
import { useDispatch } from "react-redux";
import { fetchMPs } from "./data/utils/utils";
import { DataStatus, MP } from "./data/types";
import { SET_DATA_ACTION } from "./state/actions";
import { useAnalytics } from "./analytics";
import { supabase } from "./supabaseClient";
import { Session } from "@supabase/supabase-js";
import { SignUpModal } from "./components/auth/SignUpModal";
import MPIndex from "./pages/MPIndex";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import { AccountPage } from "./pages/Account";
import { SignUpPage } from "./pages/SignUp";

function App() {
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
  }, [supabase.auth]);

  useEffect(() => {
    if (document !== null) {
      // @ts-ignore
      document.getElementById("sign_up_modal").showModal();
    }
  });

  return (
    <Sidebar>
      <>
        <SignUpModal status="sign-up" session={session} />
        <Header session={session} />
        <div className="w-full pt-4 px-4 sm:px-6 md:px-8">
          <Routes>
            <Route path="/" element={<MPIndex />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/account"
              element={<AccountPage session={session} />}
            />
            <Route path="/sign-up" element={<SignUpPage />} />
          </Routes>
        </div>
      </>
    </Sidebar>
  );
}

export default App;
