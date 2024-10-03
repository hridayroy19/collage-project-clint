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
    <div className="px-3 font-sans md:px-5 xl:px-24 xl:mb-24 lg:mb-16 mb-5 lg:px-5 ">
      <div className="rounded-xl   shadow-xl border p-4  mb-5  py-2 px-3 ">
        <div className=" flex lg:flex-row md:flex-row flex-col-reverse  px-2 justify-between  items-start">
          <div className=" lg:py-10 py-4 md:px-3 lg:w-[65%] md:w-[70%] w-full  ">
            <h2 className=" text-2xl mb-3"> Message Form the Vice Principal</h2>
            <p className=" mb-3"> Aptouch Polytechinc Institute</p>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              accusamus inventore, optio ad aliquid in sit expedita. Nesciunt
              vitae voluptates architecto minus maxime odit voluptas quaerat
              iste, qui quos cum. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Praesentium nulla, amet impedit exercitationem,
              eum aspernatur in velit deserunt qui explicabo ea id corporis non
              inventore aliquam eligendi voluptatem consectetur sunt. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Veniam
              exercitationem deleniti iusto corrupti dicta sed officia quibusdam
            </p>
          </div>
          <div className=" px-2 py-2 ">
            <img
              src="https://i.ibb.co.com/rFSYnXb/20230409234326-IMG-7354-removebg-removebg-preview.png"
              className="  lg:w-[230px] w-[310px] flex mx-auto justify-center items-center shadow-xl "
              alt=""
            />
            <h1 className=" font-serif mt-3 text-center mb-1">
              Professor Niaz Ahmed Khan
            </h1>
            <h3 className=" font-serif text-center ">Vice Chancellor</h3>
          </div>
        </div>
      </div>
{/* 
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
                {/* <div className=" flex justify-center text-3xl items-center gap-7">
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
      </div> */}

     
    </div>
  );
};

export default Message;
