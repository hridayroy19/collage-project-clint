import React from "react";

const Architechar = () => {
  return (
    <div>
      {/* banner section */}
      <div>
        <div className=" mb-10 w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7uc_uF371qCiswLcofPnIQdn_Uxjxorb88KBN0NMMnq_82km7J7Vzy0yXCE55TTyZUEk&usqp=CAU"
            className="w-full h-[45vh] object-cover"
            alt=""
          />
        </div>
      </div>
      {/* text section */}

      <div className=" mb-20 main lg:flex flex-row lg:px-8 md:px-9 px-3 justify-between gap-7 w-full ">
        {/* fast div */}
        <div className=" lg:w-[900px] md:w-[720px] w-full lg:px-2  ">
          <h3 className=" text-4xl font-bold mb-8">
            Diploma In Architecture Engineering Program Objective
          </h3>
          <p className=" text-xl text-black">
            A Diploma in Architecture Engineering is a specialized academic
            program that provides students with foundational knowledge and
            skills in the field of architecture and engineering. This diploma
            program typically focuses on the practical aspects of designing and
            constructing buildings, with an emphasis on both the artistic and
            technical aspects of architecture.
          </p>

          <div className=" mt-6">
            <h1 className=" text-3xl font-bold mb-5">
              Course duration and assessment
            </h1>
            <p className="text-black text-xl ">
              This four-year diploma program in engineering disciplines aims to
              produce competent mid-level managers and supervisors who can carry
              out engineering projects. Students may enroll in this course
              provided they have a certificate of SSC passing. Under the
              Bangladesh Technical Education Board (BTEB), the curriculum and
              academic activities of this course are governed.
            </p>
          </div>
          <div className=" mt-6">
            <h1 className=" text-3xl font-bold mb-5">
              Career of Diploma in Electrical Technology
            </h1>
            <p className="text-black text-xl ">
              There are ample job opportunities for electrical engineers in
              various sectors such as Power Stations, DESA (Dhaka Electric
              Supply Authority), DESCO (Dhaka Electric Supply Company), Rural
              Electrification Board, Gas Fields, Power Grid, LGED (Local
              Government Engineering Department), WASA (Water Supply and
              Sewerage Authority), BTCL (Bangladesh Telecommunications Company
              Limited) as well as in various mobile companies and any industry
              involving electrical engineering. Additionally, there are job
              prospects for electrical engineers in both government and private
              polytechnic institutes as Junior Instructors.
            </p>
          </div>
          {/* Eligibility */}
          <div className=" mt-6">
            <h3 className=" text-3xl font-bold mb-5">
              Eligibility for Admission
            </h3>
            <ul className="text-black text-xl">
              <li>
                Minimum GPA of 2.00 and minimum SSC equivalent in any
                discipline.
              </li>
              <li className=" mt-1 mb-1">
                Science HSC students can enroll directly in the third semester.
              </li>
              <li>
                Vocational HSC students can enroll directly in the fourth
                semester.
              </li>
            </ul>
          </div>
          {/* Admission Requirements */}
          <div className=" mt-6">
            <h3 className="  text-3xl font-bold mb-5">
              Admission Requirements
            </h3>
            <ul className="text-black text-xl">
              <li>3 copies of PP size photos</li>
              <li className=" mt-1 mb-1">Main copy of the SSC transcript</li>
              <li> In addition to the correctly completed admissions form</li>
            </ul>
          </div>
          {/* Lab facilities */}
          <div className=" mt-6">
            <h3 className=" text-3xl font-bold mb-5">Lab facilitie</h3>
            <ul className="text-black text-xl">
              <li>Materials Lab</li>
              <li className=" mt-1 mb-1">Computer Lab</li>
              <li> Construction Lab</li>
              <li>Drawing Lab</li>
            </ul>
          </div>
        </div>
        {/* secton div */}
        <div className=" lg:w-[340px] mt-4  ">
          <div className="  ">
            <h1 className=" text-3xl font-serif">Important link :</h1>
            <div className=" text-xl underline font-serif">
              <p className=" mt-3 mb-3 ">Success Full Store</p>
              <p> Career Counseling</p>
            </div>
          </div>
          {/* open admision  */}
          <div className=" mt-9 flex justify-center items-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/011/746/756/non_2x/admission-open-now-banner-with-megaphone-speaker-vector.jpg"
              className="lg:w-full md:w-[550px] md:h-[420px] object-cover h-[250px] w-full  lg:h-[270px] "
              alt="img"
            />
          </div>
          {/* video< */}

          <div className="mt-5 lg:w-full mx-auto md:w-[550px]  ">
            <div className="relative h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/ti-O-Ewc0oE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div>
            <div className=" group relative mt-6  flex justify-center">
              <a
                href="https://www.facebook.com/aptouch.polytechnic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9np8vnMCJM0vQEQNicf3MWSwi_YAFiJv5g&s"
                  alt="Follow us on Facebook"
                  className="lg:w-[340px] md:w-[550px] md:h-[420px] object-cover h-[250px] w-[380px]  lg:h-[270px]"
                />
              </a>
              <span className="absolute -top-7 left-[50%] text-2xl -translate-x-[50%] z-20 origin-left scale-0 px-2 rounded-lg border border-gray-300 bg-white py-1  font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                Facebook<span></span>
              </span>
            </div>
          </div>
        </div>
        {/* closc */}
      </div>
    </div>
  );
};

export default Architechar;