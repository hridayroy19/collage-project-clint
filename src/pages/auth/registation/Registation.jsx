import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Lottie from "react-lottie";
import okay from "../../../../public/Computer.json";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BiCircle } from "react-icons/bi";

const Registation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: okay,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // validation state

  const [lowercase, setLowercase] = useState(false);
  const [lowerUpperAndLength, setLowerUpperAndLength] = useState(false);
  const [numberAndSpecial, setNumberAndSpecial] = useState(false);

  const handelChange = (value) => {
    // regex
    const lower = new RegExp("(?=.*[a-z])(?=.*[A-Z])");
    const lowerUpperAndLength = new RegExp("^(?=.*[a-z])(?=.*[A-Z]).{8,}$");
    const numberAndSpecial = new RegExp("(?=.*[0-9])(?=.*[!@#$%&*?/])");

    if (lower.test(value)) {
      setLowercase(true);
    } else {
      setLowercase(false);
    }
    // number spical
    if (numberAndSpecial.test(value)) {
      setNumberAndSpecial(true);
    } else {
      setNumberAndSpecial(false);
    }
    // 8 cartectar
    if (lowerUpperAndLength.test(value)) {
      setLowerUpperAndLength(true);
    } else {
      setLowerUpperAndLength(false);
    }
  };

  return (
    <div className="font-serif">
      <div className="bg-[#120a35e8] lg:h-screen md:h-screen flex justify-center items-center">
        <div className="w-full lg:w-[750px] xl:w-[800px] xl:h-[500px] md:w-full lg:h-full shadow-2xl bg-[#10041681] flex flex-col lg:flex-row md:flex-row justify-center items-center">
          {/* Image Section */}
          <div className="w-[300px] lg:w-[400px] md:border-e-2 flex justify-center lg:justify-start">
            <Lottie options={defaultOptions} width={400} height={400} />
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-[400px] px-1">
            <h1 className="text-green-500 lg:mt-14 mt-5 text-center font-extralight font-serif text-2xl">
              Create Account
            </h1>

            {/* Form Section */}
            <div className="w-full mx-auto">
              <form className="card-body">
                <div>
                  <label className="input input-bordered flex items-center gap-2">
                    <CiUser className="text-xl" />
                    <input
                      type="text"
                      className="grow"
                      placeholder="Enter Your Name"
                      required
                    />
                  </label>
                </div>
                <div className="mt-1">
                  <label className="input input-bordered flex items-center gap-2">
                    <MdOutlineMarkEmailUnread className="text-xl" />
                    <input
                      type="email"
                      className="grow"
                      placeholder="Email Address"
                      required
                    />
                  </label>
                </div>

                <div className="mt-1">
                  <label className="input input-bordered flex items-center gap-2">
                    <RiLockPasswordLine className="text-xl" />
                    <input
                      type="password"
                      className="grow"
                      placeholder="Password"
                      required
                      onChange={(e) => handelChange(e.target.value)}
                    />
                  </label>
                  {/* Password Strength Message */}
                  <div className="mt-2 bg-[#2f177234] px-2 py-2 font-thin text-white text-sm">
                    <p>Password must contain:</p>
                    <div className=" flex items-center gap-1">
                      {lowerUpperAndLength ? (
                        <span>
                          <AiOutlineCheck className="text-green-600 border-green-600 border rounded-lg text-xs" />{" "}
                        </span>
                      ) : (
                        <span>
                          <BiCircle className="text-green-600  text-xs" />{" "}
                        </span>
                      )}
                      At least 8 characters
                    </div>
                    <div className=" flex items-center gap-1">
                      {lowercase ? (
                        <span>
                          <AiOutlineCheck className="text-green-600 border-green-600 border rounded-lg text-xs" />{" "}
                        </span>
                      ) : (
                        <span>
                          <BiCircle className="text-green-600  text-xs" />{" "}
                        </span>
                      )}
                      A mix of uppercase and lowercase letters
                    </div>

                    <div className=" flex items-center gap-1">
                      {numberAndSpecial ? (
                        <span>
                          <AiOutlineCheck className="text-green-600 border-green-600 border rounded-lg text-xs" />{" "}
                        </span>
                      ) : (
                        <span>
                          <BiCircle className="text-green-600  text-xs" />{" "}
                        </span>
                      )}
                      A number or special character
                    </div>
                  </div>
                </div>

                <button className="bg-green-500 border-none btn btn-block mt-1">
                  Create Account
                </button>

                <h1 className="text-white mb-2 mt-2 ">
                  Already have an account?
                  <span className="ml-2 text-green-500">
                    <Link to={"/admin"}>Login</Link>
                  </span>
                </h1>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registation;
