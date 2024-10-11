import React, { FC, useEffect, useRef } from "react";
import Tag from "components/Tag/Tag";
import { SinglePageType } from "./PageSingle";
import SingleAuthor from "./SingleAuthor";
import SingleCommentForm from "./SingleCommentForm";
import SingleCommentLists from "./SingleCommentLists";
import SingleContentDemo from "./SingleContentDemo";
import { useLocation } from "react-router";

export interface SingleContentProps {
  data: SinglePageType;
}

const SingleContent: FC<SingleContentProps> = ({ data }) => {
  const { tags, author, commentCount, comments } = data;
  const commentRef = useRef<HTMLDivElement>(null);
  //
  const location = useLocation();

  useEffect(() => {
    //  SCROLL TO COMMENT AREA
    if (location.hash !== "#comment") {
      return;
    }
    //
    if (location.hash === "#comment") {
      setTimeout(() => {
        if (commentRef.current) {
          commentRef.current.scrollIntoView();
        }
      }, 500);
    }
  }, [location]);

  return (
    <div className="space-y-10 nc-SingleContent">
      {/* ENTRY CONTENT */}
      <div
        id="single-entry-content"
        className="prose prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-invert"
      >
        {/* THIS IS THE DEMP CONTENT */}
        {/* IF YOUR DATA IS JSON, YOU CAN USE render with html-react-parser (https://www.npmjs.com/package/html-react-parser) */}
        <SingleContentDemo />
      </div>

      {/* TAGS */}
      {/* <div className="flex flex-wrap max-w-screen-md mx-auto">
        {tags.map((item: any) => (
          <Tag hideCount key={item.id} tag={item} className="mb-2 mr-2" />
        ))}
      </div> */}

      {/* AUTHOR */}
      <div className="max-w-screen-md mx-auto border-t border-b border-neutral-100 dark:border-neutral-700"></div>
      {/* <div className="max-w-screen-md mx-auto ">
        <SingleAuthor author={author} />
      </div> */}

      {/* COMMENT FORM */}
      <div
        id="comment"
        ref={commentRef}
        className="max-w-screen-md pt-5 mx-auto"
      >
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
          نظرات ({commentCount})
        </h3>
        <SingleCommentForm
          onClickSubmit={(id) => console.log(id)}
          onClickCancel={(id) => console.log(id)}
        />
      </div>

      {/* COMMENTS LIST */}
      <div className="max-w-screen-md mx-auto">
        <SingleCommentLists comments={comments} />
      </div>
    </div>
  );
};

export default SingleContent;
