import { FaLocationArrow, FaPhone } from "react-icons/fa";
import ConteactFrom from "./ConteactFrom";
import { FaLocationDot, FaMailchimp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import ContactInfoMap from "./ContactInfoMap";

const Contact = () => {
  return (
    <div className="mb-16   ">
      {/* banner section */}
      <div className=" w-full  ">
        <div className="relative  w-full">
          <img
            src="https://i.ibb.co/qmPsM7g/fdfdd-min1.png"
            alt=""
            className="w-full h-[50vh] object-cover"
          />
        </div>
        {/* text section */}
        <div className="absolute xl:top-[90%]  lg:top-[550px] md:top-[500px] top-[800px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col md:flex-row bg-base-100 gap-4 items-start w-full ">
            <div className=" xl:w-[400px] w-[370px] px-2 md:w-[380px] lg:w-[400px] ">
              <div className=" py-7  px-12">
                <h1 className="text-2xl mb-14"> Contact Deltails</h1>
                <div>
                  <h4 className="flex items-center gap-4 text-2xl">
                    <FaPhone /> Call Us
                  </h4>
                  <p>0428 543 978</p>
                </div>
                <div>
                  <h4 className="flex mt-10 items-center gap-4 text-2xl">
                    <FaLocationDot /> Location
                  </h4>
                  <p>87 Howe Street, Osborne Park WA 6017</p>
                </div>
                <div>
                  <h4 className="flex mt-10 items-center gap-4 text-2xl">
                    <MdOutlineEmail /> Email
                  </h4>
                  <p>87 Howe Street, Osborne Park WA 6017</p>
                </div>
              </div>
            </div>
            <div className=" -top-32 bg-red-50 px-5 w-[370px] border xl:w-[500px] md:w-[70%] lg:w-[450px]">
              <ConteactFrom />
            </div>
          </div>
        </div>
      </div>
      <div className=" xl:pt-[430px] lg:pt-[480px]  md:pt-[400px] pt-[900px]  lg:px-20 md:px-8 px-2">
        <ContactInfoMap />
      </div>
    </div>
  );
};

export default Contact;
