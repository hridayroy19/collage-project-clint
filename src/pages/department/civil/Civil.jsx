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

      <div className=" mb-20 main lg:flex flex-row lg:px-12 md:px-9 px-3 justify-between gap-7 w-full ">
        {/* fast div */}
        <div className=" lg:w-[900px] md:w-[720px] w-full  ">
          <h3 className=" text-4xl font-bold mb-8">
           
            Diploma In Civil Engineering Program Objective
          </h3>
          <p className=" text-xl text-black">
          Civil Engineering is the oldest and broadest of the traditional engineering professions. Civil engineers build the world’s infrastructure. In doing so, they quietly shape the history of nations around the world. Most people cannot imagine life without the many contributions of civil engineers to the public’s health, safety and standard of living. It is devoted to the improvement of the human Environment for the purposes of making our activities productive, safe, and enjoyable, while providing aesthetically pleasing surroundings. The civil engineer plans, designs, constructs and maintains physical works and facilities that are deemed essential to modern life. Civil engineering focuses on the infrastructure of the world which include Water works, Sewers, Dams, Power Plants, Transmission Towers/Lines, Railroads, Highways, Bridges, Tunnels, Irrigation Canals, River Navigation, Shipping Canals, Traffic Control, Mass Transit, Airport Runways, Terminals,
          </p>

          <div className=" mt-6">
            <h1 className=" text-3xl font-bold mb-5">Course duration and assessment</h1>
            <p className="text-black text-xl ">
            A semester is of 16 weeks duration, there are two semesters in a year and duration of the program is four years. Diploma program consisting of 8 semester (1 semester= 6 months). The Bangladesh Technical Education Board is a state regulatory board responsible for monitoring and developing technical and vocational education. All the final exam and practical are conducted under the supervision of BTEB.
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
        <div className=" lg:w-[350px] mt-4 border ">
          <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-56 w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>

              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Civil;
