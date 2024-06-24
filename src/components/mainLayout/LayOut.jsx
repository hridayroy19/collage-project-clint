import Home from "../../pages/Home";
import About from "../homeComponents/about/About";


const LayOut = () => {
  return (
    <div className=" w-full text-[#112A46] bg-[#FFF7F7] 2xl:w-[1440px] 2xl:mx-auto overflow-x-hidden">
      <Home></Home>
      <About/>
    </div>
  );
};

export default LayOut;