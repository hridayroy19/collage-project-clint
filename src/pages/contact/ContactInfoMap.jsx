import { BsBrowserChrome } from "react-icons/bs";
import { FaAddressBook, FaPhone } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

const ContactInfoMap = () => {
  return (
    <div className="px-4 py-6 md:px-10 md:py-9">
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-3">
        {/* First div */}
        <div className=" px-6 py-4 md:px-11 md:py-6 flex flex-col gap-6">
          <div className="flex gap-3 items-start">
            <FaPhone className="text-xl md:text-2xl" />
            <span className="text-lg md:text-xl font-serif">
              Phone <br /> 01738211936
            </span>
          </div>
          <div className="flex gap-3 items-start">
            <FaMessage className="text-xl md:text-2xl" />
            <span className="text-lg md:text-xl font-serif">
              Email <br /> hrhridoyroy@503gmail.com
            </span>
          </div>
          <div className="flex gap-3 items-start">
            <FaAddressBook className="text-xl md:text-2xl" />
            <span className="text-lg md:text-xl font-serif">
              Location <br /> Aptouch Polytechinc Institute Dinajpur
            </span>
          </div>
        </div>
        {/* Second div */}
        <div className="w-full md:w-auto">
          <iframe
            title="Google Map"
            className="w-full h-64 md:w-96 md:h-80"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49930502198!2d90.25487485406437!3d23.78106723744625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1706007859703!5m2!1sen!2sbd"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoMap;
