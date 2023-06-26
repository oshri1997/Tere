import React from "react";
import DownloadBtn from "./DownloadBtn";

const CallToDownload = () => {
  return (
    <div className=" mt-24 flex h-[300px] flex-col  gap-6 rounded-lg bg-primary px-6 py-8 font-semibold sm:gap-8 lg:h-40 lg:flex-row lg:items-center">
      <h1 className=" text-[28px] leading-10 text-white">
        Let’s go. Get a link to download the app.
      </h1>
      <div className="flex w-full flex-col gap-6 sm:justify-end lg:h-14 lg:flex-row lg:justify-center ">
        <input
          type="text"
          className="w-full rounded-md border-none px-4 py-3 text-xl tracking-wider text-black placeholder:text-center placeholder:text-ligherGray focus:border-none focus:outline-none lg:basis-2/3 lg:placeholder:text-xl "
          placeholder="Enter mobile phone number"
        />
        <button className="w-full cursor-pointer rounded-md bg-black px-4 py-3 text-center text-xl text-white sm:py-6 lg:basis-1/3 lg:py-2">
          APPLY TO DRIVE
        </button>
      </div>
    </div>
  );
};

export default CallToDownload;
