import Lottie from "react-lottie";
import animation from "../../../public/Computer.json";

const Result = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const lottieContainerStyle = {
    transform: "rotate(0deg)",
  };

  return (
    <div className="  xl:px-20 lg:px-8 mt-5 px-2">
      <div className="  lg:flex md:flex flex-row  px-4 justify-between text-clip items-center ">
        {/* banner */}

        <div
          className="w-[300px] lg:w-[340px] xl:w-[450px] md:w-[680px] h-[280px] lg:h-[400px] mt-8 lg-mt-0"
          style={lottieContainerStyle}
        >
          <Lottie options={defaultOptions} />
        </div>
        {/* result from */}
        <div className=" w-full lg:w-[400px] py-4   ">
          <h2 className=" text-4xl text-center mb-4 font-bold">
            Individual Results
          </h2>
          <div className=" rounded-lg bg-slate-100 shadow-md mt-5 px-7 py-6">
            <select className="select  border-none select-info w-full max-w-xs">
              <option defaultValue={"diploma"}>Diploma in Engineering</option>
              <option>Diploma in Textail Engineering</option>
              <option>Diploma in Ecomarce</option>
            </select>
            {/* year */}
            <select className="select border-none mt-4 mb-3 select-info w-full max-w-xs">
              <option defaultValue={"year"}> 2020</option>
              <option>2016</option>
              <option>2010</option>
            </select>
            <input
              type="text"
              placeholder="Type here"
              className="input  border-none     input-bordered w-full max-w-xs"
            />
            {/* button */}
            <button className="btn mt-4 bg-green-500 text-white font-bold w-full max-w-xs ">
              Wiew Result
            </button>
          </div>
        </div>
      </div>

      {/* result about */}
      <div className=" grid px-4  mb-14 items-start  justify-between lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ">
        <div className=" w-full mt-5  lg:w-[67%]  ">
          <h3 className=" text-2xl font-medium mb-3">
            Individual's Results (Explained)
          </h3>
          <p className=" text-xl mb-6">
            Individual result in this app refers to all the semester results of
            a single diploma/polytechnic student published by the Bangladesh
            Technical Education Board(BTEB)
          </p>
          <h3 className="text-2xl font-medium mb-3">Roll Number</h3>
          <p className=" text-xl mb-6">
            The roll number is the 6-digit number on your admit card or
            registration card.
          </p>
        </div>

        <div className=" w-full flex justify-end">
          <div className=" lg:w-[440px] w-full   ">
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

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
