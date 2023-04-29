import React from "react";
import WorkNum from "./WorkNum";

const WorkFeature = ({ id, title, description }) => {
  return (
    <div
      key={id}
      className={`flex  w-72 flex-col ${id % 2 === 0 ? "item-start" : "items-end"}  gap-2`}
    >
      <WorkNum num={id} />
      <h1 className=" text-xl font-extrabold text-black">{title}</h1>
      <p className={`${id % 2 === 0 ? "text-left" : "text-right"} text-lg text-[#9E9DA2]`}>
        {description}
      </p>
    </div>
  );
};

export default WorkFeature;
