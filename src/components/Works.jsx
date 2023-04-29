import { PhoneApp, WorkFeature, WorkNum } from "../components";
import { works } from "../constants";

const Works = () => {
  return (
    <section id="about" className="mt-20 flex flex-col items-center justify-center  ">
      <div className=" flex  flex-col items-center justify-center">
        <h1 className="text-[30px] font-extrabold text-black">
          HOW <span className="text-primary">TERE</span> WORKS
        </h1>
        <p className="max-w-xl px-2 py-2 text-center text-[18px] text-[#9E9DA2] ">
          Download and install the tereapp.Enter your phone number and make your user
          account.When approved you may start diving.
        </p>
      </div>
      <div className=" mt-6 w-full gap-8 xl:grid xl:grid-cols-12  ">
        <div className="hidden  h-full flex-col  items-end justify-around  xl:col-span-4 xl:col-start-1 xl:flex">
          {works.map((work) => {
            return work.id % 2 == 1 && <WorkFeature {...work} />;
          })}
        </div>
        <PhoneApp />
        <div className="-mt-[13px] hidden h-full flex-col items-start justify-around  xl:col-span-4 xl:col-start-9 xl:flex">
          {works.map((work) => {
            return work.id % 2 == 0 && <WorkFeature {...work} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
