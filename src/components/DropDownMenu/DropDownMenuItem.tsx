import React, { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren<any> {
    text: string,
    onClick?: any,
}

function DropDownMenuItem({ text, onClick }: Props) {
    return (
        <button className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 min-w-max w-full text-left" onClick={onClick}>{text}</button>
    )
}

export default DropDownMenuItem