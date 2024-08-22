const ConteactFrom = () => {
  return (
    <div className=" w-full ">
      <div className=" w-full shrink-0 ">
        <form className="">
          {/* name email main div */}
          <div className=" mt-7 grid grid-cols-2 gap-2">
            <div className="form-control">
              <label className="label"></label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div> 
            <div className="form-control">
              <label className="label"></label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* name email main div */}

          <div className="form-control">
            <label className="label"></label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label"></label>
            <textarea
              placeholder="Bio"
              className="textarea textarea-bordered textarea-md w-full max-w-xs"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn ">Submite Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConteactFrom;
