import { androidstore, appstore, blackLogo, iphone } from "../assets";
import DownloadBtn from "./DownloadBtn";

const Footer = () => {
  return (
    <section className="mt-20 grid grid-cols-1 grid-rows-3 gap-4 bg-white p-12 px-6 md:mt-20 md:grid-rows-2 md:px-12 lg:mt-40 lg:grid-cols-5">
      <div className="flex flex-col items-center justify-center md:col-span-2 md:col-start-1 md:flex md:flex-row md:justify-around">
        <div>
          <img src={blackLogo} alt="" />
        </div>
        <div className="flex flex-col items-center pt-8">
          <h1 className="text-xl  font-semibold text-[#272042] md:text-2xl">Be Our Friend</h1>
          <p className=" mt-2 text-center text-base leading-8 text-[#8B8BA5] md:text-lg">
            3, Season Park ,Jakarta <br />
            support@foodyar.co id
            <br />
            021 - 1111 - 2222
          </p>
        </div>
      </div>
      <div className="col-span-1 col-start-1 row-span-1 row-start-2 mt-4 flex items-center justify-center md:col-span-2 md:col-start-4 md:row-start-1 md:mt-0">
        <div className="flex flex-col gap-8 md:flex-row">
          <DownloadBtn img={androidstore} text="Download" />
          <DownloadBtn img={appstore} text="Download" />
        </div>
      </div>
      <div className=" col-span-1 col-start-1 row-start-3 border-t border-[#ECECEC] pt-12 md:col-span-5 md:row-start-2 md:py-9">
        <p className=" text-center text-[14px] text-[#75BF7A] md:text-lg ">
          All Rights Reserved tere by Codematics 2023
        </p>
      </div>
    </section>
    // <section className="mt-[320px]  grid h-[510px] w-full  flex-wrap bg-white px-12 md:grid-rows-2">
    //   <div className="row-start-1  border-b border-[#ECECEC] md:grid md:grid-cols-4 lg:grid-cols-5 ">
    //     <div className="flex items-center justify-around w-full col-span-2 col-start-1">
    //       <div>
    //         <img src={blackLogo} alt="" />
    //       </div>
    //       <div>
    //         <h1 className="text-[22px] font-semibold text-[#272042]">Be Our Friend</h1>
    //         <p className="text-[18px] leading-8 text-[#8B8BA5]">
    //           3, Season Park <br />
    //           Jakartasupport@foodyar.co id
    //           <br />
    //           021 - 1111 - 2222
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex items-center justify-center col-span-2 col-start-4 ">
    //       <div className="flex gap-16 ">
    //         <DownloadBtn img={androidstore} text="Download" />
    //         <DownloadBtn img={appstore} text="Download" />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="py-9 ">
    //     <p className="text-center text-[16px] text-[#75BF7A]">
    //       All Rights Reserved tere by Codematics 2023
    //     </p>
    //   </div>
    // </section>
  );
};

export default Footer;
