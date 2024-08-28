const Notice = () => {
  return (
    <div className=" px-24">
      {/* banner section */}
      <div className=" mt-11 ">
        <div className="flex justify-between  border items-center px-2  bg-white shadow-sm ">
          <h1 className=" text-xl font-serif py-2 "> Important Notices </h1>

          <button className=" border-2 border-green-400 px-2 font-bold py-1 text-sm h-8 text-green-600 ">
            {" "}
            Show all
          </button>
        </div>

        {/* filter section */}
        <div className=" flex mt-11 gap-9 ">
          <button>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </button>
          {/* button 2 nb */}
          <button className="  ">
            <label className="input  flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </button>
        </div>
      </div>
      {/* all notice */}
      <div className="mb-11 mt-9     ">
         <h3 className="  text-xl font-serif"> All Notices</h3>

         {/* tabil sectio */}

<div className="overflow-x-auto mt-7">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
        
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">View</td>
        <td className="whitespace-nowrap px-4 py-2">
        Today
        </td>
        <td className="whitespace-nowrap px-4 py-2">
        2.20pm 
        </td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Gary Barlow</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
      
        <td className="whitespace-nowrap px-4 py-2">
        Today   
        </td>
        <td className="whitespace-nowrap px-4 py-2">
        2.20pm 
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700  "> <button className="border">View</button></td>
      </tr>
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
};

export default Notice;
