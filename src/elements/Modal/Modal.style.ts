import * as React from "react";

export const containerStyles: React.CSSProperties = {
  opacity: 0,
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "calc(var(--fusion-vh, 1vh) * 100)"
};

export const modalStyles: React.CSSProperties = {
  transform: "scale(0.25)",
  cursor: "default"
};
