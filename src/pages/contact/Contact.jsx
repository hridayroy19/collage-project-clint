import ContactInfoMap from "./ContactInfoMap";
import ConteactFrom from "./ConteactFrom";


const Contact = () => {
  return (
    <div className="mb-16 ">
      {/* banner section */}
    <div className="  ">
    <div className="relative mt-5 border-2 w-full">
        <img
          src="https://i.ibb.co/vYrCSyD/contact-logo-275-5160.webp"
          alt=""
          className="w-full h-[50vh] object-cover"
        />
      </div>
      {/* text section */}
      <div className="absolute bg-white p-4 shadow-white shadow-2xl xl:top-[60%]  md:top-[80%] top-[500px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col md:flex-row bg-base-100 gap-4 w-full ">
          <div className="w-full xl:w-[300px] md:w-[380px] lg:w-[350px] ">
            <img
              src="https://i.ibb.co/jknmLW6/istockphoto-1341346982-170667a.webp"
              alt="Album"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-2 py-1 xl:w-[500px] w-[320px] md:w-[90%] lg:w-[400px]">
            <h2 className="text-xl md:text-2xl mb-1">Leave Us A Message</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <ConteactFrom/>
          </div>
        </div>
        
      </div>
    </div>
      <div className=" md:px-9 xl:mt-72 md:mt-80 mt-[600px]">
      <ContactInfoMap/>
      </div>
    </div>
  );
};

export default Contact;
