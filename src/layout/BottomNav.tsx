import React from "react";
import { NavLink } from "react-router-dom";
import { sideBarMenu } from "./data";

const BottomNav = () => {
  return (
    <nav className="px-3 bg-white dark:bg-dark-body sticky z-50 bottom-0 xl:hidden grid grid-cols-4 gap-1 pb-4 border-t border-gray-200 dark:border-gray-500">
      {sideBarMenu.slice(0, 4).map((item) => (
        <NavLink
          key={item.title}
          to={item.route}
          className={({ isActive }) =>
            `border-t-4 pt-3 flex items-center flex-col gap-1.5 ${
              isActive
                ? "border-primary-color text-primary-color"
                : "border-transparent dark:text-white"
            }`
          }
        >
          <item.icon className="text-xl text-primary-gray dark:text-white" />
          <span className="">{item.title}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
