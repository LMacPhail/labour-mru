import React from "react";

// TODO: Make templates for some of these links that get reused
export const Footer: React.FC = () => {
  return (
    <div className="text-sm flex flex-col gap-2">
      <div className="divider"></div>
      <p>
        Built by volunteers at the{" "}
        <a
          className="text-link"
          href="http://mvmtresearch.org"
          target="_blank"
          rel="noreferrer"
        >
          Movement Research Unit.
        </a>
      </p>
      <p>Questions or changes: mps@mvmtresearch.org</p>
      <a
        className="text-link"
        href="https://donate.stripe.com/bIY6rig2w5ohat24gg"
        target="_blank"
        rel="noreferrer"
      >
        Support our work.
      </a>
      <a
        className="text-link"
        href="https://go.mvmtresearch.org/join"
        target="_blank"
        rel="noreferrer"
      >
        Get involved.
      </a>
    </div>
  );
};
