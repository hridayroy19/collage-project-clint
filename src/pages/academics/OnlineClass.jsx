import { useEffect, useState } from "react";

const OnlineClass = () => {
  const [video, setVideo] = useState([]);
  // console.log(video);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Video.json");
        const data = await response.json();
        setVideo(data);
      } catch (error) {
        console.log(error, "fetch data error");
      }
    };

    fetchData(); // Call the fetchData function
  }, []);

  return (
    <div className="w-full px-2 font-serif  md:px-5 xl:px-16 ">
      {/* banner section*/}
      <div className=" border-b-2 border-green-600  flex justify-center  w-full ">
        <img
          src="https://i.ibb.co.com/sPQwcxv/Online-Classes-1.png"
          className=" h-[25vh] "
          alt=""
        />
      </div>
      {/* video */}
      <div className="  grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center  gap-5 mb-8">
        {video?.map((video, id) => (
          <div
            key={id}
            className="mt-5 border-2 px-2 py-3 lg:w-full mx-auto  md:w-[350px] w-[350px] "
          >
            <div className="relative h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/ti-O-Ewc0oE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h1 className=" mt-3 text-xl"> {video.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineClass;
