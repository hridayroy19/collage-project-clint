import React, { useEffect, useState } from "react";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import { MdOutlineFacebook } from "react-icons/md";

const Message = () => {
  const [employees, setEmployees] = useState([]);
//   console.log(employees);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsive = await fetch("/message.json");
        const data = await responsive.json();
        setEmployees(data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div className="px-3 md:px-5 xl:px-24 xl:mb-24 lg:mb-16 mb-5 lg:px-5 ">
      <h1 className=" text-center text-3xl text-green-500 mb-8 font-serif">
        Message
      </h1>
      <div className=" grid lg:grid-cols-3 gap-7 md:grid-cols-2 grid-cols-1 justify-center items-center ">
        {employees?.map((data, id) => (
          <div key={id} className=" px-1 w-full  border-green-600 ">
            <div className="card rounded-md bg-white border-2  xl:w-[350px] lg:w-72 ">
              <figure>
                <img
                  src="https://i.ibb.co.com/tmRS5Lq/premium-photo-1682089789852-e3023ff6df24.jpg"
                  alt="Shoes"
                  className=" w-full object-cover border shadow-2xl"
                />
              </figure>
              <div className="card-body bg-slate-100 text-center">
                <h2 className=" text-2xl font-serif "> {data?.name} </h2>
                <p className=" text-green-500 font-serif"> {data?.status} </p>
                {/* link add  */}
                <div className=" flex justify-center text-3xl items-center gap-7">
                  <button className="  hover:text-green-500 hover:text-4xl  ">
                    <a href={data?.facebook} target="_blank">
                      <MdOutlineFacebook />
                    </a>
                  </button>
                  <button className=" hover:text-green-500 hover:text-4xl  ">
                    <a href={data?.twitter} target="_blank">
                      <IoLogoTwitter />
                    </a>
                  </button>
                  <button className=" hover:text-green-500 hover:text-4xl  ">
                    <a href={data?.linkedIn} target="_blank">
                      <IoLogoLinkedin />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Message;
