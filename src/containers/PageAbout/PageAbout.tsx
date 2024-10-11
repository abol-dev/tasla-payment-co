import SectionHero from "components/SectionHero/SectionHero";
import rightImg from "images/about-hero-right.png";
import React, { FC } from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";

export interface PageAboutProps {
  className?: string;
}

const PageAbout: FC<PageAboutProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >
      <Helmet>
        <title>About</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 درباره ما"
          btnText=""
          subHeading="به عنوان ارائه دهنده خدمات خریدهای درون برنامه ای آغاز نمود و اکنون با ایجاد کردن بستر مناسب و مطمئن، علاوه بر ارائه خدمت خریدهای درون برنامه ای، به ارائه خدماتی دیگر از قبیل فروش گیفت کارت و فروش کنسول های بازی، ثبت آگهی خرید و فروش اکانت و تجهیزات بازی و تولید محتوای بازی و سرگرمی و هرآنچه که در بازی و سرگرمی نیاز است، دارد. "
        />

        <SectionFounder />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionStatistic />
        </div>

        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageAbout;
