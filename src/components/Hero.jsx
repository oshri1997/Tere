import React from "react";
import { heroImage, appstore, androidstore } from "../assets";
import { DownloadBtn } from "../components";

// FIXME ADD MEDIA QUERIES FOR MD AND SM SCREENS
const Hero = () => {
  return (
    <section
      id="home"
      className="z-0 grid gap-12 place-items-center lg:grid-cols-12 lg:gap-20"
    >
      <div className="row-span-12 w-[396px] lg:col-start-7 lg:col-end-12 lg:w-[450px] xl:w-[550px]">
        <img
          src={heroImage}
          className="object-cover w-auto h-auto row-span-1"
          alt="heroImage"
        />
      </div>
      <div className="flex flex-col items-center justify-center h-full gap-8 sm:justify-end lg:col-span-6 lg:col-start-1 lg:row-start-1">
        <h1
          className={`text-center text-[42px] font-black leading-tight text-black md:text-[50px] lg:text-left lg:text-[42px] lg:leading-[76px] xl:text-[67px]`}
        >
          DOWNLOAD APP, SAVE MONEY, MAKE FRIENDS!
        </h1>
        <p className="mb-8 text-center text-[20px] text-[#9E9DA2] md:text-2xl lg:mb-14 lg:text-left lg:text-2xl lg:text-[20px]">
          Its simple and its free. Play your part in reducing Carbon Footprint and help Mother
          Nature to sustain its beauty. So what are you waiting for? Lets ride together.
        </p>
        <div className="flex items-end justify-center w-full h-auto gap-6 md:gap-10 lg:items-end lg:justify-between">
          <DownloadBtn text="Download" img={androidstore} />
          <DownloadBtn text="Download" img={appstore} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
