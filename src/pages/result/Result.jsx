

const Result = () => {
    return (
        <div className=" mt-10 py-20 xl:px-20 lg:px-8 px-4">
            <div className=" lg:flex md:flex flex-row  px-4 justify-between items-start ">
{/* banner */}
<div className=" lg:w-[400px] md:w-[900px] w-full ">
    <img src="https://i.ibb.co/NprMHYm/4081337.webp" className=" w-full" alt="" />
</div>
{/* result from */}
<div className=" lg:w-[400px] py-4   ">
    <h2 className=" text-4xl text-center  font-bold">
    Individual Results
    </h2>
    <div className=" rounded-lg bg-slate-100 shadow-md mt-5 px-7 py-6">
    <select className="select select-info w-full max-w-xs">
  <option disabled selected>Select language</option>
  <option>English</option>
  <option>Japanese</option>
  <option>Italian</option>
</select>
{/* year */}
<select className="select mt-4 mb-3 select-info w-full max-w-xs">
  <option disabled selected>Select language</option>
  <option>English</option>
  <option>Japanese</option>
  <option>Italian</option>
</select>
<input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
{/* button */}
<button className="btn mt-4 bg-blue-600 text-white font-bold w-full max-w-xs ">Wiew Result</button>
    </div>
</div>
            </div>

            {/* result about */}
            <div className=" w-[67%] mt-9 ">
                <h3 className=" text-2xl font-medium mb-3">Individual's Results (Explained)</h3>
                <p className=" text-xl mb-6">Individual result in this app refers to all the semester results of a single diploma/polytechnic student published by the Bangladesh Technical Education Board(BTEB)</p>
                <h3 className="text-2xl font-medium mb-3">Roll Number</h3>
                <p className=" text-xl mb-6">The roll number is the 6-digit number on your admit card or registration card.</p>
            </div>
        </div>
    );
};

export default Result;