import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren<any> {
  className?: string;
  headerText: string;
  secondHeaderText?: string;
  bgColor?: string;
  children?: React.ReactNode;
}

const FlexHeaderSection = ({
  className,
  headerText,
  secondHeaderText,
  bgColor,
  children,
}: Props) => {
  return (
    <section
      className={`${bgColor} ${className} welcome-section pt-10`}
      id="welcome-section"
    >
      <div className="flex flex-col items-center py-10  px-6 lg:px-40">
        <h4 className="font-greatvibes italic tracking-wide text-3xl font-bold text-font-secondary">
          {headerText}
        </h4>
        <h3 className="font-bold text-3xl text-center lg:text-5xl tracking-wide text-font-primary my-2">
          {secondHeaderText}
        </h3>
        <hr className="w-2/12 mt-5 mb-3 bg-gray-700" />
        <hr className="w-1/12 mb-5 bg-gray-700" />

        {children}
      </div>
    </section>
  );
};

export default FlexHeaderSection;
