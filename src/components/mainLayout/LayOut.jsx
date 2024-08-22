import { Outlet } from "react-router-dom";
import Footer from "../../sharedcomponents/Footer";

const LayOut = () => {
  return (
    <div className=" w-full text-[#112A46] bg-[#FFF7F7] 2xl:w-[1440px] 2xl:mx-auto overflow-x-hidden">
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LayOut;
