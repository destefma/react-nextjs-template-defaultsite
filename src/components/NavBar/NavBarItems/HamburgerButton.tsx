import React, {
  ButtonHTMLAttributes,
  Component,
  PropsWithChildren,
} from "react";

interface Props extends PropsWithChildren<any> {
  className?: string;
  isOpen: boolean;
  bgColor: string;
  borderColor: string;
  onClick: (openValue: boolean) => void;
}

function HamburgerButton({
  className,
  onClick,
  isOpen,
  bgColor,
  borderColor,
}: Props) {
  const genericHamburgerLine =
    "h-1 w-5 my-1 rounded-full transition ease transform duration-300 " +
    bgColor;

  return (
    <button
      onClick={() => onClick(!isOpen)}
      type="button"
      name="NavBar Menu Button"
      title="NavBar Menu Button"
      className={
        "flex flex-col h-10 w-10 border-2 rounded justify-center items-center group " +
        className +
        " " +
        borderColor
      }
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-80 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-80 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  );
}

export default HamburgerButton;
