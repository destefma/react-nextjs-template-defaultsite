import { PropsWithChildren } from "react";
import {
  motion,
  useTransform,
  MotionValue,
  domAnimation,
  LazyMotion,
} from "framer-motion";

interface FadeInItemProps extends PropsWithChildren {
  id: number;
  bgColor?: string;
  className?: string;
}

function FadeInItem({ id, bgColor, className, children }: FadeInItemProps) {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`bg-${bgColor} ${className}`}
        transition={{
          delay: 0.2,
          stiffness: 55,
          mass: 0.27,
          damping: 15,
          default: { ease: "linear" },
        }}
        key={id}
      >
        {children}
      </motion.div>
    </LazyMotion>
  );
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default FadeInItem;
