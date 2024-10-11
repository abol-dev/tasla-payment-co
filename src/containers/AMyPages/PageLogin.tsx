import LayoutPage from "components/LayoutPage/LayoutPage";
import React, { FC } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import Input from "components/Input/Input";
import ButtonPrimary from "components/Button/ButtonPrimary";
import NcLink from "components/NcLink/NcLink";
import { Helmet } from "react-helmet";

export interface PageLoginProps {
  className?: string;
}

const PageLogin: FC<PageLoginProps> = ({ className = "" }) => {
  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LayoutPage
        subHeading="به سایت تسلا شاپ خوش آمدید."
        headingEmoji="🔑"
        heading="ورود"
      >
        <div className="max-w-md mx-auto space-y-6">
          <form className="grid grid-cols-1 gap-6" action="#" method="post">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                آدرس ایمیل
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                className="mt-1"
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                رمز عبور
              </span>
              <Input type="password" className="mt-1" />
            </label>
            <ButtonPrimary type="submit">ادامه</ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            کاربر جدید هستید؟ {` `}
            <NcLink to="/signup">ساخت اکانت</NcLink>
          </span>
        </div>
      </LayoutPage>
    </div>
  );
};

export default PageLogin;
