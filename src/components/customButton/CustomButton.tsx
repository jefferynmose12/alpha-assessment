import React from "react";

interface CustomButtonTypes {
  className?: string;
  children: string | React.ReactNode;
  onClick?: () => void;
}

const CustomButton = ({ className, children, onClick }: CustomButtonTypes) => {
  return (
    <button
      onClick={onClick && onClick}
      className={`px-3 h-9 border hover:opacity-80 ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
