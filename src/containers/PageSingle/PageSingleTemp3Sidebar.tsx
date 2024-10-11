import React, { FC, ReactNode, useEffect, useState } from "react";
import { PostDataType, TaxonomyType } from "data/types";
import { SINGLE } from "data/single";
import SingleContent from "./SingleContent";
import { CommentType } from "components/CommentCard/CommentCard";
import SingleRelatedPosts from "./SingleRelatedPosts";
import { useAppDispatch } from "app/hooks";
import { changeCurrentPage } from "app/pages/pages";
import { Sidebar } from "./Sidebar";
import SingleHeader from "./SingleHeader";
import * as persianTools from "@persian-tools/persian-tools";

export interface PageSingleTemp3SidebarProps {
  className?: string;
}

export interface SinglePageType extends PostDataType {
  tags: TaxonomyType[];
  content: string | ReactNode;
  comments: CommentType[];
}
export interface selectedProductType extends PostDataType {
  title: string;
  mainPrice: number;
  offPrice: number;
}

const PageSingleTemp3Sidebar: FC<PageSingleTemp3SidebarProps> = ({
  className = "",
}) => {
  const dispatch = useAppDispatch();

  // UPDATE CURRENTPAGE DATA IN PAGEREDUCERS
  useEffect(() => {
    dispatch(changeCurrentPage({ type: "/product/:slug", data: SINGLE }));
    return () => {
      dispatch(changeCurrentPage({ type: "/", data: {} }));
    };
  }, []);

  const [products, setProducts] = useState([
    { id: 1, title: "10 یوسی", mainPrice: 96000, offPrice: 89000, maximum: 5 },
    {
      id: 2,
      title: "20 یوسی",
      mainPrice: 120000,
      offPrice: 115000,
      maximum: 5,
    },
    {
      id: 3,
      title: "30 یوسی",
      mainPrice: 135000,
      offPrice: 125000,
      maximum: 5,
    },
    {
      id: 4,
      title: "40 یوسی",
      mainPrice: 155000,
      offPrice: 135000,
      maximum: 5,
    },
    {
      id: 5,
      title: "40 یوسی",
      mainPrice: 155000,
      offPrice: 135000,
      maximum: 5,
    },
    {
      id: 6,
      title: "40 یوسی",
      mainPrice: 155000,
      offPrice: 135000,
      maximum: 5,
    },
    {
      id: 7,
      title: "40 یوسی",
      mainPrice: 155000,
      offPrice: 135000,
      maximum: 5,
    },
    {
      id: 8,
      title: "50 یوسی",
      mainPrice: 175000,
      offPrice: 155000,
      maximum: 5,
    },
  ]);

  const [seletedProducts, setSeletedProducts] = useState({ ...products[0] });

  const [counter, setCounter]: any = useState(1);

  useEffect(() => {
    setCounter(1);
  }, [seletedProducts]);

  return (
    <>
      <div
        className={`nc-PageSingleTemp3Sidebar ${className}`}
        data-nc-id="PageSingleTemp3Sidebar"
      >
        <header className="relative py-8 bg-neutral-900 dark:bg-black">
          {/* SINGLE HEADER */}
          <div className="container relative z-10 dark">
            <div
              className="max-w-screen-md overflow-hidden rounded-xl"
              style={{ aspectRatio: "6 / 3" }}
            >
              <img
                className="w-full h-full"
                src="https://iranmojo.com/wp-content/uploads/2024/01/%D8%A8%D8%AA%D9%84-%D9%BE%D8%B3-%DA%86%D9%BE%D8%AA%D8%B1-5-%D8%B3%DB%8C%D8%B2%D9%86-1.webp"
                alt=""
              />
            </div>
            <div className="max-w-screen-md">
              <SingleHeader
                hiddenDesc
                metaActionStyle="style2"
                pageData={SINGLE}
              />
            </div>
          </div>

          {/* FEATURED IMAGE */}
          <div className="z-10 p-4 pt-0 mt-8 md:p-16 md:mt-0 md:absolute md:top-0 md:right-0 md:bottom-0 md:w-1/2 lg:w-2/5 2xl:w-1/3">
            <div
              className="w-full"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridTemplateRows: "repeat(5, 1fr)",
                gridColumnGap: "12px",
                gridRowGap: "12px",
              }}
            >
              {products?.map((pro) => (
                <div
                  onClick={() => setSeletedProducts({ ...pro })}
                  className={`${
                    seletedProducts?.id === pro?.id
                      ? "!bg-primary-6000 font-bold !text-white border-white"
                      : ""
                  } box-border flex items-center justify-between w-full col-span-1 row-span-1 p-1 max-h-14 py-2 pl-2 text-sm text-gray-400 transition-all border-2 border-gray-400 rounded-md cursor-pointer group hover:text-gray-200 hover:border-gray-200`}
                >
                  <div className="">{pro?.title}</div>
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <div
                        className={`${
                          pro?.offPrice
                            ? `${
                                seletedProducts?.id === pro?.id
                                  ? "!text-gray-400"
                                  : ""
                              } line-through text-gray-700 -mb-[2px]`
                            : ""
                        }`}
                      >
                        {persianTools.digitsEnToFa(
                          persianTools.addCommas(pro.mainPrice)
                        )}
                      </div>
                      {pro?.offPrice ? (
                        <div className="-mt-[2px]">
                          {persianTools.digitsEnToFa(
                            persianTools.addCommas(pro.offPrice)
                          )}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="rotate-90">تومان</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full mt-4 text-white">
              <div className="flex items-center justify-between w-full text-left">
                <div>
                  <div className="flex items-center justify-center py-2 text-center border-2 border-gray-600 rounded-lg w-36">
                    <button
                      onClick={() =>
                        counter < seletedProducts?.maximum
                          ? setCounter(counter + 1)
                          : ""
                      }
                      className={`${
                        counter < seletedProducts?.maximum ? "" : "opacity-40"
                      } w-1/3 text-[30px]`}
                    >
                      +
                    </button>
                    <div className="w-1/3 text-[22px] -mb-2">{counter}</div>
                    <button
                      onClick={() =>
                        counter > 1 ? setCounter(counter - 1) : ""
                      }
                      className={`${
                        counter > 1 ? "" : "opacity-40"
                      } w-1/3 text-[30px]`}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-end gap-3">
                      <div className="text-xl line-through opacity-60">
                        {persianTools.digitsEnToFa(
                          persianTools.addCommas(
                            seletedProducts.mainPrice * counter
                          )
                        )}
                      </div>
                      <div className="px-2 py-[2px] bg-red-500 rounded-lg">
                        {persianTools.digitsEnToFa(
                          Math.ceil(
                            100 -
                              (seletedProducts?.offPrice /
                                seletedProducts?.mainPrice) *
                                100
                          )
                        )}
                        %
                      </div>
                    </div>
                  </div>
                  <div className="text-4xl font-bold">
                    {persianTools.digitsEnToFa(
                      persianTools.addCommas(seletedProducts.offPrice * counter)
                    )}
                  </div>
                </div>
              </div>
              <button className="w-full p-2 text-xl text-white rounded-lg bg-primary-500">
                افزودن به سبد
              </button>
            </div>
          </div>
        </header>

        {/* SINGLE MAIN CONTENT */}
        <div className="container flex flex-col my-10 lg:flex-row ">
          <div className="w-full lg:w-3/5 xl:w-2/3 xl:pr-20">
            <SingleContent data={SINGLE} />
          </div>
          <div className="w-full mt-12 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3">
            <Sidebar />
          </div>
        </div>

        {/* RELATED POSTS */}
        {/* <SingleRelatedPosts /> */}
      </div>
    </>
  );
};

export default PageSingleTemp3Sidebar;
