import clsx from "clsx";
import React from "react";

const Button = ({children, onClick, className}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'bg-white rounded-xl py-2 hover:bg-[#ececec] transition-all duration-200',
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button