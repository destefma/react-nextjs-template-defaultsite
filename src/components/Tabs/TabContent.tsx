import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren<any> {
    id: number,
    activeTab: number,
}

const TabContent = ({ id, activeTab, children }: Props) => {

    return (activeTab === id ? <>{children}</> : null);
};

export default TabContent;
