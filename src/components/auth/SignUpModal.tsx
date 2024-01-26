import React from "react";
import Auth from "./Auth";
import { Session } from "@supabase/supabase-js";
import { Account } from "./Account";
import { MODAL_DISMISSED_KEY } from "../../state/store";

export const SignUpModal: React.FC<{
  status: "sign-up" | "add-info";
  session: Session | null;
}> = ({ status, session }) => {
  const getModalContent = () => {
    switch (status) {
      case "sign-up":
        return <Auth />;
      case "add-info":
        return session ? <Account session={session} /> : <></>;
    }
  };

  return (
    <dialog id="sign_up_modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-ghost absolute right-2 top-2"
            onClick={() => localStorage.setItem(MODAL_DISMISSED_KEY, "true")}
          >
            Continue to site
          </button>
        </form>
        <h3 className="font-bold text-lg">
          {status === "sign-up" ? "Hello!" : "Add User Info"}
        </h3>
        {getModalContent()}
      </div>
    </dialog>
  );
};
