import { MdOutlineCancel } from "react-icons/md";
import { BsFileBarGraphFill, BsBoxSeam } from "react-icons/bs";
import { RiCoupon2Line } from "react-icons/ri";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { GoQuestion } from "react-icons/go";
import { MdOutlinePhoneInTalk, MdOutlinePayments } from "react-icons/md";

export const Sidebar = ({ activeMenu, setActiveMenu }) => {
  return (
    <div className=" bg-[#5367E4] dark:bg-[#181C1F]  dark:border-r-2 dark:border-[#35383B] h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-8">
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

          <div className=" justify-center items-center gap-2 mt-10 text-white text-xl flex flex-col">
            <img src="logo.webp" alt="logo" className=" size-12 shadow-2xl" />
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
                <a
                  href="/"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-emerald-500 hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <BsFileBarGraphFill className=" text-lg" />
                  Dashboard
                </a>
                <a
                  href="/"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-emerald-500 hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <BsBoxSeam className=" text-lg" />
                  Get Free Products
                </a>
                <a
                  href="/"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-emerald-500 hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <RiCoupon2Line className=" text-lg" />
                  Coupons
                </a>
                <a
                  href="/"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-emerald-500 hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <BiMessageRoundedDetail className=" text-lg" />
                  Messages
                </a>
              </div>
              {/* */}
              <div>
                <p className="text-gray-300  text-sm font-semibold tracking-wide px-4 mt-4">
                  Help
                </p>
                <a
                  href="/"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-emerald-500 hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <GoQuestion className=" text-lg" />
                  FAQ
                </a>
                <a
                  href="/"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-emerald-500 hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <MdOutlinePhoneInTalk className=" text-lg" />
                  Contact Us
                </a>
                <a
                  href="/"
                  className=" hover:bg-[#EFF1FF] dark:hover:bg-[#343338] text-sm hover:font-bold hover:border-l-4 hover:border-emerald-500 hover:text-black gap-3 px-8 py-3 items-center font-normal mt-2 flex tracking-tight text-white dark:text-gray-300"
                >
                  <MdOutlinePayments className=" text-lg" />
                  Billing
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
