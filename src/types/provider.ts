import * as React from "react";
import { IModalObject } from "./modal";
import { IFusionContainerProps } from "./container";
import { IDialogObject } from "./dialog";

export interface IState extends IFusionContainerProps {
  modals: IModalObject[];
  dialogs: IDialogObject[];
}

export enum ActionType {
  ADD_MODAL,
  REMOVE_MODAL,
  ADD_DIALOG,
  REMOVE_DIALOG
}

export interface IAction {
  type: ActionType;
  payload: any;
}

export interface IFusionContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}
