import { SOCIALS_2 } from "components/SocialsList/SocialsList";
import { SocialType } from "components/SocialsShare/SocialsShare";
import React, { FC } from "react";

export interface SocialsList1Props {
  className?: string;
}

const socials: SocialType[] = [
  {
    id: "Facebook",
    name: "فیسبوک",
    icon: "lab la-facebook-f",
    href: "#",
    color: "blue-500",
  },
  {
    id: "Twitter",
    name: "توییتر",
    icon: "lab la-twitter",
    href: "#",
    color: "blue-400",
  },
  {
    id: "Linkedin",
    name: "لینکدین",
    icon: "lab la-linkedin-in",
    href: "#",
    color: "blue-500",
  },
  {
    id: "Instagram",
    name: "اینستاگرام",
    icon: "lab la-instagram",
    href: "#",
    color: "red-500",
  },
];

const SocialsList1: FC<SocialsList1Props> = ({ className = "space-y-2.5" }) => {
  const renderItem = (item: SocialType, index: number) => {
    return (
      <a
        href={item.href}
        className={`${
          item?.color ? `` : ""
        } flex items-center space-x-2 text-2xl leading-none text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white group`}
        key={index}
      >
        <i className={item.icon}></i>
        <span className="hidden text-sm lg:block">{item.name}</span>
      </a>
    );
  };

  return (
    <div className={`nc-SocialsList1 ${className}`} data-nc-id="SocialsList1">
      {socials.map(renderItem)}
    </div>
  );
};

export default SocialsList1;
