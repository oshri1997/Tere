import { PhoneApp, WorkFeature, WorkNum } from "../components";
import { works } from "../constants";

const Works = () => {
  return (
    <section
      id="about"
      className="-z-1 relative mt-5 flex flex-col items-center justify-center "
    >
      <div className="-z-10 flex flex-col items-center justify-center ">
        <h1 className="text-[30px] font-extrabold text-black">
          HOW <span className="text-primary">TERE</span> WORKS
        </h1>
        <p className="max-w-xl px-2 py-2 text-center text-[18px] text-[#9E9DA2] ">
          Download and install the tereapp.Enter your phone number and make your user
          account.When approved you may stnart diving.
        </p>
      </div>
      {/* mobile  */}
      <div className="z-15 relative mt-12 w-full gap-8 lg:hidden">
        <PhoneApp />
        <div className="relative -z-10 mt-12 flex w-full flex-col items-center justify-around gap-7 xl:col-span-4 xl:col-start-1 xl:flex">
          {works.map((work) => (
            <WorkFeature {...work} />
          ))}
        </div>
      </div>
      {/* desktop */}
      <div className="mt-6 hidden w-full gap-8 lg:grid lg:grid-cols-12">
        <div className="hidden h-full flex-col items-end justify-around lg:col-span-4 lg:col-start-1 lg:flex">
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
