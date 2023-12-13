import React from "react";
import TextLink from "../atoms/Link";
import { GithubLogo } from "@phosphor-icons/react";

export const Footer: React.FC = () => {
  return (
    <div className="text-sm flex flex-col gap-2">
      <div className="divider"></div>
      <p>
        Built by volunteers at the{" "}
        <TextLink link="http://mvmtresearch.org">
          Movement Research Unit
        </TextLink>
        
      </p>
      <p>Questions or changes: mps@mvmtresearch.org</p>
      <TextLink link="https://donate.stripe.com/bIY6rig2w5ohat24gg">
        Support our work
      </TextLink>
      <TextLink link="https://go.mvmtresearch.org/join">Get involved</TextLink>
      <TextLink link="https://github.com/LMacPhail/labour-mru">
        <span className="flex flex-row gap-2 items-center">
          Contribute on Github{" "}
          <span>
            <GithubLogo size={18} />
          </span>
        </span>
      </TextLink>
    </div>
  );
};
