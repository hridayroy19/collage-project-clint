const Principal = () => {
  return (
    <div className=" py-10 xl:px-20 lg:px-10 md:px-10 px-5">
      <div className="text-center r">
        <h1 className=" lg:text-3xl text-xl font-serif   mb-2  ">
          Wellcome to Hridoy Roy
        </h1>
        <hr className="lg:w-[350px] md:w-[250px]  mb-7 border-1 border-gray-800 mx-auto" />
      </div>
      {/* card */}
      <div className=" lg:flex justify-center items-end ">
        {/* image */}
        <div className=" lg:mt-20 mb-10">
          <img
            src="https://i.ibb.co/JR1xLNv/Unhelpful-High-School-Teacher-removebg-preview.png"
            className="flex mx-auto items-center w-full object-contain text-center"
            alt=""
          />
        </div>
        {/* text section */}
        <div className=" xl:w-[500px] lg:w-[600px] w-full ">
          <h1 className=" text-center mb-2 text-xl font-serif">
            {" "}
            Dear aptouch community
          </h1>
          <p className="text-xl">
            Lorem ipsum, dolor sit psum dolor sit amet consectetur, adipisicing
            elit. Non doloribus facere, unde et quas error atque in pariatur nam
            sit consequatur dolorum earum dolore possimus iusto doloremque
            optio? Neque, atque Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Earum ad dolores, dignissimos incidunt itaque
            labore optio doloremque ut error explicabo dolore ea, modi, esse
            accusamus autem ex exercitationem dolorem sequi Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Non doloribus facere, unde
            et quas error atque in pariatur nam sit consequatur dolorum earum
            dolore possimus iusto doloremque optio? Neque, atque..
          </p>
          <h3 className=" text-center mt-10 font-mono text-sm"> Hridoy roy</h3>
          <h3 className=" text-center  font-bold text-2xl"> Principale</h3>
        </div>
      </div>

      <div>
        <div className="overflow-x-auto mt-14">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <tbody className="divide-y font-serif divide-gray-200">
              <tr>
                <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                Email: principal@jpi.edu.bd
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Tel: +88042168536
                </td>
                <td className="whitespace-nowrap px-4 py-2">National ID: 8718281381193  </td>
                <td className="whitespace-nowrap px-4 py-2">Skype: Jessore-poly-ins</td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700  ">
                  Dinajpur Setabgonj 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Principal;
