import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";

const App = () => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <>
      <div className=" flex relative dark:bg-main-dark-bg">
        {activeMenu ? (
          <div className=" w-64 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          </div>
        )}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? " md:ml-64" : "  flex-2"
          }`}
        >
          <div className="fixed bg-white py-4 px-8 md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          </div>
          <div className=" py-24 px-6 lg:p-14">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
