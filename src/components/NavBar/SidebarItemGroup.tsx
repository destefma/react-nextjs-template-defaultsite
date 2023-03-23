import React, { PropsWithChildren, useState } from 'react';
import ClickableNavBarItem from './NavBarItems/ClickableNavBarItem';

interface Props extends PropsWithChildren<any> {
    isOpen: boolean,
    name: string,
}

function SidebarItemGroup({
    children,
    isOpen,
    name,
}: Props) {

    const [open, setOpen] = useState(isOpen);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <>
            <ClickableNavBarItem onClick={handleClick}>
                {name}
                <svg className={`w-3 h-3 ml-auto text-center fill-current text-slate-200 ${open && 'transform rotate-180'}`} viewBox="0 0 12 12">
                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                </svg>
            </ClickableNavBarItem>
            <li className={`px-3 py-2 my-1 mb-0.5 last:mb-0 rounded-md list-none bg-gray-900 ${open ? "block" : "hidden"}`}>
                {children}
            </li>
        </>
    );
}

export default SidebarItemGroup;