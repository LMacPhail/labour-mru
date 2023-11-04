import React from "react";

export const Footer: React.FC = () => {
  return (
    <div className="text-sm">
      <div className="divider"></div>
      <p className="italic">
        Made with love by:{" "}
        <a className="text-blue-800 dark:text-blue-200" href="/">
          people
        </a>
      </p>
      <span className="mt-2">
        Get in touch with us at <a href="/">our@email.com</a>
      </span>
    </div>
  );
};
