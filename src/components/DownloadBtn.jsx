import React from "react";

const DownloadBtn = ({ img, text }) => {
  return (
    <>
      <button className="flex items-center self-end justify-center gap-4 px-8 py-2 bg-black rounded-lg ">
        {img ? (
          <img className="object-contain w-full h-auto" src={img} alt="appstoreIcon" />
        ) : null}

        <p className="text-lg text-white md:text-2xl lg:text-2xl xl:text-3xl">{text}</p>
      </button>
    </>
  );
};

export default DownloadBtn;
