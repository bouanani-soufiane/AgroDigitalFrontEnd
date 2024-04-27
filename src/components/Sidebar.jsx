import { MdOutlineCancel, MdLogout } from "react-icons/md";
import { BsFileBarGraphFill } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiFarmer } from "react-icons/gi";
import { FaDisease } from "react-icons/fa6";
import { RiStockFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";
import { logout } from "../store/UserSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";


import { CgProfile } from "react-icons/cg";


export const Sidebar = ({ activeMenu, setActiveMenu }) => {

  const userConnected = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  useEffect(() => {
    if (!userConnected) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className=" bg-green-900 dark:bg-[#181C1F]  dark:border-r-2 dark:border-[#35383B] h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-8">
      { activeMenu && (
        <>
          <div>
            <button
              type="button"
              onClick={ () => setActiveMenu(!activeMenu) }
              className=" text-xl rounded-full text-white hover:bg-light-gray m-3 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </div>

          <div className=" mx-7 mt-10 text-white text-xl flex flex-col">
            <a href="/" className="font-extrabold tracking-tight">
              AgriDigital
            </a>
          </div>

          <div>
            {/* */ }
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
                { userConnected ? userConnected.role == 'Gerant' && <Link
                  to="/program"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-[#181C1F] hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <BsFileBarGraphFill className=" text-lg" />
                  Program
                </Link> : '' }
                { userConnected ? userConnected.role == 'Gerant' && <Link
                  to="/employees"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-[#181C1F] hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <GiFarmer className=" text-lg" />
                  Employee
                </Link> : '' }
                { userConnected ? userConnected.role == 'Gerant' && <Link
                  to="/tasks"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-[#181C1F] hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <FaTasks className=" text-lg" />
                  Tasks
                </Link> : '' }
                { userConnected ? userConnected.role == 'Gerant' || userConnected.role == 'Magazinier' && <Link
                  to="/products"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-[#181C1F] hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <RiStockFill className=" text-lg" />
                  Products
                </Link> : '' }
                { userConnected ? userConnected.role == 'Gerant' || userConnected.role == 'Technician' && <Link
                  to="/maladies"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-[#181C1F] hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <FaDisease className=" text-lg" />
                  Maladie
                </Link> : '' }

                { userConnected ? userConnected.role == 'Gerant' && <Link
                  to="/reports"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-[#181C1F] hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <MdOutlineCleaningServices className=" text-lg" />
                  Reports
                </Link> : '' }
                { userConnected ? userConnected.role != 'Gerant' && <Link
                  to="/profile"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-[#181C1F] hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <CgProfile className=" text-lg" />
                  Profile
                </Link> : '' }

              </div>
              {/* */ }
              <div>
                <p className="text-gray-300  text-sm font-semibold tracking-wide px-4 mt-4">
                  Help
                </p>
                <button

                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-[#181C1F] hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                  onClick={ handleLogout }
                >
                  <MdLogout className=" text-lg" />
                  Logout
                </button>

              </div>
            </div>
          </div>
        </>
      ) }
    </div>
  );
};
