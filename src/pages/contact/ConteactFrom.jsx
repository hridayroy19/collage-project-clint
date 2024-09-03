const ConteactFrom = () => {
  return (

       <div className="w-full font-serif shrink-0 ">
      <form className="card-body">
      <h1 className=" text-center py-1 text-2xl"> Conteact Us</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Name </span>
          </label>
          <input type="email" placeholder="Enter your Name" className="  py-2 border border-gray-400 px-4 " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="password" placeholder="Enter your Email" className="  py-2 border border-gray-400 px-4 "  required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea className="   py-2 border border-gray-400 px-4 "  placeholder="Enter your Message"></textarea>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary"> Submit </button>
        </div>
      </form>
    </div>

  );
};

export default ConteactFrom;
