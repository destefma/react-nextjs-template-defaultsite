import React, { PropsWithChildren } from "react";
import { DIRECTION, LAYOUT_SPAN } from "../../constans/ComponentTypes";

interface Props extends PropsWithChildren<any> {
  classNames?: string;
  split: DIRECTION;
  layoutSpan: LAYOUT_SPAN;
}

function SplitPanel({ classNames, split, layoutSpan, children }: Props) {
  const MAX_LAYOUT_PARTS = 12;

  return (
    <div
      className={`flex ${
        split === "VERTICAL" ? "flex-row" : "flex-col"
      } ${classNames}`}
    >
      <div className={`basis-${layoutSpan}/12 shrink-0 grow-0`}>
        {children[0]}
      </div>
      <hr className="separator" />
      <div className={`flex-1`}>{children[1]}</div>
    </div>
  );
}

export default SplitPanel;
