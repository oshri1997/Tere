import React from "react";

const DownloadBtn = ({ img, text }) => {
  return (
    <>
      <button className="flex items-center justify-center gap-4 self-end rounded-lg bg-black px-8 py-2 ">
        {img ? (
          <img className="h-auto w-full object-contain" src={img} alt="appstoreIcon" />
        ) : null}

        <p className="text-lg text-white md:text-2xl lg:text-2xl xl:text-3xl">{text}</p>
      </button>
    </>
  );
};

export default DownloadBtn;
