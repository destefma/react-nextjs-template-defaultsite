import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren<any> {
    id: number,
    title: string,
    activeTab: number,
    setActiveTab: any,
}

const TabNavItem = ({ id, title, activeTab, setActiveTab }: Props) => {

    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <li
            onClick={handleClick}
            key={id}
            className={"flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700" +
                "bg-transparent border-b-2 border-skyblue sm:px-4 -px-1 whitespace-nowrap " +
                "focus:outline-none hover:bg-gray-200 m-4 rounded-tr-lg " +
                (activeTab === id ? "active" : "")}>
            {title}
        </li>
    );
};
export default TabNavItem;