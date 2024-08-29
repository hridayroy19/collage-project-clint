import React, { useEffect, useState } from "react";

const DeparmnetHead = () => {
  const [department, setDepartment] = useState([]);
  // console.log(department);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/public/deparment.json");
        const data = await response.json();
        setDepartment(data);
      } catch (error) {
        console.log(error, "fetch data error");
      }
    };

    fetchData(); // Call the fetchData function
  }, []);

  return (
    <div className="py-24 xl:px-16 lg:px-7 md:px-10  px-6">
      <div className=" w-full grid xl:lg:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center gap-8">
        {department?.map((teacher, id) => (
          <div
            key={id}
            className="relative lg:w-[300px] md:w-[330px] w-[350px] h-[350px] shadow-lg shadow-blue-400 border overflow-hidden"
          >
            {/* Profile Section */}
            <div className="avatar flex justify-center mt-11">
              <div className="w-24 rounded-full">
                <img src={teacher?.photo} alt="Profile" />
              </div>
            </div>
            {/* Info Section */}
            <div className="text-center mt-5 mb-2">
              <h2 className="text-xl font-serif"> {teacher.name} </h2>
              <h3 className="text-sm"> {teacher.email} </h3>
              {/* Role */}
              <div className="mt-4">
                <div className="border w-[93%] px-2 flex mx-auto py-1 bg-fuchsia-100">
                  <h1 className="font-serif">
                    Role : {teacher.role} Expt:{teacher?.experience}
                  </h1>
                </div>
                <p>Salary: {teacher.salary} </p>
              </div>
            </div>
            {/* Wave Section */}
            <div className="absolute bottom-0 left-0 top-72 w-full h-[100px]">
              <svg
                className="absolute bottom-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="5 10  1200 320 "
              >
                <path
                  fill="#007BFF"
                  fillOpacity="1"
                  d="M0,224L48,186.7C96,149,192,75,288,42.7C384,11,480,21,576,48C672,75,768,117,864,128C960,139,1056,117,1152,133.3C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            {/* Department Section */}
            <div className="w-[115px] shadow-lg border left-0 right-0 top-3 absolute">
              <h3 className="text-black py-1 px-4 bg-green-600 font-serif">
                {" "}
                {teacher.department}{" "}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeparmnetHead;
