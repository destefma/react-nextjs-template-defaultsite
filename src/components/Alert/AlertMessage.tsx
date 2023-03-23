import React, { PropsWithChildren } from "react";
import { AlertMessageDefaultProps } from "../../constans/ComponentDefaultProps";

interface Props extends PropsWithChildren<any> {
  welcomeText?: string;
  textMessage?: string;
  username?: string;
}

function AlertMessage({ welcomeText, textMessage, username }: Props) {
  return (
    <div
      className="bg-gradient-to-r from-cyan-900 via-cyan-700 to-cyan-500 rounded-lg py-5 px-6 mb-4 text-base text-teal-300"
      role="alert"
    >
      <p className="text-2xl font-medium leading-tight mb-2">
        {welcomeText} {username ?? ""} !
      </p>
      <p>{textMessage}</p>
    </div>
  );
}

AlertMessage.defaultProps = AlertMessageDefaultProps;
export default AlertMessage;
