import React from "react";
import CountUp from "react-countup";

const UniversityCounter = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="relative w-full bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/ZdGbkm1/university-6699377-1280.jpg)",
        }}
      >
        <div className="flex items-center justify-center h-full py-8 md:py-16">
          <div className=" p-4 md:p-8 rounded-lg  w-full max-w-6xl">
            <div className="grid gap-8 justify-center xl:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center text-black font-extrabold text-center">
              <div className="flex flex-col items-center border  bg-[#016c1877] py-3 text-white">
                <div className="w-24  border rounded-full mb-2 overflow-hidden">
                  <img
                    src="https://i.ibb.co/QFDVYGr/images-removebg-preview.png"
                    alt="Founded"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xl font-serif  md:text-2xl">
                  + <CountUp end={506} duration={5} />
                  <h4 className="mt-2">Founded</h4>
                </div>
              </div>
              <div className="flex flex-col items-center  border  bg-[#016c1877] py-3 text-white">
                <div className="w-24  border rounded-full mb-2 overflow-hidden">
                  <img
                    src="https://i.ibb.co/0MGRVj8/images-1-removebg-preview.png"
                    alt="Faculty Members"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xl md:text-2xl">
                  + <CountUp end={2000} duration={5} />
                  <h4 className="mt-2">Faculty Members</h4>
                </div>
              </div>
              <div className="flex flex-col items-center  border  bg-[#016c1877] py-3 text-white">
                <div className="w-24  border rounded-full mb-2 overflow-hidden">
                  <img
                    src="https://i.ibb.co/s9qwSDj/images-2-removebg-preview.png"
                    alt="Regular Students"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xl md:text-2xl">
                  + <CountUp end={37000} duration={5} />
                  <h4 className="mt-2">Regular Students</h4>
                </div>
              </div>
              <div className="flex flex-col items-center  border  bg-[#016c1877] py-3 text-white">
                <div className="w-24  border rounded-full mb-2 overflow-hidden">
                  <img
                    src="https://i.ibb.co/s9qwSDj/images-2-removebg-preview.png"
                    alt="Colleges"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xl md:text-2xl">
                  + <CountUp end={506} duration={5} />
                  <h4 className="mt-2">Constituent</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityCounter;
