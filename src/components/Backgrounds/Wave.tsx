import React from "react";

interface Props {
  bgColor: string;
  color: string;
}

const Wave = (props: Props) => {
  return (
    <div className={`fill-${props.color} ${props.bgColor}`}>
      <svg
        id="visual"
        viewBox="0 0 900 150"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className={`fill-primary bg-secondary`}
      >
        <path d="M0 102L37.5 103.5C75 105 150 108 225 102.8C300 97.7 375 84.3 450 75.3C525 66.3 600 61.7 675 63.7C750 65.7 825 74.3 862.5 78.7L900 83L900 0L862.5 0C825 0 750 0 675 0C600 0 525 0 450 0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z"></path>
      </svg>
    </div>
  );
};

export default Wave;
