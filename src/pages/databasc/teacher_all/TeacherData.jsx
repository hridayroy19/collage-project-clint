import React from 'react';

const TeacherData = () => {
    return (
        <div className=" mb-16 py-10 ">
      <div>
        <h1 className=" text-2xl font-serif">First Semester Student list</h1>
        {/* seacrch */}
        <div className=" mt-5 flex items-center gap-4 justify-between">
          {/* show all button */}
          <div className=" flex items-center gap-2">
            <h1 className=" lg:text-xl">show :</h1>
            <select className=" py-1 border-black border w-[80px] ">
              <option defaultValue={"25"}>25</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
          <div>
            {/* search */}
            <div className=" flex items-center gap-3">
              <h3> Search: </h3>
              <label className=" border">
                <input
                  type="text"
                  className=" lg:w-[150px] w-[100px] px-4 py-2 rounded-md"
                  placeholder="Search"
                />
              </label>
            </div>
          </div>
        </div>

        {/* tabil  */}
        <div className=" mt-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr className="text-start">
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Si No
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Father Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {" "}
                    Department
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {" "}
                    Bord Role
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {" "}
                    Reg No
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {" "}
                    Sesion
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y  divide-gray-200">
                <tr>
                  <td className="whitespace-nowrap px-12 py-2 font-medium text-gray-900">
                    1{" "}
                  </td>
                  <td className="whitespace-nowrap px-12 py-2 font-medium text-gray-900">
                    John hassan Doe
                  </td>
                  <td className="whitespace-nowrap px-12 py-2 font-medium text-gray-900">
                    John khel{" "}
                  </td>
                  <td className="whitespace-nowrap px-12 py-2 text-gray-700">
                    computer
                  </td>
                  <td className="whitespace-nowrap px-12 py-2 text-gray-700">
                    {" "}
                    552464{" "}
                  </td>
                  <td className="whitespace-nowrap px-12 py-2 text-gray-700">
                    124584545
                  </td>
                  <td className="whitespace-nowrap px-12 py-2 text-gray-700">
                    2020-2021
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-12 py-2 font-medium text-gray-900">
                    1{" "}
                  </td>
                  <td className="whitespace-nowrap px-12 py-2 font-medium text-gray-900">
                    John Doe
                  </td>
                  <td className="whitespace-nowrap px-12 py-2 font-medium text-gray-900">
                    John khel{" "}
                  </td>
                  <td className="whitespace-nowrap px-12 py-2 text-gray-700">
                    computer
                  </td>
                  <td className="whitespace-nowrap px-12 py-2 text-gray-700">
                    {" "}
                    552464{" "}
                  </td>
                  <td className="whitespace-nowrap px-12 py-2 text-gray-700">
                    124584545
                  </td>
                  <td className="whitespace-nowrap px-12 py-2 text-gray-700">
                    2020-2021
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    );
};

export default TeacherData;