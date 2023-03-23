import React, { Component, PropsWithChildren, useState } from "react";
import HamburgerButton from "./NavBarItems/HamburgerButton";

interface Props extends PropsWithChildren<any> {
  bgColor?: string;
  className?: string;
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
}

function NavBar(props: Props) {
  return (
    <nav
      className={`top-0 z-50 flex items-center justify-between px-4 ${props.bgColor} ${props.className}`}
    >
      <div className="beginning"></div>
      <div className="middle items-center justify-between space-x-4 hidden sm:flex gap-5">
        {props.children}
      </div>

      <div className="end">
        <div className={`block mr-2 md:hidden md:mr-0`}>
          <HamburgerButton
            isOpen={props.sidebarOpen}
            onClick={props.setSidebarOpen}
            bgColor={"bg-gray-800"}
            borderColor={"bg-white"}
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
