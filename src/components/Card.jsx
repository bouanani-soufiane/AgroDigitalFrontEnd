import { TbBrandCampaignmonitor } from "react-icons/tb";
import { LuClipboardList } from "react-icons/lu";

export const Card = ({ title, number, color }) => {
  return (
    <div
      className={`cursor-pointer hover:text-white rounded-xl shadow-md text-sm font-semibold bg-white hover:bg-gradient-to-tr from-[#596DE8] to-[#2C3679] px-4 py-3`}
    >
      <div className="flex justify-between py-1 items-center">
        <p>{title}</p>
        <TbBrandCampaignmonitor
          className={`text-3xl bg-${color} rounded-full p-1.5`}
        />
      </div>
      <div className="flex justify-between py-1 items-center">
        <h2 className="text-3xl">{number}</h2>
        <div className="flex gap-2 items-center">
          <LuClipboardList />
          <p className="font-normal">See List</p>
        </div>
      </div>
    </div>
  );
};
