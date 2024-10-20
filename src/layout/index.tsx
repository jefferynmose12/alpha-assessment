import { Outlet } from "react-router-dom";
import LeftBar from "./LeftBar";
import useThemeContext from "../context/useThemeContext";
import BottomNav from "./BottomNav";
import MobileNavBar from "./MobileNavBar";

const Layout = () => {
  const { width } = useThemeContext();

  return (
    <div className="flex flex-col xl:flex-row">
      <div
        className={`bg-white hidden xl:block shadow-md transform duration-300 ease-in-out dark:bg-primary-dark ${
          width ? "w-[60px]" : "w-[245px]"
        }`}
      >
        <LeftBar />
      </div>
      <MobileNavBar />
      <main className="flex-1 h-screen overflow-auto bg-white dark:bg-dark-body">
        <div className="py-5 px-3 md:px-6 lg:px-8 2xl:px-10">
          <Outlet />
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
