import React from "react";

export const Banner: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className={`bg-accent p-2 w-full min-h-2 text-black`}>{children}</div>
  );
};
