import React, { PropsWithChildren } from "react";
import { motion, MotionProps } from "framer-motion";

export type MotionSectionProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}> & MotionProps;

const getOffset = (direction: MotionSectionProps["direction"]) => {
  switch (direction) {
    case "up":
      return { y: 24 };
    case "down":
      return { y: -24 };
    case "left":
      return { x: 32 };
    case "right":
      return { x: -32 };
    default:
      return {};
  }
};

export function MotionSection({ className, children, delay = 0, direction = "up", ...rest }: MotionSectionProps) {
  const offset = getOffset(direction);
  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function MotionCard({ className, children, delay = 0, direction = "up", ...rest }: MotionSectionProps) {
  const offset = getOffset(direction);
  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      whileHover={{ y: -4, scale: 1.02, boxShadow: "0px 10px 30px rgba(0,0,0,0.10)" }}
      whileTap={{ scale: 0.98 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function MotionImage({ className, children, delay = 0, direction = "up", ...rest }: MotionSectionProps) {
  const offset = getOffset(direction);
  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.99 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
