import React, { useState } from "react";
import SectionMagazine1 from "./../PageHome/SectionMagazine1";
import SectionVideos from "./../PageHome/SectionVideos";
import { Helmet } from "react-helmet";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import { PostDataType } from "data/types";
import { DEMO_POSTS, DEMO_POSTS_AUDIO } from "data/posts";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionAds from "./../PageHome/SectionAds";
import SectionMagazine8 from "./../PageHome/SectionMagazine8";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import { Link } from "react-router-dom";
import NcImage from "components/NcImage/NcImage";
import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";
import aks from "./../../images/ezgif.com-webp-to-jpg-converter-removebg-preview.png";

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
        "./../../images/ezgif.com-webp-to-jpg-converter-removebg-preview.png",
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
                {aks ? (
                  <div
                    className={`nc-Card8 bg-white/0 border-0 group group relative [ nc-box-has-hover ] !rounded-lg [ nc-dark-box-bg-has-hover ] overflow-hidden sm:col-span-2`}
                    data-nc-id="Card8"
                  >
                    <Link
                      to={products[0].mainURL}
                      className="block w-full h-0 pt-[100%] sm:pt-[55%] rounded-xl overflow-hidden"
                    >
                      <NcImage
                        containerClassName="absolute inset-0"
                        className="w-full h-full"
                        src={aks}
                        alt={"title"}
                      />
                    </Link>
                  </div>
                ) : (
                  ""
                )}
                {products[0]?.items?.map((item, index) => (
                  <div
                    className={`nc-Card9 relative flex flex-col rounded-3xl group overflow-hidden transition-all`}
                    data-nc-id="Card9"
                  >
                    <Link to={"href"}>
                      <NcImage
                        containerClassName="absolute inset-0 rounded-3xl group-hover:scale-105 group-hover:rotate-3 transition-all"
                        className="object-cover w-full h-full rounded-3xl"
                        src={item.image}
                      />
                    </Link>
                    <div className="w-full px-3 absolute bottom-0 bg-black/20 h-full flex flex-col items-center justify-end hover:bg-black/0 transition-all">
                      <div className="pb-3">
                        <h2 className="title text-white text-xl">
                          <Link
                            to={""}
                            title="سی پی وارزون موبایل (COD POINT-CP)"
                          >
                            {"سی پی وارزون موبایل (COD POINT-CP)"}
                          </Link>
                        </h2>
                        <div className="flex items-center justify-between w-full px-3">
                          <button className="add-to-cart">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30px"
                              height="30px"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="stroke-orange-400"
                            >
                              <path
                                d="M4.85795 8.84661C4.93811 7.80461 5.80699 7 6.85206 7H17.1479C18.193 7 19.0619 7.80461 19.142 8.84661L19.6687 15.6932C19.8474 18.0164 18.0105 20 15.6805 20H8.31951C5.98947 20 4.15259 18.0164 4.33129 15.6932L4.85795 8.84661Z"
                                // stroke="#000000"
                                stroke-width="2"
                              />
                              <path
                                d="M15 11V6C15 4.34315 13.6569 3 12 3V3C10.3431 3 9 4.34315 9 6V11"
                                // stroke="#000000"
                                stroke-width="2"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <div className="price text-white pt-3">
                            <span className="number">
                              <span className="price text-white text-2xl">
                                <span>{digitsEnToFa(addCommas(4009000))}</span>{" "}
                              </span>
                            </span>
                            <span className="symbol text-lg">تـومـان</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
                    className={`nc-Card9 relative flex flex-col rounded-3xl group overflow-hidden transition-all`}
                    data-nc-id="Card9"
                  >
                    <Link to={"href"}>
                      <NcImage
                        containerClassName="absolute inset-0 rounded-3xl group-hover:scale-105 group-hover:rotate-3 transition-all"
                        className="object-cover w-full h-full rounded-3xl"
                        src={item.image}
                      />
                    </Link>
                    <div className="w-full px-3 absolute bottom-0 bg-black/20 h-full flex flex-col items-center justify-end hover:bg-black/0 transition-all">
                      <div className="pb-3">
                        <h2 className="title text-white text-xl">
                          <Link
                            to={""}
                            title="سی پی وارزون موبایل (COD POINT-CP)"
                          >
                            {"سی پی وارزون موبایل (COD POINT-CP)"}
                          </Link>
                        </h2>
                        <div className="flex items-center justify-between w-full px-3">
                          <button className="add-to-cart">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30px"
                              height="30px"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="stroke-orange-400"
                            >
                              <path
                                d="M4.85795 8.84661C4.93811 7.80461 5.80699 7 6.85206 7H17.1479C18.193 7 19.0619 7.80461 19.142 8.84661L19.6687 15.6932C19.8474 18.0164 18.0105 20 15.6805 20H8.31951C5.98947 20 4.15259 18.0164 4.33129 15.6932L4.85795 8.84661Z"
                                // stroke="#000000"
                                stroke-width="2"
                              />
                              <path
                                d="M15 11V6C15 4.34315 13.6569 3 12 3V3C10.3431 3 9 4.34315 9 6V11"
                                // stroke="#000000"
                                stroke-width="2"
                                stroke-linecap="round"
                              />
                            </svg>
                          </button>
                          <div className="price text-white pt-3">
                            <span className="number">
                              <span className="price text-white text-2xl">
                                <span>{digitsEnToFa(addCommas(4009000))}</span>{" "}
                              </span>
                            </span>
                            <span className="symbol text-lg">تـومـان</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {aks ? (
                  <div
                    className={`nc-Card8 bg-white/0 border-0 group group relative [ nc-box-has-hover ] !rounded-lg [ nc-dark-box-bg-has-hover ] overflow-hidden sm:col-span-2`}
                    data-nc-id="Card8"
                  >
                    <Link
                      to={products[0].mainURL}
                      className="block w-full h-0 pt-[100%] sm:pt-[55%] rounded-xl overflow-hidden"
                    >
                      <NcImage
                        containerClassName="absolute inset-0"
                        className="w-full h-full"
                        src={aks}
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
