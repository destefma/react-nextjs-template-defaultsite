import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";
import { useHover } from "../../../hooks/useHover";
import { BackgroundColors, TextColors } from "../../../constans/ComponentTypes";

interface IconProps {
  className?: string;
}

interface TextProps {
  className?: string;
}

interface NavBarItemProps extends PropsWithChildren<any> {
  className?: string;
  href?: string;
  backgroundColors?: BackgroundColors;
  textColors?: TextColors;
  title?: string;
}

interface SubComponentsProps {
  Icon: typeof Icon;
  Text: typeof Text;
}

const NavBarItem: React.FC<NavBarItemProps> & SubComponentsProps = (props) => {
  const [hoverRef, isHovered] = useHover<HTMLAnchorElement>();
  const isActive = useRouter().pathname == props.href;

  const tailwindProps = `${props.className} 
  ${props.textColors?.basic} 
  ${props.backgroundColors?.basic} 
  ${
    isActive
      ? props.backgroundColors?.active + " " + props.textColors?.active
      : ""
  }
  ${
    isHovered && !isActive
      ? props.backgroundColors?.hover + " " + props.textColors?.hover
      : ""
  }`;

  return (
    <div
      className={`flex flex-row items-center justify-center text-center text-font-normal ${props.className}`}
    >
      <a
        href={props.href}
        ref={hoverRef}
        title={props.title}
        className={`font-medium tracking-wide font-sans text-lg ${tailwindProps} group transition duration-300`}
      >
        {props.children}
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-activ"></span>
      </a>
    </div>
  );
};
const Icon: React.FunctionComponent<IconProps> = (props) => <div {...props} />;
const Text: React.FunctionComponent<TextProps> = (props) => <div {...props} />;

NavBarItem.Icon = Icon;
NavBarItem.Text = Text;

export default NavBarItem;
