import * as React from "react";
import { FusionProvider } from "./FusionProvider";
import { ModalMapper, DialogMapper } from "./mappers";
import { IFusionContainerProps } from "./types";

export const FusionContainer: React.FC<IFusionContainerProps> = ({ children, modalClassNames, dialogClassNames }) => {
  React.useEffect(() => {
    const resizeOps = () => {
      document.documentElement.style.setProperty("--fusion-vh", window.innerHeight * 0.01 + "px");
    };

    resizeOps();
    window.addEventListener("resize", resizeOps);

    return () => {
      window.removeEventListener("resize", resizeOps);
    };
  });

  return (
    <FusionProvider modalClassNames={modalClassNames} dialogClassNames={dialogClassNames}>
      {children}
      <ModalMapper />
      <DialogMapper />
    </FusionProvider>
  );
};
