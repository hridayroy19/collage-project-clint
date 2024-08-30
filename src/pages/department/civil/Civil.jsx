import React from "react";

const Civil = () => {
  return (
    <div>
      {/* banner section */}
      <div>
        <div className=" mb-10 w-full">
          <img
            src="https://images.ctfassets.net/8bbwomjfix8m/3khjUHELqiZJVgdkpXSAZf/17faf9504845ad605296527fa90d8993/civil.jpg?fit=fill&w=1440&h=400&q=80&fm=jpg"
            className="w-full h-[45vh] object-cover"
            alt=""
          />
        </div>
      </div>
      {/* text section */}

      <div className=" mb-20 main lg:flex flex-row lg:px-8 md:px-9 px-3 justify-between gap-7 w-full ">
        {/* fast div */}
        <div className=" lg:w-[900px] md:w-[720px] lg:px-2 w-full  ">
          <h3 className=" text-4xl font-bold mb-8">
            Diploma In Civil Engineering Program Objective
          </h3>
          <p className=" text-xl text-black">
            Civil Engineering is the oldest and broadest of the traditional
            engineering professions. Civil engineers build the world’s
            infrastructure. In doing so, they quietly shape the history of
            nations around the world. Most people cannot imagine life without
            the many contributions of civil engineers to the public’s health,
            safety and standard of living. It is devoted to the improvement of
            the human Environment for the purposes of making our activities
            productive, safe, and enjoyable, while providing aesthetically
            pleasing surroundings. The civil engineer plans, designs, constructs
            and maintains physical works and facilities that are deemed
            essential to modern life. Civil engineering focuses on the
            infrastructure of the world which include Water works, Sewers, Dams,
            Power Plants, Transmission Towers/Lines, Railroads, Highways,
            Bridges, Tunnels, Irrigation Canals, River Navigation, Shipping
            Canals, Traffic Control, Mass Transit, Airport Runways, Terminals,
          </p>

          <div className=" mt-6">
            <h1 className=" text-3xl font-bold mb-5">
              Course duration and assessment
            </h1>
            <p className="text-black text-xl ">
              A semester is of 16 weeks duration, there are two semesters in a
              year and duration of the program is four years. Diploma program
              consisting of 8 semester (1 semester= 6 months). The Bangladesh
              Technical Education Board is a state regulatory board responsible
              for monitoring and developing technical and vocational education.
              All the final exam and practical are conducted under the
              supervision of BTEB.
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
              <li className=" mt-1 mb-1">Geotechnical Lab</li>
              <li> Computer Lab</li>
              <li>Construction Lab</li>
              <li>Surveying Labb</li>
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

export default Civil;
