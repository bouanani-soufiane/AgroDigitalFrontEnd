import { MdOutlineCancel, MdLogout } from "react-icons/md";
import { BsFileBarGraphFill } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiFarmer } from "react-icons/gi";
import { FaDisease } from "react-icons/fa6";
import { RiStockFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";





export const Sidebar = ({ activeMenu, setActiveMenu }) => {
  return (
    <div className=" bg-green-900 dark:bg-[#181C1F]  dark:border-r-2 dark:border-[#35383B] h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-8">
      {activeMenu && (
        <>
          <div>
            <button
              type="button"
              onClick={() => setActiveMenu(!activeMenu)}
              className=" text-xl rounded-full text-white hover:bg-light-gray m-3 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </div>

          <div className=" mx-7 mt-10 text-white text-xl flex flex-col">
            <a href="/" className="font-extrabold tracking-tight">
              Universal
            </a>
          </div>

          <div>
            {/* */}
            <div className=" flex flex-col justify-between">
              <div>
                <p className="text-gray-300 text-sm font-semibold tracking-wide px-4 mt-10">
                  Pages
                </p>
                <Link
                  to="/"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-[#181C1F] hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <FaHome className=" text-lg" />
                  Dashboard
                </Link>
                <Link
                  to="/program"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-[#181C1F] hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <BsFileBarGraphFill className=" text-lg" />
                  Program
                </Link>
                <Link
                  to="/employees"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-[#181C1F] hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <GiFarmer className=" text-lg" />
                  Employee
                </Link>
                <Link
                  to="/tasks"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-[#181C1F] hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <FaTasks className=" text-lg" />
                  Tasks
                </Link>
                <Link
                  to="/products"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-[#181C1F] hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <RiStockFill className=" text-lg" />
                  Products
                </Link>
                <Link
                  to="/maladies"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-[#181C1F] hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <FaDisease className=" text-lg" />
                  Maladie
                </Link>
                <Link
                  to="/traitement"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-[#181C1F] hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <MdOutlineCleaningServices className=" text-lg" />
                  Traitement
                </Link>

              </div>
              {/* */}
              <div>
                <p className="text-gray-300  text-sm font-semibold tracking-wide px-4 mt-4">
                  Help
                </p>
                <a
                  href="/"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-[#181C1F] hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <MdLogout className=" text-lg" />
                  Logout
                </a>

              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
