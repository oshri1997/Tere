import React from "react";
import { greenCircle } from "../assets";

const WorkNum = ({ num }) => {
  return (
    <div className="flex h-[60px] w-[60px] items-center justify-center ">
      <img src={greenCircle} className="relative h-auto w-auto object-contain" alt="num" />
      <h1 className="absolute text-3xl font-extrabold text-primary">{num}</h1>
    </div>
  );
};

export default WorkNum;
