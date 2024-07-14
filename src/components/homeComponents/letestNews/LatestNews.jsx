import { GoArrowRight } from "react-icons/go";

const LatestNews = () => {
  return (
    <div className="px-3 lg:mb-20 md:px-5 xl:px-20  lg:px-7">
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <h3 className="text-2xl md:text-2xl font-thin">
            LATEST NEWS <span className="font-bold"> |</span>
          </h3>
          <span className="text-sm flex items-center gap-3 md:text-base">
            VIEW ALL NEWS <GoArrowRight />{" "}
          </span>
        </div>
      </div>
      {/* fast card section */}
      <div className="flex flex-col lg:flex-row gap-7 w-full">
        <div className="w-full lg:w-[550px] h-[200px] md:h-[270px]">
          <img
            src="https://static.just.edu.bd/images/public/news/1719749819254_1200.jpeg"
            alt="Movie"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full">
          <h6 className="text-[12px] md:text-[14px]">CAMPUS NEWS</h6>
          <h2 className="card-title mb-3 mt-4 text-lg md:text-xl lg:text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nam
            illo
          </h2>
          <p className="text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nam
            illo consequuntur nemo minima mollitia quas commodi culpa doloribus
            repellat libero voluptas labore sunt, assumenda quam, esse,
            reiciendis numquam necessitatibus!
          </p>
          <button className="mt-4 font-serif text-[16px] border-none group relative">
            READ MORE
            <div className="overflow-hidden mt-1">
              <div className="h-1 w-0 bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full"></div>
            </div>
          </button>
        </div>
      </div>

      {/* down card setion  div tow */}
      <div className="grid  xl:grid-cols-3 lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1 mt-12">
        {/* Card 1 */}
        <div className=" h-[410px] md:h-[450px] xl:h-[500px] w-full border-e-2 border-e-green-600">
          <img
            alt=""
            src="https://i.ibb.co/yBt61J1/f2c0938edfcec05f1de26c03c2a903ff.jpg"
            className="h-44 md:h-48 lg:h-56 xl:h-64 w-full bg-[#c9bbbb27]"
          />
          <div className="px-4 p-3">
            <h6 className="text-[12px] md:text-[14px] lg:text-[16px]">
              CAMPUS NEWS
            </h6>
            <h2 className="card-title mb-2 mt-1 text-xl md:text-2xl lg:text-3xl">
              Lorem ipsum dolor sibnad
            </h2>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nam
              illo consequuntur nemo minima mollitia
            </p>
            <button className="mt-4  font-serif text-[16px] border-none group relative">
              READ MORE
              <div className="overflow-hidden mt-1">
                <div className="h-1 w-0 bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className=" h-[410px] md:h-[450px] xl:h-[500px] w-full border-e-2 border-e-green-600">
          <img
            alt=""
            src="https://i.ibb.co/d2rKWk2/a1b0ddc0a86fcaaa7e1a5ff56b90a635.jpg"
            className="h-44 md:h-48 lg:h-56 xl:h-64 w-full bg-[#c9bbbb27]"
          />
          <div className="px-4 p-3">
            <h6 className="text-[12px] md:text-[14px] lg:text-[16px]">
              CAMPUS NEWS
            </h6>
            <h2 className="card-title mb-2 mt-1 text-xl md:text-2xl lg:text-3xl">
              Lorem ipsum dolor sibnad
            </h2>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nam
              illo consequuntur nemo minima mollitia
            </p>
            <button className="mt-4 font-serif text-[16px] border-none group relative">
              READ MORE
              <div className="overflow-hidden mt-1">
                <div className="h-1 w-0 bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className=" h-[410px] md:h-[450px] xl:h-[500px] w-full">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-44 md:h-48 lg:h-56 xl:h-64 w-full bg-[#c9bbbb27]"
          />
          <div className="px-4 p-3">
            <h6 className="text-[12px] md:text-[14px] lg:text-[16px]">
              CAMPUS NEWS
            </h6>
            <h2 className="card-title mb-2 mt-1 text-xl md:text-2xl lg:text-3xl">
              Lorem ipsum dolor sibnad
            </h2>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nam
              illo consequuntur nemo minima mollitia
            </p>
            <button className="mt-4 font-serif text-[16px] border-none group relative">
              READ MORE
              <div className="overflow-hidden mt-1">
                <div className="h-1 w-0 bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
