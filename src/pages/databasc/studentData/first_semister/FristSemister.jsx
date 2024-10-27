import { useEffect, useState } from "react";

const FristSemister = () => {
  const [student, setStudent] = useState([]);
  const [seacrch, setSearch] = useState("");
  // console.log(student);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/studentData.json");
        const data = await response.json();
        setStudent(data);
      } catch (error) {
        console.log(error, "fetch data error");
      }
    };
    fetchData(); // Call the fetchData function
  }, []);

  // filter studnet data base

  const filterStudent = student.filter(
    (student) =>
      student.name.toLowerCase().includes(seacrch.toLocaleLowerCase()) ||
      student.boardRoll.toLowerCase().includes(seacrch.toLowerCase())
  );

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
                  onChange={(e) => setSearch(e.target.value)}
                  className=" lg:w-[150px] w-[100px] px-4 py-2 rounded-md"
                  placeholder="Name / Roll"
                />
              </label>
            </div>
          </div>
        </div>

        {/* tabil  */}
        <div className=" mt-8">
          <div className="overflow-x-auto">
            <form action="">
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
                      Session
                    </th>
                  </tr>
                </thead>

                {/* maping section */}
                {filterStudent?.map((student) => (
                  <tbody key={student.id} className="divide-y  divide-gray-200">
                    <tr>
                      <td className="whitespace-nowrap px-12 py-2 font-medium text-gray-900">
                        1{" "}
                      </td>
                      <td className="whitespace-nowrap px-12 py-2 font-medium text-gray-900">
                        {student?.name}
                      </td>
                      <td className="whitespace-nowrap px-12 py-2 font-medium text-gray-900">
                        John khel{" "}
                      </td>
                      <td className="whitespace-nowrap px-12 py-2 text-gray-700">
                        computer
                      </td>
                      <td className="whitespace-nowrap px-12 py-2 text-gray-700">
                        {student.boardRoll}
                      </td>
                      <td className="whitespace-nowrap px-12 py-2 text-gray-700">
                        {student.reg}
                      </td>
                      <td className="whitespace-nowrap px-12 py-2 text-gray-700">
                        2020-2021
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FristSemister;
