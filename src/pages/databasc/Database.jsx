import { Outlet } from "react-router-dom";

const Database = () => {
  return (
    <div className=" w-full font-serif  text-[#112A46] bg-[#FFF7F7] lg:px-10 xl:px-16 px-5 2xl:w-[1440px] 2xl:mx-auto overflow-x-hidden">
      <Outlet />
    </div>
  );
};

export default Database;
