import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";
import { useHover } from "../../../hooks/useHover";
import {
  BackgroundColors,
  TextColors,
  TextStyles,
} from "../../../constans/ComponentTypes";
import { ClickableNavBarItemDefaultProps } from "../../../constans/ComponentDefaultProps";

interface Props extends PropsWithChildren<any> {
  className?: string;
  backgroundColors?: BackgroundColors;
  textColors?: TextColors;
  textStyles?: TextStyles;
  isHoverUnderline?: boolean;
  isRounded?: boolean;
  onClick?: any;
}

function ClickableNavBarItem(props: Props) {
  const [hoverRef, isHovered] = useHover<HTMLButtonElement>();

  return (
    <button
      onClick={props.onClick}
      ref={hoverRef}
      className={`my-1 px-3 py-2 underline-offset-4 decoration-2 decoration-primary flex justitfy-content align-items-center "
        ${props.className} 
        ${props.textStyles?.fontBold} 
        ${props.textStyles?.tracking} 
        ${props.textStyles?.size} 
        ${props.textColors?.basic} 
        ${props.backgroundColors?.basic} 
        ${props.isRounded ? "rounded-md" : null} 
        ${props.isHoverUnderline ? "hover:underline" : ""}
        ${
          isHovered
            ? props.backgroundColors?.hover + " " + props.textColors?.hover
            : ""
        }
      `}
    >
      {props.children}
    </button>
  );
}

ClickableNavBarItem.defaultProps = ClickableNavBarItemDefaultProps;
export default ClickableNavBarItem;
