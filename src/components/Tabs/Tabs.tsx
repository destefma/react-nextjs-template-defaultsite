import React, { Children, PropsWithChildren, useState } from "react";
import { TabsDefaultProps } from "../../constans/ComponentDefaultProps";
import TabContent from "./TabContent";
import TabNavItem from "./TabNavItem";

interface Props extends PropsWithChildren<any> {
  className?: string;
  tabs?: [string];
  setActiveTab?: any;
}

function Tabs({ tabs, className, children }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const arrayChildren = Children.toArray(children);

  return (
    <div className={"flex flex-row py-4 " + className}>
      <div className="flex flex-col border-r border-gray-200">
        {tabs?.map((tab, i) => (
          <TabNavItem
            id={i}
            title={tab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            key={i}
          />
        ))}
      </div>
      <div className="w-full h-full px-4">
        {arrayChildren.map((child, i) => (
          <TabContent id={i} activeTab={activeTab} key={i}>
            {child}
          </TabContent>
        ))}
      </div>
    </div>
  );
}

Tabs.defaultProps = TabsDefaultProps;
export default Tabs;
