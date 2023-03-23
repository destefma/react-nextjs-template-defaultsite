import React, { PropsWithChildren, useState } from "react";

interface Props extends PropsWithChildren<any> {
  headerText?: string;
  bgColor?: string;
  className?: string;
  sidebarOpen: boolean;
}

function SideBar({
  headerText,
  bgColor,
  sidebarOpen,
  className,
  children,
}: Props) {
  return (
    <div
      className={`z-50 float-left flex flex-col px-4 ${className} ${bgColor} ${
        sidebarOpen ? "block" : "hidden"
      }`}
    >
      <div className={`my-4`}>
        <div className="flex flex-row items-center">
          <h2 className="text-xl font-semibold text-white ml-2 ">
            {headerText}
          </h2>
        </div>
        <nav className="flex flex-col gap-5 flex-1">{children}</nav>
      </div>
    </div>
  );
}

export default SideBar;
