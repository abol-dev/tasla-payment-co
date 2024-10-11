import React, { FC, useState } from "react";
import PostCardSaveAction from "components/PostCardSaveAction/PostCardSaveAction";
import { PostDataType } from "data/types";
import { Link } from "react-router-dom";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostCardLikeAndComment from "components/PostCardLikeAndComment/PostCardLikeAndComment";
import PostCardMeta from "components/PostCardMeta/PostCardMeta";
import PostFeaturedMedia from "components/PostFeaturedMedia/PostFeaturedMedia";
import * as persianTools from "@persian-tools/persian-tools";

export interface Card11Props {
  className?: string;
  post: PostDataType;
  ratio?: string;
  hiddenAuthor?: boolean;
}

const Card11: FC<Card11Props> = ({
  className = "h-full",
  post,
  hiddenAuthor = false,
  ratio = "aspect-w-4 aspect-h-3",
}) => {
  const { title, href, categories, date } = post;

  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] h-full w-full ${className}`}
      data-nc-id="Card11"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}

      //
    >
      <div
        className={`block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden ${ratio}`}
      >
        <div>
          <PostFeaturedMedia post={post} isHover={isHover} />
        </div>
      </div>
      <Link to={href} className="absolute inset-0"></Link>
      {/* <span className="absolute z-10 top-3 inset-x-3">
        <CategoryBadgeList categories={categories} />
      </span> */}

      <div className="flex flex-col flex-grow p-4 space-y-3 text-lg">
        {/* {!hiddenAuthor ? (
          <PostCardMeta meta={post} />
        ) : (
          <span className="text-xs text-neutral-500">{date}</span>
        )} */}
        <h2 className="block text-sm font-semibold nc-card-title text-neutral-900 dark:text-neutral-100 ">
          <Link to={href} className="px-3 line-clamp-2" title={title}>
            {title}
          </Link>
        </h2>
        <h2 className="block text-sm font-semibold nc-card-title text-neutral-900 dark:text-neutral-100 ">
          <div className="flex items-center justify-between w-full">
            <span>بازی</span>
            <span>فری فایر</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <span>لایک</span>
            <span>394</span>
          </div>
        </h2>
        <div className="flex items-center justify-between pt-4 font-semibold nc-card-title dark:text-neutral-100">
          <div className="flex items-center gap-1 text-green-600">
            <div>تومان</div>
            {persianTools.digitsEnToFa(persianTools.addCommas(966000))}
          </div>
          <button className="h-8 w-8 p-[6px] flex items-center justify-center rounded-full border-orange-500 text-orange-500 border-2 transition-all hover:bg-orange-300 text-3xl font-bold">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card11;
