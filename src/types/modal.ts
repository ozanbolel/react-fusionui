import * as React from "react";

export interface IModalComponentProps {
  closeModal: Function;
  isAnimationDone: boolean;
  isClosing: boolean;
}

export type ModalComponent<P = {}> = React.FunctionComponent<IModalComponentProps & P>;

export interface IModalConfig {
  props?: Object;
  autoclose?: boolean;
}

export interface IModalObject {
  id: string;
  Component: ModalComponent;
  config?: IModalConfig;
}
