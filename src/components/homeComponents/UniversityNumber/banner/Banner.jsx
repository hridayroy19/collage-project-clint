import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    Banner: true,
  };

  return (
    <div className=" w-full xl:mb-16 lg:mb-14 mb-5 ">
      <div>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img
                src="https://i.ibb.co/f2kwbX9/68985034f59860dde8d16765e5a8d943.jpg"
                alt=""
                className=" h-[71vh] object-cover w-full"
              />
            </div>
            <div>
              <img
                src="https://i.ibb.co/RDYzPt8/f2c0938edfcec05f1de26c03c2a903ff-1.jpg"
                alt=""
                className=" h-[71vh] object-cover w-full"
              />
            </div>
            <div>
              <img
                src="https://api.edu.bd/img/gallery/large/adcf42cdbd4c02b23e1cd1d5246a3204.jpg"
                alt=""
                className=" h-[71vh] object-cover w-full"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
