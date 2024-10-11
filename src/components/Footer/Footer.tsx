import Logo from "components/Logo/Logo";
import SocialsList1 from "components/SocialsList1/SocialsList1";
import { CustomLink } from "data/types";
import React from "react";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "دسته بندی ها",
    menus: [
      { href: "#", label: "حساب ها" },
      { href: "#", label: "مدیریت" },
      { href: "#", label: "نقشه راه" },
      { href: "#", label: "ساپورت در مرورگرها" },
      { href: "#", label: "ادیتور" },
      { href: "#", label: "مسابقات" },
      { href: "#", label: "دارک مود" },
      { href: "#", label: "ریسپانسیو" },
    ],
  },
  {
    id: "1",
    title: "لینک های مهم",
    menus: [
      { href: "#", label: "مسابقات" },
      { href: "#", label: "ساپورت در مرورگرها" },
      { href: "#", label: "حساب ها" },
      { href: "#", label: "ادیتور" },
      { href: "#", label: "نقشه راه" },
      { href: "#", label: "مدیریت" },
      { href: "#", label: "ریسپانسیو" },
      { href: "#", label: "دارک مود" },
    ],
  },
  {
    id: "2",
    title: "جدیدترین بازی ها",
    menus: [
      { href: "#", label: "مدیریت" },
      { href: "#", label: "نقشه راه" },
      { href: "#", label: "حساب ها" },
      { href: "#", label: "مسابقات" },
      { href: "#", label: "ادیتور" },
      { href: "#", label: "دارک مود" },
      { href: "#", label: "ریسپانسیو" },
      { href: "#", label: "ساپورت در مرورگرها" },
    ],
  },
  {
    id: "4",
    title: "خبرنامه",
    menus: [
      { href: "#", label: "حساب ها" },
      { href: "#", label: "ساپورت در مرورگرها" },
      { href: "#", label: "نقشه راه" },
      { href: "#", label: "دارک مود" },
      { href: "#", label: "مسابقات" },
      { href: "#", label: "مدیریت" },
      { href: "#", label: "ادیتور" },
      { href: "#", label: "ریسپانسیو" },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-3">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-500 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="relative py-16 border-t nc-Footer border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
        <div className="grid grid-cols-4 col-span-2 gap-5 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            <Logo />
          </div>
          <div className="flex items-center col-span-2 md:col-span-3">
            <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
      <div className="flex flex-col items-center w-full px-8 md:gap-10 ga-4 md:px-16 md:flex-row">
        <div className="w-full md:w-1/3">
          <div className="flex items-center justify-center p-5 mt-16 mb-4 border-2 rounded-lg">
            <div className="flex items-center gap-8">
              <h5 className="mb-0 text-2xl text-blue-800 col-lg md:mb-4 lg:mb-0">
                نماد اعتماد
              </h5>
              <div className="flex items-center justify-around">
                <div>
                  <img
                    className="w-20"
                    id="nbqejzpeapfujzpejxlzesgt"
                    style={{ cursor: "pointer" }}
                    alt="logo-samandehi"
                    src="https://iranmojo.com/wp-content/themes/iranmojo/assets/img/samandehi.webp"
                  />
                </div>
                <div>
                  <a
                    target="_blank"
                    href="https://trustseal.enamad.ir/?id=60487&amp;Code=0dY60EeLofZqICSWhfoh"
                  >
                    <img
                      className="w-20"
                      src="https://iranmojo.com/wp-content/themes/iranmojo/assets/img/enamad.webp"
                      alt=""
                      style={{ cursor: "pointer" }}
                      id="0dY60EeLofZqICSWhfoh"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="flex items-center justify-center w-full p-5 mb-4 border-2 rounded-lg md:mt-16 ">
            <div className="flex items-center gap-8">
              <h5 className="mb-0 text-2xl text-blue-800 col-lg md:mb-4 lg:mb-0">
                نماد اعتماد
              </h5>
              <div className="flex items-center justify-around">
                <div>
                  <img
                    className="w-20"
                    id="nbqejzpeapfujzpejxlzesgt"
                    style={{ cursor: "pointer" }}
                    alt="logo-samandehi"
                    src="https://iranmojo.com/wp-content/themes/iranmojo/assets/img/samandehi.webp"
                  />
                </div>
                <div>
                  <a
                    target="_blank"
                    href="https://trustseal.enamad.ir/?id=60487&amp;Code=0dY60EeLofZqICSWhfoh"
                  >
                    <img
                      className="w-20"
                      src="https://iranmojo.com/wp-content/themes/iranmojo/assets/img/enamad.webp"
                      alt=""
                      style={{ cursor: "pointer" }}
                      id="0dY60EeLofZqICSWhfoh"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full gap-6 px-8 mt-12 md:items-center md:px-16 md:flex-row md:gap-0">
        <div className="text-sm copyright md:text-base">
          <p className="mb-1 title">طراحی توسط تیم طراحی تسلا شاپ</p>
          <p className="subtitle">
            اين وبسايت متعلق به تسلا شاپ ميباشد و تمامی حقوق آن محفوظ ميباشد
          </p>
        </div>
        <div className="flex items-center justify-end gap-2 ">
          <span
            onClick={() => (document.documentElement.scrollTop = 0)}
            id="to_head"
            title="بریم بالا"
          >
            بریم بالا
          </span>
          <span className="block w-8 h-8 bg-blue-600 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 6V18M12 6L7 11M12 6L17 11"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
