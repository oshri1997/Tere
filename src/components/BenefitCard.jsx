import React from "react";
import { useEffect, useState } from "react";

const BenefitCard = ({ benefit }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <div
      key={benefit.id}
      className={`items flex w-full max-w-[1060px] flex-col items-center gap-8  bg-white  p-6  lg:flex-row lg:justify-evenly ${
        benefit.id === 2 ? "lg:-mr-14" : "lg:-ml-14"
      }`}
    >
      <div
        className={`flex flex-col justify-center lg:${
          benefit.id === 2 && "order-last items-end  "
        } `}
      >
        <div className="flex w-[380px] items-center gap-[39px]">
          <h1 className="text-[65px] text-primary lg:text-[88px] ">0{benefit.id}.</h1>
          <h2 className="text-[25px] text-black lg:text-[34px]">{benefit.title}</h2>
        </div>
        {isMobile === false && (
          <p className="w-2/3   text-[22px] text-lightGray">{benefit.description}</p>
        )}
      </div>
      <div className={`flex h-[250px] w-[250px] basis-1/2 justify-center  `}>
        <img src={benefit.img} className="h-auto w-auto object-contain" alt="benfImg" />
      </div>
      {isMobile === true && (
        <p className="w-2/3 text-center  text-[16px] text-lightGray">{benefit.description}</p>
      )}
    </div>
  );
};

export default BenefitCard;
