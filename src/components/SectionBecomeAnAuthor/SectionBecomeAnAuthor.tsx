import React, { FC } from "react";
import NcImage from "components/NcImage/NcImage";
import rightImgDemo from "images/BecomeAnAuthorImg.png";
import ButtonPrimary from "components/Button/ButtonPrimary";

export interface SectionBecomeAnAuthorProps {
  className?: string;
  rightImg?: string;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
  className = "",
  rightImg = rightImgDemo,
}) => {
  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`}
      data-nc-id="SectionBecomeAnAuthor"
    >
      <div className="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
        <span className="text-xs uppercase tracking-wider font-medium text-neutral-400">
          "در صورتی که قادر به خرید اینترنتی نیستید"
        </span>
        <h2 className="font-semibold text-3xl sm:text-4xl mt-3">
          در صورت آگاه نبودن از مراحل خرید به شما توصیه می کنیم تا فرآیند خرید
          را مطالعه فرمایید .
        </h2>
        <span className="block mt-8 text-neutral-500 dark:text-neutral-400">
          در صورت آگاه نبودن از مراحل خرید به شما توصیه می کنیم تا فرآیند خرید
          را مطالعه فرمایید و در صورت داشتن هرگونه سوال با ما در تماس باشید.
        </span>
        <ButtonPrimary className="mt-8">تماس با ما</ButtonPrimary>
      </div>
      <div className="flex-grow">
        <NcImage src={rightImg} />
      </div>
    </div>
  );
};

export default SectionBecomeAnAuthor;
