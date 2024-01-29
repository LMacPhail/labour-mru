import { Session } from "@supabase/supabase-js";
import React from "react";
import { Account } from "../components/auth/Account";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

export const AccountPage: React.FC<{ session: Session | null }> = ({
  session,
}) => {
  const navigate = useNavigate();
  if (session === null) {
    navigate("/");
  }

  return (
    <>
      {session && <Account session={session} />}
      <div className="mt-16">
        <button
          className="btn btn-sm btn-error"
          type="button"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </>
  );
};
