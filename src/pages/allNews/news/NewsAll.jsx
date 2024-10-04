import { useEffect, useState } from "react";

const NewsAll = () => {
  const [news, setNews] = useState([]);
//   console.log(news);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/news.json");
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.log(error, "fetch data error");
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" py-16 w-full font-serif  text-[#112A46] bg-[#FFF7F7] lg:px-10 xl:px-16 px-5 2xl:w-[1440px] 2xl:mx-auto overflow-x-hidden">
      <div className=" bg-green-200 flex items-center justify-between text-black py-2 px-3">
        <h4 className=" text-xl"> Letes News</h4>
        <p className="  px-2 font-bold bg-green-400 py-1">Refresh </p>
      </div>
      {/* filter section */}
      <div className=" grid grid-cols-3 gap-7 mt-10">
        {news?.map((data, index) => (
          <div
            key={index}
            className=" w-[370px] rounded-lg border shadow transition hover:shadow-lg"
          >
            <img
              alt=""
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="h-56 w-full object-cover"
            />
            <div className="bg-white p-4 sm:p-6">
              <p className="block text-xs text-gray-500">{data?.date}</p>
              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900">
                  How to position your furniture
                </h3>
              </a>
              <button className=" text-center border rounded-full  px-4 py-1 text-green-500 border-green-500 mt-11 text-xl mb-3 flex mx-auto">
                Read More
              </button>
            </div>
          </div>
        ))}
        {/* card end up */}
      </div>
    </div>
  );
};

export default NewsAll;
