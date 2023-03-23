import { title } from "process";
import React from "react";

interface Props {
  text: string;
  width: number;
  height: number;
  color: string;
  fontSize: number;
  fontColor: string;
  className?: string;
  title?: string;
}

const Star: React.FC<Props> = ({
  text,
  width,
  height,
  color,
  fontSize,
  fontColor,
  className,
}) => {
  return (
    <a href="#gastro-news" title={title}>
      <svg
        aria-hidden="true"
        className={`w-${width} h-${height} ${className}`}
        fill={`${color}`}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="border-solid border-2 border-sky-500"
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        ></path>
        <text x="50" y="50" textAnchor="middle" className="text-center z-50">
          <tspan
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize={fontSize}
            fill={fontColor}
          >
            {text}
          </tspan>
        </text>
      </svg>
    </a>
  );
};

export default Star;
