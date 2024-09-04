import { useEffect, useState } from "react";

const Instractor = () => {
  const [teacher, setTeacher] = useState([]);
  // console.log(teacher);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        console.log(data);

        setTeacher(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-12">
      <h1 className="py-7 text-green-500 font-serif text-2xl md:text-3xl lg:text-4xl text-center mb-4">
        EX-INSTRUCTOR / JUNIOR INSTRUCTOR
      </h1>
      <div className="grid grid-cols-2 xl:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mb-24">
        {/* card section */}
        {teacher.map((data, id) => (
          <div
            key={id}
            className="h-[200px]  sm:h-[230px] md:h-[240px] lg:h-[250px]"
          >
            <a href="#" className="group relative block h-full">
              <img
                alt={data?.name}
                src={data?.photo}
                className="absolute inset-0 w-full h-full object-cover "
              />
              <div className="relative p-2 top-[125px]  md:top-36 lg:top-[139px] sm:p-6 lg:p-8 bg-opacity-45 bg-black">
                <p className="text-lg sm:text-xl font-bold text-white">
                  {data?.name}
                </p>
                <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-green-500">
                  {data?.instructor}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instractor;
