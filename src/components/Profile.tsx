import React from "react";
import { SocialMediaLinks } from "../data/types";

export const ProfileHeader: React.FC<{
  name: string;
  socials: SocialMediaLinks;
}> = ({ name, socials }) => {
  return <span>{name}</span>;
};

export const ProfileContent: React.FC<{ bio: string }> = ({ bio }) => {
  return <p>{bio}</p>;
};
