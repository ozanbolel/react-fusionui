import * as React from "react";
import { FusionContext } from "../FusionProvider";

export const useFusionContext = () => {
  const context = React.useContext(FusionContext);

  return context;
};
