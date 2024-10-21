const VicePrincipal = () => {
  return (
    <div className=" py-10 xl:px-20 mb-14 lg:px-10 md:px-10 px-5">
      <h3 className=" text-2xl text-green-500 font-serif mb-14 text-center">
        {" "}
        Vice Principal
      </h3>
      <div className=" lg:flex md:flex justify-center gap-10 items-start  ">
        <div className=" border-2 px-1 py-1">
          <img
            src="https://i.ibb.co.com/5n0bT9h/48b22b23787b02f0a82df4920f07728a-removebg-preview.png"
            alt="log"
            className=" w-[330px] h-[230px] object-contain  "
          />
        </div>
        <div className="font-serif">
          <h2 className=" text-3xl mt-2 font-serif"> NEROJA SHAPLA </h2>
          <p className=" mt-5 mb-2">
            Educational qualification: Diploma in Engineering <br />(
            Architecture & Interior Disign Engineering)
          </p>
          <p>Phone: 01716872865</p>
          <p className=" mt-3 mb-2">National ID:4153332285</p>
          <p>Email: shapla78@gmail.com</p>
          <p className=" mt-3 mb-2">Address : Bahadubazar, sadar dinajpur</p>
        </div>
      </div>
    </div>
  );
};

export default VicePrincipal;
