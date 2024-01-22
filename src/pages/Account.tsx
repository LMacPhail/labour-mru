import { Session } from "@supabase/supabase-js";
import React from "react";
import { Account } from "../components/auth/Account";
import { supabase } from "../supabaseClient";

export const AccountPage: React.FC<{ session: Session | null }> = ({
  session,
}) => {
  return (
    <>
      <Account session={session} />{" "}
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
