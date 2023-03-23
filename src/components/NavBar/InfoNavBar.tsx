import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  telNumber: string;
  bgColor?: string;
}

const InfoNavBar = (props: Props) => {
  return (
    <div
      className={`${props.className} flex flex-row justify-center w-full font-bold py-2 text-font-normal bg-header ${props.bgColor}`}
    >
      <a className="m-2" href={`tel:${props.telNumber}`}>
        <span>JETZT ANRUFEN! </span>
      </a>
    </div>
  );
};

export default InfoNavBar;
