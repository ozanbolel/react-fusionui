import { IModalObject } from "./modal";
import { IFusionContainerProps } from "./container";

export interface IState extends IFusionContainerProps {
  modals: IModalObject[];
}

export enum ActionType {
  ADD_MODAL,
  REMOVE_MODAL
}

export interface IAction {
  type: ActionType;
  payload: any;
}

export interface IFusionContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}
