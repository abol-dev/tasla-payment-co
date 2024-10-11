import ButtonPrimary from "components/Button/ButtonPrimary";
import React from "react";
import { Helmet } from "react-helmet";

const PageCart: React.FC = () => {
  return (
    <div className="container my-12">
      {/* <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 text-neutral-900 dark:text-neutral-50">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold">سبد خرید</h2>
        </div>
      </div> */}
      <div className="rounded-xl bg-gray-100 w-full p-8 flex flex-col gap-4">
        <div className="flex w-full items-center justify-end gap-2">
          <button className="bg-blue-400 text-white rounded-md px-2 py-1">
            بروزرسانی
          </button>
          <button className="bg-red-500 text-white rounded-md px-2 py-1">
            حذف سبد خرید
          </button>
        </div>
        <div className="flex items-center flex-col gap-4">
          <div className="w-full flex items-center p-4 border-2 border-gray-200 rounded-lg shadow-md backdrop-blur-md">
            <div className="w-full flex items-center justify-between">
              <div className="h-fit w-full flex items-center">
                <div className="h-20 w-fit">
                  <img
                    className="w-full h-full"
                    src={
                      "https://iranmojo.com/wp-content/uploads/2023/06/%D8%AE%D8%B1%DB%8C%D8%AF-%D8%B3%DB%8C-%D9%BE%DB%8C-%D8%B2%D9%85%D8%A7%D9%86%D8%A8%D8%B1-%DA%A9%D8%A7%D9%84%D8%A7%D9%81-%D8%AF%DB%8C%D9%88%D8%AA%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86-%D9%85%D9%88%D8%AC%D9%88.webp"
                    }
                    alt=""
                  />
                </div>
                <div className="mx-6">
                  <h3 className="text-lg font-bold mb-2">
                    سی پی زمانبر و ارزان - 2400
                  </h3>
                  <span>
                    روش اتصال: {" اکتیویژن(COD ID) اکانت کالاف"} - {"abolfazl"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-3">
                <div className="flex items-center justify-between border border-gray-300 rounded-md p-3 py-1 gap-8">
                  <button className="px-1 py-1 text-xl opacity-60">-</button>
                  <span className="text-xl pt-[4px] font-semibold">{2}</span>
                  <button className="px-1 py-1 text-xl opacity-60">+</button>
                </div>
                <div>
                  <span className="font-bold">{"۱,۵۹۹,۰۰۰"}</span> تومان
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex w-full items-center justify-between">
          <button className="bg-blue-500 text-white rounded-md px-4 py-2 text-xl">
            نهایی کردن خرید
          </button>
          <div>
            مجموع کل: <span className="font-bold">{"۱,۵۹۹,۰۰۰"}</span> تومان
          </div>
        </div> */}
      </div>
      <div className="rounded-xl bg-gray-100 w-full p-8 pt-5 flex gap-4 mt-8">
        <div className="flex flex-col px-1 w-1/2">
          <div className="flex items-center justify-between text-sm border-b-2 py-3 px-1">
            <span>سی پی زمانبر و ارزان - 2400</span>
            <span>
              <span>{"۵"} * </span>
              <span className="font-bold">{"۱,۵۹۹,۰۰۰"}</span> تومان
            </span>
          </div>
          <div className="flex items-center justify-between text-sm py-3 px-1">
            <span className="font-bold">مجموع کل</span>
            <span>
              <span className="font-bold">{"۱,۵۹۹,۰۰۰"}</span> تومان
            </span>
          </div>
        </div>
        <div className="w-1/2 pt-3">
          <div className="w-full">
            <textarea
              id="message"
              className="p-2.5 w-full max-h-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="توضیحات درمورد اکانت یا نوع ثبت..."
            ></textarea>
          </div>
          <div className="mt-8">
            <input
              id="disabled-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="disabled-checkbox" className="ml-2">
              من <span className="text-red-500 underline">شرایط و مقررات</span>{" "}
              سایت را خوانده ام و آن را می پذیرم.
            </label>
          </div>
          <button className="w-full text-lg py-2 bg-blue-600 text-white mt-2">
            ثبت و پرداخت سفارش
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageCart;
