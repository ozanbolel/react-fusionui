import * as React from "react";
import { FusionProvider } from "./FusionProvider";
import { ModalMapper } from "./mappers";
import { IFusionContainerProps } from "./types";

export const FusionContainer: React.FC<IFusionContainerProps> = ({ children, modalClassNames }) => {
  React.useEffect(() => {
    const resizeOps = () => {
      document.documentElement.style.setProperty("--fusion-vh", window.innerHeight * 0.01 + "px");
    };

    resizeOps();
    window.addEventListener("resize", resizeOps);
  });

  return (
    <FusionProvider modalClassNames={modalClassNames}>
      {children}
      <ModalMapper />
    </FusionProvider>
  );
};
