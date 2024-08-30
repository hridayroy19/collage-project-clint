import React from "react";

const Electrical = () => {
  return (
    <div>
      {/* banner section */}
      <div>
        <div className=" mb-10 w-full">
          <img
            src="https://media.istockphoto.com/id/1340413200/photo/aerial-view-of-a-high-voltage-substation.jpg?s=612x612&w=0&k=20&c=Nat7fUcivRPMID1-CowPHC7o-D_2R3E-8Tb2K9qf_14="
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
            Diploma In Electrical Engineering Program Objective
          </h3>
          <p className=" text-xl text-black">
            Since the discovery of electricity by scientist Volta, the journey
            of modern civilization essentially began. Life without electricity
            is stagnant and the world remains inert without Electrical
            Technology. Our agriculture-dependent and industrial-based economy
            is now fully reliant on electricity. From heavy industries to small
            cottage industries and rural agricultural tools, everything is still
            controlled by electricity. To sustain the current civilization with
            all modern tools, the entire field of Medical Science, including all
            its instruments, is powered by electricity. All tools of
            civilization are meaningless without Electrical Technology.
            Therefore, it can be said that the importance of electricity in
            civilization is unparalleled and its significance will endure
            indefinitely. As a result, the demand for Electrical Technology is
            steadily increasing.
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
            {/* <ul className="text-black text-xl">
              <li>Wonkshop I (Foundry and Welding) Lab</li>
              <li className=" mt-1 mb-1">
                Workshop II (Lathe, Drilling & Shaping) Lab
              </li>
              <li> Workshop III (Special Machines)</li>
              <li>CNC M/C Lab</li>
              <li>Automation & Process Control Lab</li>
            </ul> */}
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

export default Electrical;
