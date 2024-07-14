import React from "react";
import { GoArrowRight } from "react-icons/go";

const Agreement = () => {
  return (
    <div className="px-3 mb-20 md:px-5 xl:px-20 mt-24 lg:px-7">
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <h3 className="text-2xl md:text-2xl font-thin">
            ANNUAL PERFORMANCE AGREEMENTS <span className="font-bold"> |</span>
          </h3>
          <span className="text-sm flex items-center gap-3 md:text-base">
            VIEW ALL NEWS <GoArrowRight />{" "}
          </span>
        </div>
      </div>
      {/* card div start */}
      {/* main div */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center">
        {/* fast div */}
        <div className=" w-[350px] h-[250px] px-1 shadow-green-300 shadow-lg border-2 ">
          <h2 className=" text-center mb-3 font-semibold text-xl">
            {" "}
            Annual Performance Agreement{" "}
          </h2>
          <div className=" flex gap-4 justify-between">
            {/* image */}
            <div className=" w-[220px]">
              <img
                src="https://i.ibb.co/K069SKt/images-4.png"
                className=" w-full"
                alt=""
              />
            </div>
            <div className="">
              <p>Annual Performance Agreement</p>
              <p> 1st Quarterly Report</p>
              <p>2nd Quarterly Report</p>
              <p>Mid-Term Evaluation</p>
              <p>সংজোযনী-৪ জাতীয় শুদ্ধাচার কর্মপরিকল্পনা</p>
            </div>
          </div>
        </div>
        {/* 2 div */}

        <div className=" w-[350px] h-[250px] px-1  shadow-green-200 shadow-lg border-y-2 border-b-gray-400 border-e-gray-400  g border-2 "></div>
        {/* 3rd */}
        <div className=" w-[350px] h-[250px] px-1 shadow-green-300 shadow-lg border-2 "></div>
      </div>
    </div>
  );
};

export default Agreement;
