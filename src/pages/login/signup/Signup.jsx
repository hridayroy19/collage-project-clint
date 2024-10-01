import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Signup = () => {
  return (
    <div className="font-serif">
      <div className="bg-[#120a35e8] lg:h-screen md:h-screen flex justify-center items-center">
        <div className="w-full lg:w-[800px] md:w-[700px] lg:h-[400px] shadow-2xl bg-[#10041681] flex flex-col lg:flex-row md:flex-row justify-center items-center">
          {/* Image Section */}
          <div className="w-full lg:w-[400px] flex justify-center lg:justify-start">
            <img
              src="/public/log.png"
              className="w-[300px] md:w-full lg:w-[400px] md:border-e-2 h-auto object-contain"
              alt=""
              s
            />
          </div>
          {/* Form Section */}
          <div className="w-full lg:w-[400px] px-6">
            <h1 className="text-green-500 lg:mt-14 mt-6 text-center font-extralight font-serif text-3xl">
              Welcome back
            </h1>
            {/* from */}
{/* 
            <div className="w-full mx-auto">
              <form className="card-body">
                <div>
                  <label className="input input-bordered flex items-center gap-2">
                    <MdOutlineMarkEmailUnread className=" text-xl" />
                    <input
                      type="text"
                      className="grow"
                      placeholder="Email Addrese "
                    />
                  </label>
                </div>

                <div className=" mt-3">
                  <label className="input input-bordered flex items-center gap-2">
                    <RiLockPasswordLine className=" text-xl" />
                    <input
                      type="text"
                      className="grow"
                      placeholder="Password "
                    />
                  </label>
                </div>

                <p className="text-green-500 mt-2">Forgot Password?</p>

                <button className="bg-green-500 border-none btn btn-block mt-3">
                  Login Now
                </button>

                <h1 className="text-white py-1 mt-2 ">
                  Don't have an account?
                  <span className="ml-2 text-green-500">Signup</span>
                </h1>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
