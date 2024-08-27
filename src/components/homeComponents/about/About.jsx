import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div className="px-3 md:px-5 xl:px-20 lg:px-7  mb-11">
        <div className="hero">
          <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-12">
            {/* Image start */}
            <div className="py-8 flex justify-center lg:justify-start">
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-full">
                  <img
                    className="h-full w-full  md:max-w-full lg:max-w-[650px] object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src="https://i.ibb.co/8D9Wfz1/bablu-patel-Byhm-wlbw-SQ-unsplash.jpg"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <p className="mb-3 text-lg md:text-2xl lg:text-3xl font-bold font-mono text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Aptouch Polytechnic Institute Dinajpur
                  </p>
                </div>
              </div>
            </div>
            <div className="px-8 lg:px-0 lg:w-[85%]">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-mono font-bold mb-4 text-center">
                W E L C O M E TO
              </h1>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                Aptouch Polytechnic Institute <br /> Dinajpur
              </h1>
              <p className="py-6 text-base md:text-lg lg:text-xl font-sans font-medium text-[#0c233ffd]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                natus quis dignissimos repellendus? Molestias laboriosam
                consequatur at et ex vitae unde aut animi tempore magnam
                similique ea omnis deleniti beatae sint voluptatum, veniam
                reprehenderit temporibus sunt reiciendis blanditiis? Corrupti
                est expedita sapiente veniam illum recusandae minima modi
                assumenda voluptate totam veritatis vero alias nihil quod fugiat
                soluta dicta atque, eaque dolorem id pariatur, corporis
                voluptatem. Sit, nesciunt qui alias natus corporis inventore
                corrupti, aperiam at tenetur ea iure ab cum. Voluptatum, culpa
                quod natus tenetur inventore dignissimos doloremque sequi
                laboriosam
              </p>
              <button className="flex mx-auto relative -top-1 -left-1 bg-gray-800 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
