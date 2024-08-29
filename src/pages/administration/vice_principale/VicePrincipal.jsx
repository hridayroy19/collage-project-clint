const VicePrincipal = () => {
  return (
    <div className=" py-10 xl:px-20 mb-14 lg:px-10 md:px-10 px-5">
      <h3 className=" text-2xl text-green-500 font-serif mb-14 text-center">
        {" "}
        Vice Principal
      </h3>
      <div className=" lg:flex md:flex gap-10 items-start  ">
        <div>
          <img
            src="https://i.ibb.co/9TTqD1P/premium-photo-1682089789852-e3023ff6df24.jpg"
            alt="log"
            className=" w-[400px] object-contain  "
          />
        </div>
        <div className="font-serif">
          <h2 className=" text-3xl mt-2 font-serif"> Shaipollobi Bormon </h2>
          <p className=" mt-5 mb-2">PIMS ID: 77013904028</p>
          <p>BCS Cadre ID:</p>
          <p className=" mt-3 mb-2">National ID: 7786362835</p>
          <p>Email: viceprincipal@api.edu.bd</p>
          <p className=" mt-3 mb-2">Address : Dinajpur PTI Mor</p>
        </div>
      </div>
    </div>
  );
};

export default VicePrincipal;
