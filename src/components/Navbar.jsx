import { MdOutlineSegment } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegBell, FaCircleUser } from "react-icons/fa6";
import { AiTwotoneAppstore } from "react-icons/ai";

export const Navbar = ({ activeMenu, setActiveMenu }) => {
  return (
    <div className=" grid grid-cols-4 items-center">
      <div className="flex text-lg items-center gap-8 col-span-1">
        <MdOutlineSegment
          className=" rotate-180 text-2xl cursor-pointer"
          onClick={() => setActiveMenu(!activeMenu)}
        />
        <h2 className="font-bold text-lg">Dashboard</h2>
      </div>
      {/* */}
      <div className="col-span-2">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#F6F6FA] p-2.5 w-5/6 rounded-lg"
        />
      </div>
      {/* */}
      <div className=" col-span-1 gap-2 flex justify-end items-center text-xl">
        <AiTwotoneAppstore className="my-auto text-md cursor-pointer" />
        <FaRegBell className="my-auto text-md cursor-pointer" />
        <img src="avatar.png" alt="avatar" className=" size-9 ml-[-5px]" />
        <div className="flex text-base gap-1">
          <p className="cursor-default">Manuel Alejandro</p>
          <IoIosArrowDown className="my-auto cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
