import React, { PropsWithChildren, useState } from 'react'

interface Props extends PropsWithChildren<any> {
    name?: string,
    className?: string,

}

function DropDownMenu({ name, children, className }: Props) {

    const [isDropMenuOpen, setDropMenuOpen] = useState(false)

    return (
        <div className={className}>

            <div className="relative">
                <button className="block text-gray-700 ml-auto" type="button" onClick={() => setDropMenuOpen(!isDropMenuOpen)}>
                    {name}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                        </path>
                    </svg>
                </button>

                <div className={"absolute right-0 bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4 " + (isDropMenuOpen == false ? "hidden" : "")}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DropDownMenu