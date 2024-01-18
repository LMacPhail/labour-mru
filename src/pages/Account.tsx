import { Session } from "@supabase/supabase-js";
import React from "react";

export const AccountPage: React.FC<{ session: Session | null }> = ({
  session,
}) => {
  return <div>Edit account here, {session?.user.email}</div>;
};
