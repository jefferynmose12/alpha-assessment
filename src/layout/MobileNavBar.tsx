import { useState } from "react";
import CustomButton from "../components/customButton/CustomButton";
import { Link, NavLink } from "react-router-dom";
import useThemeContext from "../context/useThemeContext";
import LogoIcon from "../asset/icons/LogoIcon";
import hamblack from "../asset/images/ham-black.png";
import hamwhite from "../asset/images/ham-white.png";
import { sideBarMenu } from "./data";
import person from "../asset/images/person.png";
import { LiaTimesSolid } from "react-icons/lia";

const MobileNavBar = () => {
  const { dark, toggleDarkMode: toggleMode } = useThemeContext();
  const [open, setOpen] = useState(false);
  return (
    <nav
      className={`xl:hidden h-14 px-3 shadow sticky z-40 top-0 flex justify-between items-center ${
        open ? "bg-white dark:bg-dark-body" : "bg-white dark:bg-primary-dark"
      }`}
    >
      <Link to="/dashboard">
        <LogoIcon />
      </Link>

      <CustomButton
        children={
          <div>
            {dark ? (
              open ? (
                <button className="text-black p-1 text-sm rounded-3xl bg-white border border-gray-300 outline-none">
                  <LiaTimesSolid className="font-black" />
                </button>
              ) : (
                <img src={hamwhite} alt="hamwhite" />
              )
            ) : (
              open ? (
                <button className="text-black p-1 text-sm rounded-3xl bg-white border border-gray-300 outline-none">
                  <LiaTimesSolid className="font-black" />
                </button>
              ) : (
                <img src={hamblack} alt="hamblack" />
              )
            )}
          </div>
        }
        className="border-transparent bg-transparent text-primary-text dark:text-white z-50"
        onClick={() => setOpen(!open)}
      />
      <div
        className={`xl:hidden fixed top-14 z-50 w-full ${
          open ? "left-0 duration-500" : "-left-full duration-500"
        }`}
      >
        <div
          className={`pl-3 py-7 flex flex-col items-center bg-white border-t dark:border-none border-gray-300 h-screen dark:bg-dark-body tracking-wider gap-1`}
        >
          {sideBarMenu.map((item) =>
            item.mobile ? null : (
              <NavLink
                key={item.title}
                to={item.route}
                className={({ isActive }) =>
                  `py-2 px-3 flex items-center w-full justify-between cursor-pointer text-md  ${
                    isActive
                      ? "text-primary-color"
                      : "text-primary-text dark:text-white"
                  }`
                }
              >
                <div className="relative flex items-center gap-5">
                  <item.icon className="text-xl" />
                  <span className="transform duration-300 ease-in-out tracking-tight">
                    {item.title}
                  </span>
                </div>

                {item.badge && (
                  <div className="mr-3 transform duration-300 ease-in-out w-6 h-6 flex justify-center items-center bg-red-500 text-xs font-medium text-white rounded-xl">
                    <span>3</span>
                  </div>
                )}
              </NavLink>
            )
          )}

          <div
            onClick={toggleMode}
            className="py-2 px-3 inline-flex w-full items-center cursor-pointer"
          >
            <div
              className={`relative w-8 h-5 flex justify-between items-center rounded-full py-0.5 px-0.5 bg-switch-dom dark:bg-primary-color cursor-pointer`}
            >
              <div
                className={`absolute bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out dark:translate-x-3`}
              />
            </div>

            <span className="transform duration-300 ease-in-out ml-2 cursor-pointer text-sm xl:text-base text-primary-text dark:text-white">
              Dark mode
            </span>
          </div>

          <div className="py-2 px-3 w-full cursor-pointer flex items-center gap-3">
            <img
              src={person}
              alt="person"
              className="border border-gray-200 rounded-[50%]"
            />

            <div className="flex flex-col transform duration-300 ease-in-out text-primary-text dark:text-white">
              <span className="text-sm font-medium">Rudra Devi</span>
              <span className="text-xs">rudra.devi@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavBar;
