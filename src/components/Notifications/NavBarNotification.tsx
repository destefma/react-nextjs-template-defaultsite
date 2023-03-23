import React, { useState, useEffect, PropsWithChildren } from "react";

type Notification = {
  date: Date;
  text: string;
};

interface Props extends PropsWithChildren<any> {
  notifications?: [Notification];
}

function NavBarNotifications({ notifications }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // close on click outside
  useEffect(() => {
    /*   const clickHandler = ({ target: MouseEvent }) => {
               if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
               setDropdownOpen(false);
           };
           document.addEventListener('click', clickHandler);
           return () => document.removeEventListener('click', clickHandler);*/
  });

  return (
    <div className="relative inline-flex ml-3">
      <button
        className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${
          dropdownOpen && "bg-slate-200"
        }`}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className="sr-only">Notifications</span>
        <svg
          className="w-4 h-4"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-current text-slate-500"
            d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"
          />
          <path
            className="fill-current text-slate-400"
            d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
          />
        </svg>
        <div
          className={
            notifications != null && notifications?.length > 0
              ? "absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"
              : ""
          }
        ></div>
      </button>
      <div
        className={
          "absolute top-4 right-4 w-80 bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4 " +
          (!dropdownOpen ? "hidden" : null)
        }
      >
        <div className="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4">
          Notifications
        </div>
        <ul>
          {notifications?.map((notification, i) => (
            <li className="border-b border-slate-200 last:border-0" key={i}>
              <a
                className="block py-2 px-4 hover:bg-slate-50"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                key={i}
              >
                <span className="block text-sm mb-2" key={i}>
                  {notification.text}
                </span>
                <span
                  className="block text-xs font-medium text-slate-400"
                  key={i}
                >
                  {notification.date.toDateString()}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBarNotifications;
