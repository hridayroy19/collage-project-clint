import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

     // user show Section
    // const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    // const navigate = useNavigate();
    //     //LogOut Handle
    //     const onSignout = () => {
    //         logOut()
    //             .then(() => {
    //                 navigate("/signin")
    //             })
    //             .catch(err => console.log(err))
    //     };

    // navbar reponsive start
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleDropdownClick = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
    };
    // navbar reponsive end

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-green-400 shadow-lg dark:bg-gray-800">
                <div className="container px-6 py-1 mx-auto md:flex md:justify-between md:items-center justify-between">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <img
                                className="w-auto lg:h-[60px] md:h-[44px] sm:h-7"
                                src="https://i.ibb.co/W0XbzwM/logo-1.png"
                                alt="Logo"
                            />
                        </Link>
                        {/* Mobile menu button */}
                        <div className="flex lg:hidden md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 8h16M4 16h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    {/* Mobile Menu */}
                    <div className={`${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'} absolute  md:flex md:items-center md:w-auto w-full inset-x-0 z-20  px-6 py-4 transition-all duration-300 ease-in-out bg-green-300 dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:opacity-100 md:translate-x-0 
                    `}
                    >
                        <div className="flex flex-col md:flex-row md:mx-6 font-bold ">
                            <NavLink to="" className={({ isActive, isPending }) => isActive ? "active my-2  dark:text-gray-200  md:mx-4 md:my-0 bg-orange-400 px-1  rounded-sm " : isPending ? "pending" : ""}
                            >
                                Home
                            </NavLink>

                            {/* Dropdown Menu */}
                            <div
                                className="relative md:group "
                                onMouseEnter={() => setIsDropdownOpen(true)}
                                onMouseLeave={() => setIsDropdownOpen(false)}
                            >
                                <NavLink
                                    className="flex items-center my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:ml-2 md:my-0"
                                    onClick={() => handleDropdownClick(1)}
                                >
                                    Administration
                                    <svg className="w-5 h-5 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </NavLink>

                                {/* Dropdown items */}
                                <div
                                    className={`${(isDropdownOpen || activeDropdown === 1) ? 'block' : 'hidden'
                                        } 
                                        md:absolute md:left-0 md:w-48 md:py-2 md:mt-2 md:bg-white md:border md:rounded-md md:shadow-xl md:dark:bg-gray-800`}
                                >
                                    <NavLink to="#"

                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    >
                                        Students
                                    </NavLink>
                                    <NavLink to="#"
                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    >
                                        Deparment
                                    </NavLink>
                                    <NavLink
                                        to="#"
                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    >
                                        Research
                                    </NavLink>
                                    <NavLink
                                        to="#"
                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    >
                                        News
                                    </NavLink>
                                </div>
                            </div>

                            <NavLink
                                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                                href="#"
                            >
                                Academics
                            </NavLink>
                            <NavLink
                                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                                href="#"
                            >
                                About
                            </NavLink>
                        </div>
                        {/* user Show and Not Show */}
                        {/* {
                            user ? <> */}
                        <div className="flex justify-start items-center md:block ">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                                <div className="w-24 flex justify-center items-center  rounded-full ">
                                    {/* {
                                                user && */}
                                    <div>
                                        {/* <img className="w-5 h-6" src={user?.photoURL} alt="User Image" /> */}
                                    </div>

                                    {/* } */}
                                </div>

                            </label>
                        </div>
                        {/* onClick={onSignout} hidden */}
                        <button className="text-white text-[15px] leading-[15px] px-[6px] py-[6px] rounded-[4px] font-normal  border-2 border-[#1c6ea4] bg-[#1c6ea4] inline-block ">
                            SignOut
                        </button>


                        {/* </> */}
                        {/* : */}
                        {/* <Link to="/signin">
                                <button className="btn border-none text-slate-100 bg-[#97b6b6]" >SignOut</button>
                                </Link> */}
                        {/* } */}
                    </div>
                </div>
            </nav>
            {/* end */}
        </>
    );
};

export default Navbar;
