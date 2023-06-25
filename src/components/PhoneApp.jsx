import { iphone, carphone } from "../assets";
import { options } from "../constants";

const PhoneApp = () => {
  return (
    <div className="relative flex items-center justify-center h-auto max-w-7xl lg:col-span-4 lg:col-start-5">
      <div className=" absolute h-80 w-80 rounded-full bg-primary lg:h-[400px] lg:w-[400px]" />
      <div className="relative w-56 h-auto lg:w-72 ">
        <img className="z-20 object-contain w-auto h-auto" src={iphone} alt="iphone" />
        <div className="absolute top-0 left-0 flex flex-col items-center w-full h-full px-10 py-12 ">
          <div className="flex flex-col w-full gap-8 basis-11/12 ">
            <div className="w-full ">
              <h1 className="text-base leading-3 text-left text-black lg:text-lg">
                Good day,
              </h1>
              <p className="text-lg font-bold text-black lg:text-xl">Siffat</p>
            </div>
            <img
              src={carphone}
              className="object-contain w-40 h-auto lg:mt-4 lg:w-52 "
              alt="car"
            />
            <div className="flex flex-col gap-4 mt-3 lg:mt-8">
              <button className="cursor-default rounded-md border-none bg-primary px-1 py-2 text-[8.75px] font-medium text-white outline-none lg:text-[12px]">
                Find a ride
              </button>
              <button className="cursor-default rounded-md border border-black bg-white px-1 py-2 text-[8.75px] font-medium  text-black  lg:text-[12px]">
                Publish a ride
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-1 right-[16px] flex h-12 w-[193px]  justify-center gap-1  rounded-b-3xl border-t border-slate-100 px-1 py-1  lg:right-[30px]  lg:h-14 lg:w-[240px]     ">
          {options.map((option) => (
            <div
              key={option.title}
              className="flex flex-col items-center justify-start w-full gap-1"
            >
              <img src={option.src} className="w-3 h-3 lg:h-5 lg:w-5" alt="option" />
              <p className="lg text-[5px] font-medium text-black lg:text-[7px]">
                {option.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneApp;
