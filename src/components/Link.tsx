import React from "react";

export const LinkButton: React.FC<{
  text: string;
  colour: string;
  onClick(): void;
}> = ({ text, colour, onClick }) => {
  return (
    <button
      className={`bg-transparent m-4 decoration text-${colour}-700 hover:text-${colour}-800 dark:text-${colour}-100 dark:hover:text-${colour}-300`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
