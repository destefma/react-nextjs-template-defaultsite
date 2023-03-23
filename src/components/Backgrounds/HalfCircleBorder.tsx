import styles from "../../../styles/Wave.module.css";

interface Props {
  bgColor: string;
  rotate?: number;
  className?: string;
}

function HalfCircleBorder({ bgColor, rotate = 0, className }: Props) {
  return (
    <div
      className={`rotate-${rotate} ${bgColor} ${styles.topwaves} ${className}`}
    ></div>
  );
}

export { HalfCircleBorder };
