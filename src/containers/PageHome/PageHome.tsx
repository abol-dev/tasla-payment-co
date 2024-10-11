import React, { useState } from "react";
import SectionLatestPosts from "./SectionLatestPosts";
import SectionSliderPosts from "./SectionSliderPosts";
import SectionMagazine1 from "./SectionMagazine1";
import SectionVideos from "./SectionVideos";
import SectionLargeSlider from "./SectionLargeSlider";
import { Helmet } from "react-helmet";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import { PostDataType } from "data/types";
import {
  DEMO_POSTS,
  DEMO_POSTS_AUDIO,
  DEMO_POSTS_GALLERY,
  DEMO_POSTS_VIDEO,
} from "data/posts";
import { DEMO_CATEGORIES } from "data/taxonomies";
import { DEMO_AUTHORS } from "data/authors";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionSliderNewAuthors from "components/SectionSliderNewAthors/SectionSliderNewAuthors";
import SectionMagazine4 from "./SectionMagazine4";
import SectionAds from "./SectionAds";
import SectionGridPosts from "./SectionGridPosts";
import SectionMagazine7 from "./SectionMagazine7";
import SectionMagazine8 from "./SectionMagazine8";
import SectionMagazine9 from "./SectionMagazine9";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import Card9 from "components/Card9/Card9";
import Card8 from "components/Card8/Card8";
import { Link } from "react-router-dom";
import NcImage from "components/NcImage/NcImage";

//
const POSTS: PostDataType[] = DEMO_POSTS;
//
const MAGAZINE1_TABS = ["all", "Garden", "Fitness", "Design"];
const MAGAZINE1_POSTS = DEMO_POSTS.filter((_, i) => i >= 8 && i < 13);
const MAGAZINE2_POSTS = DEMO_POSTS.filter((_, i) => i >= 0 && i < 4);
//

const PageHome: React.FC = () => {
  const [products, setProducts] = useState([
    {
      mainImage:
        "https://iranmojo.com/wp-content/uploads/2024/01/fortnite.webp",
      mainURL: "",
      items: [
        {
          image:
            "https://iranmojo.com/wp-content/uploads/2024/01/fortnite.webp",
          url: "",
        },
        {
          image:
            "https://iranmojo.com/wp-content/uploads/2024/01/fortnite.webp",
          url: "",
        },
      ],
    },
    {
      mainImage:
        "https://iranmojo.com/wp-content/uploads/2024/01/fortnite.webp",
      mainURL: "",
      items: [
        {
          image:
            "https://iranmojo.com/wp-content/uploads/2024/01/fortnite.webp",
          url: "",
        },
        {
          image:
            "https://iranmojo.com/wp-content/uploads/2024/01/fortnite.webp",
          url: "",
        },
      ],
    },
  ]);
  return (
    <div className="relative nc-PageHome">
      <Helmet>
        <title>Home</title>
      </Helmet>

      {/* ======== ALL SECTIONS ======== */}
      <div className="relative overflow-hidden">
        {/* ======== BG GLASS ======== */}
        <BgGlassmorphism />

        {/* ======= START CONTAINER ============= */}
        <div className="container relative">
          {/* === SECTION 11 === */}
          {products[0] ? (
            <div className={`nc-SectionMagazine4 pt-12`}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 lg:h-96">
                {products[0].mainImage ? (
                  <div
                    className={`nc-Card8 group relative [ nc-box-has-hover ] !rounded-lg [ nc-dark-box-bg-has-hover ] overflow-hidden sm:col-span-2`}
                    data-nc-id="Card8"
                  >
                    <Link
                      to={products[0].mainURL}
                      className="block w-full h-0 pt-[100%] sm:pt-[55%] rounded-xl overflow-hidden"
                    >
                      <NcImage
                        containerClassName="absolute inset-0"
                        src={products[0].mainImage}
                        alt={"title"}
                      />
                    </Link>
                  </div>
                ) : (
                  ""
                )}
                {products[0]?.items?.map((item, index) => (
                  <div
                    className={`nc-Card9 relative flex flex-col group rounded-3xl overflow-hidden`}
                    data-nc-id="Card9"
                  >
                    <Link to={"href"}>
                      <NcImage
                        containerClassName="absolute inset-0 rounded-3xl"
                        className="object-cover w-full h-full rounded-3xl"
                        src={item.image}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}

          {products[1] ? (
            <div className={`nc-SectionMagazine4 pb-12 pt-6`}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 lg:h-96">
                {products[1]?.items?.map((item, index) => (
                  <div
                    className={`nc-Card9 relative flex flex-col group rounded-3xl overflow-hidden`}
                    data-nc-id="Card9"
                  >
                    <Link to={"href"}>
                      <NcImage
                        containerClassName="absolute inset-0 rounded-3xl"
                        className="object-cover w-full h-full rounded-3xl"
                        src={item.image}
                      />
                    </Link>
                  </div>
                ))}
                {products[1].mainImage ? (
                  <div
                    className={`nc-Card8 group relative [ nc-box-has-hover ] !rounded-lg [ nc-dark-box-bg-has-hover ] overflow-hidden sm:col-span-2`}
                    data-nc-id="Card8"
                  >
                    <Link
                      to={products[1].mainURL}
                      className="block w-full h-0 pt-[100%] sm:pt-[55%] rounded-xl overflow-hidden"
                    >
                      <NcImage
                        containerClassName="absolute inset-0"
                        src={products[1].mainImage}
                        alt={"title"}
                      />
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )}

          <SectionAds />

          {/* === SECTION  === */}
          {/* <div className="relative py-16">
            <BackgroundSection />
            <SectionSliderNewAuthors
              heading="Newest authors"
              subHeading="Say hello to future creator potentials"
              authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
              uniqueSliderClass="PageHome"
            />
          </div> */}

          {/* === SECTION 4 === */}

          {/* === SECTION 3 === */}
          {/* <SectionAds /> */}

          {/* === SECTION 7 === */}
          {/* <SectionMagazine7
            className="py-16 lg:py-28"
            posts={DEMO_POSTS_GALLERY.filter((_, i) => i < 6)}
          /> */}
        </div>

        <div className="container ">
          {/* === SECTION 9 === */}
          <SectionMagazine8
            className="py-16 lg:py-28"
            posts={DEMO_POSTS_AUDIO.filter((_, i) => i < 6)}
          />

          {/* === SECTION 5 === */}
          {/* <SectionGridAuthorBox
            className="py-16 lg:py-28"
            authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
          /> */}

          {/* === SECTION 8 === */}
          <div className="relative py-16">
            <BackgroundSection />
            <SectionBecomeAnAuthor />
          </div>

          {/* === SECTION 12 === */}
          {/* <div className="relative pt-16 my-16">
            <BackgroundSection />
            <SectionSliderPosts
              postCardName="card11"
              heading=" More design articles"
              subHeading="Over 1118 articles "
              posts={DEMO_POSTS.filter(
                (p, i) => i > 3 && i < 25 && p.postType === "standard"
              )}
              sliderStype="style1"
              uniqueSliderClass="pageHome-section12"
            />
          </div> */}

          {/* === SECTION 14 === */}
          {/* <SectionSubscribe2 className="pt-16 lg:pt-28" /> */}

          {/* === SECTION 15 === */}
          <SectionVideos className="py-16 lg:py-28 lg:pb-0" />

          {/* === SECTION 17 === */}
          {/* <SectionLatestPosts
            className="pb-16 lg:pb-28"
            posts={DEMO_POSTS.filter((_, i) => i > 8 && i < 16)}
            widgetPosts={DEMO_POSTS.filter((_, i) => i > 2 && i < 7)}
            categories={DEMO_CATEGORIES.filter((_, i) => i > 2 && i < 8)}
            tags={DEMO_CATEGORIES}
          /> */}

          <SectionMagazine1
            className="py-16 lg:py-28"
            posts={MAGAZINE1_POSTS}
            tabs={MAGAZINE1_TABS}
          />
        </div>
        {/* ======= END CONTAINER ============= */}
      </div>
    </div>
  );
};

export default PageHome;
