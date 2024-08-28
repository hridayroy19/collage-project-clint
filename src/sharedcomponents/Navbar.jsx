import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link, NavLink } from "react-router-dom";
import "./Style.css";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;
    if (window.scrollY > sticky) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="shadow-md bg-white font-[sans-serif] tracking-wide relative z-50">
      {/* top header section */}
      <section className="flex items-center flex-wrap lg:justify-center gap-4 py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]">
        {/* logo */}
        <Link to="/">
          <img
            src="https://i.ibb.co/W0XbzwM/logo-1.png"
            alt="logo"
            className="md:w-[360px] md:h-20 w-[19rem] lg:w-[41rem] lg:h-17"
          />
        </Link>
        <div className="lg:absolute lg:right-10 flex items-center ml-auto space-x-1">
          {/* /* Socal Icon */}
          <div className="group relative">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=" text-3xl text-blue-500">
              <FaFacebook />
              </button>
              <span className="absolute -top-7 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-2 rounded-lg border border-gray-300 bg-white py-1 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                Facebook<span></span>
              </span>
            </a>
          </div>
          <div className="group relative">
            <a
              href="https://x.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=" text-2xl  text-black">
              <FaXTwitter />
              </button>
              <span className="absolute -top-7 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-2 rounded-lg border border-gray-300 bg-white py-1 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                Twitter<span></span>
              </span>
            </a>
          </div>
          <div className="group relative">
            <a target="_blank" href="http://youtube.com/">
              <button className=" text-3xl text-red-600">
              <FaYoutube />
              </button>
              <span className="absolute -top-7 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-2 rounded-lg border border-gray-300 bg-white py-1 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                Youtube<span></span>
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* notice section */}
      <div className="flex items-center w-full h-6 bg-gray-200 overflow-hidden border border-gray-300">
        <button className="bg-red-500 text-white px-4 py-3 font-bold">
          খবর
        </button>
        <span className=" w-[90%] py-3">
          <Marquee speed="40" pauseOnHover className="text-red-500">
            সাইটের আপডেট এর কাজ চলমান রয়েছে। তার জন্য দুঃখ প্রকাশ করছি আমরা ||
            এ্যাপটাচ পলিটেকনিক ইনস্টিটিউট এর অফিসিয়াল ওয়েবসাইটে আপনাকে স্বাগতম |
          </Marquee>
        </span>
      </div>

      {/* navbar section */}
      <div
        id="myHeader"
        style={{ transition: "top 0.5s ease-in-out" }}
        className={`${
          isSticky ? "fixed top-0 w-full " : "relative"
        } transition-all duration-300 flex flex-wrap justify-center px-10 py-3 fixed w-full bg-green-500 `}
      >
        <div
          id="collapseMenu"
          style={{ display: isMenuOpen ? "block" : "none" }}
          className={` max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          <button
            id="toggleClose"
            onClick={handleToggle}
            className={` lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              />
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              />
            </svg>
          </button>
          <ul className="lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="max-lg:border-b max-lg:pb-4 px-3 lg:hidden">
              <Link to="/">
                <img
                  src="https://i.ibb.co/W0XbzwM/logo-1.png"
                  alt="logo"
                  className="md:w-[360px] md:h-20 w-[19rem]"
                />{" "}
              </Link>
            </li>
            <li
              id="aetive"
              className="max-lg:border-b act max-lg:px-3 max-lg:py-3"
            >
              <NavLink
                to="/"
                className="hover:text-[#007bff] text-gray-600  uppercase nav-link font-semibold block text-[15px]"
              >
                Home
              </NavLink>
            </li>
            {/* dropdown menu s*/}
            <li
              id="aetive"
              className="group max-lg:border-b max-lg:px-3 max-lg:py-3 relative"
            >
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block uppercase nav-link"
              >
                Administration
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name={16}
                    data-original="#000000"
                  />
                </svg>
              </a>
              <ul className="absolute top-7 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-green-500 max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li id="aetive" className="uppercase border-b py-3">
                  <NavLink
                    to="*"
                    className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    {" "}
                    board of directcrs
                  </NavLink>
                </li>
                <li id="aetive" className="uppercase border-b py-3">
                  <NavLink
                    to="/principal"
                    className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    {" "}
                    principal
                  </NavLink>
                </li>
                <li id="aetive" className="uppercase border-b py-3">
                  <NavLink
                    to="/viceprincipal"
                    className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    {" "}
                    vice-principal
                  </NavLink>
                </li>
                <li id="aetive" className="uppercase border-b py-3">
                  <NavLink
                    to="/deparmentHead/all"
                    className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    {" "}
                    Department Head
                  </NavLink>
                </li>
                <li id="aetive" className="uppercase border-b py-3">
                  <NavLink
                    to="*"
                    className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    {" "}
                    employees
                  </NavLink>
                </li>
                <li id="aetive" className="uppercase border-b py-3">
                  <NavLink
                    to="*"
                    className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    {" "}
                    instructor
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* 121212 */}

            <li className="group max-lg:border-b max-lg:px-3 max-lg:py-3 relative">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block uppercase nav-link"
              >
               Academics
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name={16}
                    data-original="#000000"
                  />
                </svg>
              </a>
              <ul className="absolute top-7 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-green-500 max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li id="aetive" className="uppercase border-b py-3">
                  <NavLink
                    to="*"
                    className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    {" "}
                    admission
                  </NavLink>
                </li>
                <li id="aetive" className="uppercase border-b py-3">
                  <NavLink
                    to="/notice"
                    className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    {" "}
                    notice 
                  </NavLink>
                  </li>
                  <li id="aetive" className="uppercase border-b py-3">
                  <NavLink
                    to="*"
                    className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    {" "}
                    online class
                  </NavLink>
                  </li>
                  <li id="aetive" className="uppercase border-b py-3">
                  <NavLink
                    to="*"
                    className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    {" "}
                    class routine
                  </NavLink>
                </li>
              </ul>
            </li>
            {/* 323232 */}
            {/* dropdown menu end */}
            {/* dropdown menu s*/}
            <li className="group max-lg:border-b max-lg:px-3 max-lg:py-3 relative">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block uppercase nav-link"
              >
                Database
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name={16}
                    data-original="#000000"
                  />
                </svg>
              </a>
              <ul className="absolute top-7 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-green-500 max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li id="aetive" className="uppercase border-b py-3">
                  <NavLink
                    to="*"
                    className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    {" "}
                    student
                  </NavLink>
                </li>
                <li id="aetive" className="uppercase border-b py-3">
                  <NavLink
                    to="*"
                    className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    {" "}
                    teachers
                  </NavLink>
                </li>
              </ul>
            </li>
            {/* dropdown menu end */}
            {/* dropdown menu s*/}
            <li className="group max-lg:border-b max-lg:px-3 max-lg:py-3 relative">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block uppercase nav-link"
              >
                Deparment
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name={16}
                    data-original="#000000"
                  />
                </svg>
              </a>
              <ul className="absolute top-7 max-lg:top-10 left-0 z-50 block space-y-2 shadow-lg bg-green-500 max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li id="aetive" className="uppercase border-b py-3">
                  <NavLink
                    to="*"
                    className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    {" "}
                    Electrical
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"  className="ml-4 inline-block" viewBox="0 0 64 64">
                                            <path d="M61.92 30.93a7.076 7.076 0 0 0-6.05-5.88 8.442 8.442 0 0 0-.87-.04V22A15.018 15.018 0 0 0 40 7H24A15.018 15.018 0 0 0 9 22v3.01a8.442 8.442 0 0 0-.87.04 7.076 7.076 0 0 0-6.05 5.88A6.95 6.95 0 0 0 7 38.7V52a3.009 3.009 0 0 0 3 3v6a1 1 0 0 0 1 1h3a1 1 0 0 0 .96-.73L16.75 55h30.5l1.79 6.27A1 1 0 0 0 50 62h3a1 1 0 0 0 1-1v-6a3.009 3.009 0 0 0 3-3V38.7a6.95 6.95 0 0 0 4.92-7.77ZM11 22A13.012 13.012 0 0 1 24 9h16a13.012 13.012 0 0 1 13 13v3.3a6.976 6.976 0 0 0-5 6.7v3.18a3 3 0 0 0-1-.18H17a3 3 0 0 0-1 .18V32a6.976 6.976 0 0 0-5-6.7Zm37 16v5H16v-5a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1ZM13.25 60H12v-5h2.67ZM52 60h-1.25l-1.42-5H52Zm3.83-23.08a1.008 1.008 0 0 0-.83.99V52a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V37.91a1.008 1.008 0 0 0-.83-.99 4.994 4.994 0 0 1 .2-9.88A4.442 4.442 0 0 1 9 27h.01a4.928 4.928 0 0 1 3.3 1.26A5.007 5.007 0 0 1 14 32v12a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V32a5.007 5.007 0 0 1 1.69-3.74 4.932 4.932 0 0 1 3.94-1.22 5.018 5.018 0 0 1 4.31 4.18v.01a4.974 4.974 0 0 1-4.11 5.69Z" data-original="#000000" />
                                    </svg> */}
                  </NavLink>
                </li>
                <li id="aetive" className="uppercase border-b py-3">
                  <NavLink
                    to="/computerDept"
                    className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    {" "}
                    Computer
                  </NavLink>
                </li>
                <li id="aetive" className="uppercase border-b py-3">
                  <NavLink
                    to="*"
                    className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    {" "}
                    Civil
                  </NavLink>
                </li>
                <li id="aetive" className="uppercase border-b py-3">
                  <NavLink
                    to="*"
                    className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    {" "}
                    Mechanical
                  </NavLink>
                </li>
                <li id="aetive" className="uppercase border-b py-3">
                  <NavLink
                    to="*"
                    className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    {" "}
                    Power
                  </NavLink>
                </li>
                <li id="aetive" className="uppercase border-b py-3">
                  <NavLink
                    to="*"
                    className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    {" "}
                    Architecture
                  </NavLink>
                </li>
              </ul>
            </li>
            {/* dropdown menu end */}
            <li id="aetive" className="max-lg:border-b max-lg:px-3 max-lg:py-3">
              <NavLink
                to="/gallery"
                className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block uppercase nav-link"
              >
                 gallery
              </NavLink>
            </li>
            <li id="aetive" className="max-lg:border-b max-lg:px-3 ">
              <NavLink
                to="/result"
                className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block uppercase nav-link"
              >
                Result
              </NavLink>
            </li>
          
            <li id="aetive" className="max-lg:border-b max-lg:px-3 ">
              <NavLink
                to="/contact"
                className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block uppercase nav-link"
              >
                Contact
              </NavLink>
            </li>
          
          </ul>
        </div>
        {/* togol */}
        <div
          id="toggleOpen"
          onClick={handleToggle}
          className={`flex ml-auto lg:hidden`}
        >
          <button>
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
