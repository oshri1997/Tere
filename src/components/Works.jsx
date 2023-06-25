import { PhoneApp, WorkFeature, WorkNum } from "../components";
import { works } from "../constants";

const Works = () => {
  return (
    <section id="about" className="flex flex-col items-center justify-center mt-20 ">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-[30px] font-extrabold text-black">
          HOW <span className="text-primary">TERE</span> WORKS
        </h1>
        <p className="max-w-xl px-2 py-2 text-center text-[18px] text-[#9E9DA2] ">
          Download and install the tereapp.Enter your phone number and make your user
          account.When approved you may stnart diving.
        </p>
      </div>
      {/* mobile  */}
      <div className="w-full gap-8 mt-12 lg:hidden">
        <PhoneApp />
        <div className="flex flex-col items-center justify-around w-full mt-12 gap-7 xl:col-span-4 xl:col-start-1 xl:flex">
          {works.map((work) => (
            <WorkFeature {...work} />
          ))}
        </div>
      </div>
      {/* desktop */}
      <div className="hidden w-full gap-8 mt-6 lg:grid lg:grid-cols-12">
        <div className="flex-col items-end justify-around hidden h-full lg:col-span-4 lg:col-start-1 lg:flex">
          {works.map((work) => {
            return work.id % 2 == 1 && <WorkFeature {...work} />;
          })}
        </div>
        <PhoneApp />
        <div className="-mt-[13px] hidden h-full  flex-col items-start justify-around  lg:col-span-4 lg:col-start-9   lg:flex">
          {works.map((work) => {
            return work.id % 2 == 0 && <WorkFeature {...work} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
