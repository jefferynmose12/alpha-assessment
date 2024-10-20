import { Link, NavLink } from "react-router-dom";
import { sideBarMenu } from "./data";
import LogoIcon from "../asset/icons/LogoIcon";
import person from "../asset/images/person.png";
import EmptyIcon from "../asset/icons/EmptyIcon";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { RxDoubleArrowRight } from "react-icons/rx";
import useThemeContext from "../context/useThemeContext";

const LeftBar = () => {
  const {
    width,
    toggleDarkMode: toggleMode,
    toggleWidth: handleWidth,
  } = useThemeContext();

  return (
    <div className="min-h-screen px-2 pt-5">
      <div className={width ? `px-1` : `px-3`}>
        <Link to="/dashboard">{width ? <EmptyIcon /> : <LogoIcon />}</Link>
      </div>
      <div className="flex flex-col gap-3 py-7 text-primary-text dark:text-white">
        {sideBarMenu.map((item) =>
          item.mobile ? null : (
            <NavLink
              key={item.title}
              to={item.route}
              className={({ isActive }) =>
                `py-2 px-3 flex items-center justify-between cursor-pointer text-sm xl:text-base ${
                  isActive &&
                  "bg-select-color text-primary-color dark:text-white dark:bg-primary-color"
                }`
              }
            >
              <div className="relative flex items-center gap-5">
                <item.icon />
                {!width && (
                  <span className="transform duration-300 ease-in-out">
                    {item.title}
                  </span>
                )}

                {width && item.badge && (
                  <div className="transform duration-300 ease-in-out absolute -top-1 -right-1 w-3 h-3 flex justify-center items-center bg-red-500 text-[8px] font-medium text-white rounded-xl">
                    <span>3</span>
                  </div>
                )}
              </div>

              {!width && item.badge && (
                <div className="transform duration-300 ease-in-out w-6 h-6 flex justify-center items-center bg-red-500 text-xs font-medium text-white rounded-xl">
                  <span>3</span>
                </div>
              )}
            </NavLink>
          )
        )}

        <button
          onClick={handleWidth}
          className="py-2 px-3 cursor-pointer text-sm xl:text-base flex items-center gap-5"
        >
          <div className="w-4 flex justify-center items-center">
            {width ? <RxDoubleArrowRight /> : <RxDoubleArrowLeft />}
          </div>
          {!width && (
            <span className="transform duration-300 ease-in-out">Collapse</span>
          )}
        </button>

        {!width && (
          <div
            onClick={toggleMode}
            className="py-2 px-3 inline-flex items-center cursor-pointer"
          >
            <div
              className={`relative w-8 h-5 flex justify-between items-center rounded-full py-0.5 px-0.5 bg-switch-dom dark:bg-primary-color cursor-pointer`}
            >
              <div
                className={`absolute bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out dark:translate-x-3`}
              />
            </div>
            {!width && (
              <span className="transform duration-300 ease-in-out ml-2 cursor-pointer text-sm xl:text-base">
                Dark mode
              </span>
            )}
          </div>
        )}

        <div className="py-2 px-3 cursor-pointer flex items-center gap-3">
          <img
            src={person}
            alt="person"
            className="border border-gray-200 rounded-[50%]"
          />
          {!width && (
            <div className="flex flex-col transform duration-300 ease-in-out">
              <span className="text-sm font-medium">Rudra Devi</span>
              <span className="text-xs">rudra.devi@gmail.com</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
