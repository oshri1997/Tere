import { iphone, carphone } from "../assets";
import { options } from "../constants";

const PhoneApp = () => {
  return (
    <section className="relative -z-50 flex h-auto max-w-7xl items-center justify-center lg:col-span-4 lg:col-start-5">
      <div className=" absolute h-80 w-80 rounded-full bg-primary lg:h-[400px] lg:w-[400px]" />
      <div className="relative h-auto w-56 lg:w-72 ">
        <img className="relative h-auto w-auto object-contain" src={iphone} alt="iphone" />
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center px-10 py-12 ">
          <div className="flex w-full basis-11/12 flex-col gap-8 ">
            <div className="w-full ">
              <h1 className="text-left text-base leading-3 text-black lg:text-lg">
                Good day,
              </h1>
              <p className="text-lg font-bold text-black lg:text-xl">Siffat</p>
            </div>
            <img
              src={carphone}
              className="h-auto w-40 object-contain lg:mt-4 lg:w-52 "
              alt="car"
            />
            <div className="mt-3 flex flex-col gap-4 lg:mt-8">
              <button className="cursor-default rounded-md border-none bg-primary px-1 py-2 text-[8.75px] font-medium text-white outline-none lg:text-[12px]">
                Find a ride
              </button>
              <button className="cursor-default rounded-md border border-black bg-white px-1 py-2 text-[8.75px] font-medium  text-black  lg:text-[12px]">
                Publish a ride
              </button>
            </div>
          </div>
        </div>

        <div className="absolute  bottom-1  right-[16px] -z-10 flex h-12 w-[193px]  justify-center gap-1  rounded-b-3xl border-t border-slate-100 px-1 py-1  lg:right-[30px]  lg:h-14 lg:w-[240px]     ">
          {options.map((option) => (
            <div
              key={option.title}
              className="relative flex w-full flex-col items-center justify-start gap-1"
            >
              <img src={option.src} className="h-3 w-3 lg:h-5 lg:w-5" alt="option" />
              <p className="lg text-[5px] font-medium text-black lg:text-[7px]">
                {option.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhoneApp;
