import React, { PropsWithChildren, useState } from "react";
import Image from "next/image";
import { EventNotificationDefaultProps } from "../../constans/ComponentDefaultProps";

interface Props extends PropsWithChildren<any> {
  name?: string;
  description?: string;
  alertColor?: string;
  imageSrc?: string;
  alt?: string;
}

function EventNotification(props: Props) {
  const [count, setCounter] = useState(0);

  return (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
      <div
        className={"flex items-center justify-center w-12 " + props.alertColor}
      >
        {props.imageSrc ?? (
          <Image
            src={props.imageSrc ?? ""}
            className="w-5 h-5 my-1"
            alt={props.alt ?? ""}
          />
        )}
      </div>

      <div className="px-4 py-2 -mx-3 items-center  w-full">
        <div className="flex flex-col mx-3">
          <span className="text-md font-light">{props.name}</span>
          <span className="my-1 font-bold text-xl">{count}</span>
          <hr className="my-2" />
          <p className="text-sm text-gray-500">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

EventNotification.defaultProps = EventNotificationDefaultProps;
export default EventNotification;
