import * as React from "react";
import { Variants } from "framer-motion";

export const containerStyles: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "calc(var(--fusion-vh, 1vh) * 100)"
};

export const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { type: "tween", duration: 0.4 } },
  exit: { opacity: 0, transition: { type: "tween", duration: 0.4 } }
};

export const dialogVariants: Variants = {
  initial: { scale: 0.25 },
  animate: { scale: 1, transition: { type: "tween", duration: 0.4 } },
  exit: { scale: 0, transition: { type: "tween", duration: 0.4 } }
};
