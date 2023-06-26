import { benefits } from "../constants";
import BenefitCard from "./BenefitCard";

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="z-0 mt-20 flex flex-col items-center justify-center gap-6"
    >
      <h1 className="text-[30px] font-extrabold text-black">
        TERE <span className="text-primary">BENEFITS</span>
      </h1>
      {benefits.map((benefit) => (
        <BenefitCard benefit={benefit} />
      ))}
    </section>
  );
};

export default Benefits;
