import React from "react";
import Auth from "./Auth";
import Account from "./Account";
import { Session } from "@supabase/supabase-js";

// {/* You can open the modal using document.getElementById('ID').showModal() method */}
// <button className="btn" onClick={()=>document.getElementById('sign_up_modal').showModal()}>open modal</button>
export const SignUpModal: React.FC<{
  status: "sign-up" | "add-info";
  session: Session | null;
}> = ({ status, session }) => {
  const getModalContent = () => {
    switch (status) {
      case "sign-up":
        return <Auth />;
      case "add-info":
        return <Account session={session} />;
    }
  };

  return (
    <dialog id="sign_up_modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-ghost absolute right-2 top-2">
            Continue without signing up
          </button>
        </form>
        <h3 className="font-bold text-lg">Hello!</h3>
        {getModalContent()}
      </div>
    </dialog>
  );
};
