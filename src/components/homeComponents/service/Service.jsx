
import "./style.css";

const Service = () => {
  return (
    <div>
      <section className=" h-screen flex justify-center items-center text-white">
        <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute w-full h-full backface-hidden">
              <img
                src="https://i.ibb.co/8D9Wfz1/bablu-patel-Byhm-wlbw-SQ-unsplash.jpg"
                className="w-full h-full object-cover"
                alt="The King's Man"
              />
            </div>
            <div className="absolute my-rotate-y-180 w-full h-full bg-gray-100 backface-hidden overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold">The King's Man</h1>
                <p className="my-2">9.0 Rating</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis itaque assumenda saepe animi maxime libero non quasi,
                  odit natus veritatis enim culpa nam inventore doloribus quidem
                  temporibus amet velit accusamus.
                </p>
                <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
