import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import { Outlet } from 'react-router-dom';

const App = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  return (
    <div className="App">
      <div className=" flex relative dark:bg-main-dark-bg">
        {activeMenu ? (
          <div className="z-50 w-64 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          </div>
        )}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? " md:ml-64" : "  flex-2"
            }`}
        >
          <div className="fixed  bg-white z-10 dark:bg-[#181C1F] dark:border-b-2 dark:border-[#35383B] py-4 px-8 md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          </div>
          <div className="  py-24 px-6 lg:p-14">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>

  );
};

export default App;
