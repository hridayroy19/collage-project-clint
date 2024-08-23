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

       <div className=" mb-20 main flex px-12 justify-between gap-7 w-full ">
{/* fast div */}
        <div className=" w-[900px] border ">
            <h3 className=" text-4xl font-thin mb-8"> Diploma In Computer Science Engineering Program Objective</h3>
            <p className=" text-xl">
            The Department of Computer science and technology was established in 2002. In important fields of computer science, the department is a leading academic hub for advanced research and breakthroughs. This has been made possible by highly skilled, experienced, and driven faculty who use unique and new teaching strategies to transmit to students the ideal balance of academic and practical knowledge. The Department makes sure to produce engineers in computers who have a strong interest in solving problems, who are adaptable and productive at work, and who make significant contributions to the field’s advancements.
            </p>
            {/* Eligibility */}
            <div className=" mt-6">
                <h3 className=" text-3xl mb-4">Eligibility for Admission</h3>
                <ul>
                <li> Minimum GPA of 2.00 and minimum SSC equivalent in any discipline.
                </li>
                <li className=" mt-2 mb-2">Science HSC students can enroll directly in the third semester.
                </li>
                <li>Vocational HSC students can enroll directly in the fourth semester.
                </li>
                </ul>
            </div>
            {/* Admission Requirements */}
            <div className=" mt-6">
                <h3 className=" text-3xl mb-4">Admission Requirements
                </h3>
                <ul>
                <li>3 copies of PP size photos

                </li>
                <li className=" mt-2 mb-2">Main copy of the SSC transcript

                </li>
                <li> In addition to the correctly completed admissions form

                </li>
                </ul>
            </div>
            {/* Lab facilities */}
            <div className=" mt-6">
                <h3 className=" text-3xl mb-4">Lab facilitie
                </h3>
                <ul>
                <li>Software lab

                </li>
                <li className=" mt-2 mb-2">Hardware lab


                </li>
                <li> PLC lab


                </li>
                </ul>
            </div>

        </div>
        {/* secton div */}
        <div className=" w-[300px] border ">
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed molestiae a sapiente, minima laudantium at quam ab ut odit id earum esse ipsam eligendi aperiam, quibusdam aut, libero accusantium.</p>
        </div>

       </div>

    </div>
  );
};

export default ComputerDepartment;
