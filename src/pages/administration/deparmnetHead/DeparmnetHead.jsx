import React from "react";

const DeparmnetHead = () => {
  return (
    <div className="py-24 lg:px-20 px-6">
  
  <div>
  <div className="relative w-[320px] h-[350px] shadow-lg shadow-blue-400 border overflow-hidden">
        {/* Profile Section */}
        <div className="avatar flex justify-center mt-11">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Profile" />
          </div>
        </div>
        {/* Info Section */}
        <div className="text-center mt-5 mb-2">
          <h2 className="text-xl font-serif">Hridoy Chandra Roy</h2>
          <h3 className="text-sm">hrhridoyroy503@gmail.com</h3>
          {/* Role */}
          <div className="mt-4">
            <div className="border w-[90%] px-2 flex mx-auto py-1 bg-fuchsia-100">
              <h1 className="font-serif">Role : Deparment Head Expt : 3 year</h1>
            </div>
            <p>Salary: $25,000</p>
          </div>
        </div>
        {/* Wave Section */}
        <div className="absolute bottom-0 left-0 top-72 w-full h-[100px]">
          <svg
            className="absolute bottom-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="5 10  1200 320 "
          >
            <path
              fill="#007BFF"
              fillOpacity="1"
              d="M0,224L48,186.7C96,149,192,75,288,42.7C384,11,480,21,576,48C672,75,768,117,864,128C960,139,1056,117,1152,133.3C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      {/* Department Section */}
      <div className="w-[115px] shadow-lg border left-0 right-0 ml-[79px] top-28 absolute">
        <h3 className="text-black py-1 px-4 bg-green-600 font-serif">Computer</h3>
      </div>
  </div>
    </div>
  );
};

export default DeparmnetHead;


