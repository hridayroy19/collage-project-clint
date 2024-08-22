import { data } from "autoprefixer";
import React, { useContext, useEffect, useState } from "react";

const Gallery = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/public/imag.json");
        const data = await response.json();
        setImage(data);
      } catch (error) {
        console.log(error, "fetch data error");
      }
    };

    fetchData(); // Call the fetchData function
  }, []);

  return (
    <div>
      {/* banner section*/}
      <div className=" mb-10 w-full">
        <img
          src="https://i.ibb.co/0FWcGCS/fe458127812043-5636b276d6b43.jpg"
          className="w-full h-[45vh] object-cover"
          alt=""
        />
      </div>

      {/* image section  */}
      <div className=" grid mb-24 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 w-full px-3   md:px-5 xl:px-16   ">
        {image?.map((img, id) => (
          <div className="overflow-hidden " key={id}>
            <img
              src={img.url}
              alt="imge"
              className=" rounded-lg w-full h-52 object-cover transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
