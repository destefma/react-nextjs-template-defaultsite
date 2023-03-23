import React, { PropsWithChildren, useState } from 'react'
import DropDownMenu from '../DropDownMenu/DropDownMenu'
import DropDownMenuItem from '../DropDownMenu/DropDownMenuItem'


interface Props extends PropsWithChildren<any> {
    className?: string,
    headerText?: string,
    headerDescription?: string,
    headerColor?: string,
    hiddeHeader?: boolean,
}


function CardContainer({ className, headerText, hiddeHeader, headerDescription, headerColor, children }: Props) {

    return (
        <div className={"block rounded-lg shadow-lg bg-white overflow-y-auto overflow-x-auto " + className}>
            <div className={"w-full flex flex-row items-center py-4 px-6 " + (hiddeHeader ? "hidden " : " ") + headerColor}>

                <div className='flex flex-col gap-2'>
                    <span className='font-bold text-lg text-gray-700'>{headerText}</span>
                    <span className='text-md font-light text-gray-500'>{headerDescription}</span>
                </div>
                {children[0]}
            </div>
            <div>
                {children[1]}
            </div>
        </div>
    )
}

export default CardContainer