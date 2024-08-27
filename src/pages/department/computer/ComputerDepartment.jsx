import React from "react";

const ComputerDepartment = () => {
  return (
    <div>
      {/* banner section */}
      <div>
        <div className=" mb-10 w-full">
          <img
            src="https://i.ibb.co/SJL7jVH/computing-banner-1500x430.jpg"
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
           
            Diploma In Computer Science Engineering Program Objective
          </h3>
          <p className=" text-xl text-black">
            The Department of Computer science and technology was established in
            2002. In important fields of computer science, the department is a
            leading academic hub for advanced research and breakthroughs. This
            has been made possible by highly skilled, experienced, and driven
            faculty who use unique and new teaching strategies to transmit to
            students the ideal balance of academic and practical knowledge. The
            Department makes sure to produce engineers in computers who have a
            strong interest in solving problems, who are adaptable and
            productive at work, and who make significant contributions to the
            field’s advancements.
          </p>
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
              <li>Software lab</li>
              <li className=" mt-1 mb-1">Hardware lab</li>
              <li> PLC lab</li>
              <li>Networking lab</li>
              <li>Electrical Machine lab</li>
              <li>Industrial Electronics Lab</li>
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

export default ComputerDepartment;
