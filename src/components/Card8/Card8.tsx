import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import { PostDataType } from "data/types";
import { Link } from "react-router-dom";
import SocialsShare from "components/SocialsShare/SocialsShare";
import CategoryBadgeList from "components/CategoryBadgeList/CategoryBadgeList";
import PostTypeFeaturedIcon from "components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";

export interface Card8Props {
  className?: string;
  post: PostDataType;
}

const Card8: FC<Card8Props> = ({ className = "h-full", post }) => {
  const { title, href, featuredImage, desc, categories, postType } = post;

  return (
    <div
      className={`nc-Card8 group relative [ nc-box-has-hover ] !rounded-lg [ nc-dark-box-bg-has-hover ] overflow-hidden ${className}`}
      data-nc-id="Card8"
    >
      <Link
        to={href}
        className="block w-full h-0 pt-[100%] sm:pt-[55%] rounded-xl overflow-hidden"
      >
        <NcImage
          containerClassName="absolute inset-0"
          src={featuredImage}
          alt={title}
        />
      </Link>
    </div>
  );
};

export default Card8;
