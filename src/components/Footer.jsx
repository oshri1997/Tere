import { androidstore, appstore, blackLogo, iphone } from "../assets";
import DownloadBtn from "./DownloadBtn";

const Footer = () => {
  return (
    <section className="z-0 mt-20 grid grid-cols-1 grid-rows-3 gap-4 bg-white p-12 px-6 md:mt-20 md:grid-rows-2 md:px-12 lg:mt-40 lg:grid-cols-5">
      <div className="flex flex-col flex-wrap items-center justify-center md:col-span-2 md:col-start-1 md:flex md:flex-row md:justify-around">
        <div className="h-auto w-[90px]">
          <img src={blackLogo} className="h-auto w-auto object-contain" alt="logo" />
        </div>
        <div className="flex flex-col items-center pt-8">
          <h1 className="text-xl font-semibold text-darkBlue md:text-2xl">Be Our Friend</h1>
          <p className="mt-2 text-center text-base leading-8 text-darkGray md:text-lg">
            3, Season Park ,Jakarta <br />
            support@foodyar.co id
            <br />
            021 - 1111 - 2222
          </p>
        </div>
      </div>
      <div className="col-span-1 col-start-1 row-span-1 row-start-2 mt-4 flex items-center justify-center md:col-span-2 md:col-start-4 md:row-start-1 md:mt-0">
        <div className="flex flex-col gap-8 md:flex-row">
          <DownloadBtn img={androidstore} text="Download" />
          <DownloadBtn img={appstore} text="Download" />
        </div>
      </div>
      <div className="col-span-1 col-start-1 row-start-3 border-t border-ligherGray pt-12 md:col-span-5 md:row-start-2 md:py-9">
        <p className=" text-center text-[14px] text-primaryDarker md:text-lg ">
          All Rights Reserved tere by Codematics 2023
        </p>
      </div>
    </section>
  );
};

export default Footer;
