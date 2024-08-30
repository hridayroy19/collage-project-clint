import React from "react";

const Mechanical = () => {
  return (
    <div>
      {/* banner section */}
      <div>
        <div className=" mb-10 w-full">
          <img
            src="https://img.pikbest.com/backgrounds/20200412/mechanical-metal-gear-technology-banner-background_1909838.jpg!w700wp"
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
            Diploma In Mechanical Engineering Program Objective
          </h3>
          <p className=" text-xl text-black">
            Mechanical technology refers to machine technique. Again machinery
            means any machine or with the help of which any vehicle is operated.
            All the production oriented factories are being run with the help of
            machines. Mechanical engineering has been the holder of modern
            developments since the dawn of human civilization. A competent
            mechanical engineer is created through theoretical and practical
            classes as all the practical materials in this institution are
            sufficient in this technology. There are golden opportunities for
            self-employment and higher education along with jobs in government,
            private, autonomous institutions and various industries. Students of
            this department, located in an academic environment, develop as
            skilled engineers under the careful care of dedicated teachers.
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
              Career of Diploma in Mechanical Technology
            </h1>
            <p className="text-black text-xl ">
              Mechanical engineers design power-producing machines, such as
              electric generators, internal combustion engines, and steam and
              gas turbines, as well as power-using machines, such as
              refrigeration and air-conditioning systems. Mechanical engineers
              design other machines inside buildings, such as elevators and
              escalators. A student studying for four years Diploma in
              Engineering. 1. Powerplants. 2. Mills. 3. Gasfield. 4.
              Shipbuilding industry. 5. Petroleum products (lube oil, petrol,
              diesel). 6. In utility and maintenance department of any industry.
              7. Automobile. 8. In various cement industries. 9. Fertilizer
              factory. 10. Railways. 11. Airplane. 12. Renewable energy. 13. In
              generator/captive power etc.
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
              <li>Wonkshop I (Foundry and Welding) Lab</li>
              <li className=" mt-1 mb-1">
                Workshop II (Lathe, Drilling & Shaping) Lab
              </li>
              <li> Workshop III (Special Machines)</li>
              <li>CNC M/C Lab</li>
              <li>Automation & Process Control Lab</li>
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

export default Mechanical;
