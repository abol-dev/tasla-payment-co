import React, { FC, useState } from "react";
import Card2 from "components/Card2/Card2";
import { PostDataType } from "data/types";
import Card6 from "components/Card6/Card6";
import HeaderFilter from "./HeaderFilter";
import Heading from "components/Heading/Heading";
import Nav from "components/Nav/Nav";
import NavItem from "components/NavItem/NavItem";
import ButtonSecondary from "components/Button/ButtonSecondary";

export interface SectionMagazine1Props {
  tabs: string[];
  posts: PostDataType[];
  heading?: string;
  className?: string;
}

const SectionMagazine1: FC<SectionMagazine1Props> = ({
  posts,
  tabs,
  heading = "مجله خبری 🎈 ",
  className = "",
}) => {
  const [tabActive, setTabActive] = useState<string>(tabs[0]);

  const handleClickTab = (item: string) => {
    if (item === tabActive) {
      return;
    }
    setTabActive(item);
  };

  return (
    <div className={`nc-SectionMagazine1 ${className}`}>
      <div className="relative flex flex-col mb-8">
        <div className="flex items-center justify-between">
          <Heading desc={null} className={"whitespace-nowrap"}>
            {heading}
          </Heading>
          <hr className="w-full mx-8" />
          <span className="flex-shrink-0 hidden sm:block">
            <ButtonSecondary className="!leading-none">
              <span>مشاهده همه</span>
              <i className="ml-3 rotate-180 text-xl las la-arrow-right"></i>
            </ButtonSecondary>
          </span>
        </div>
      </div>
      {!posts.length && <span>Nothing we found!</span>}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 md:gap-8">
        {posts[0] && <Card2 size="large" post={posts[0]} />}
        <div className="grid gap-6 md:gap-8">
          {posts
            .filter((_, i) => i < 4 && i > 0)
            .map((item, index) => (
              <Card6 key={index} post={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionMagazine1;
