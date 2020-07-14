import * as React from "react";
import { IState, IAction, IFusionContext, ActionType, IFusionContainerProps } from "./types";

let initialState: IState = {
  modals: [],
  modalClassNames: undefined
};

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case ActionType.ADD_MODAL:
      return Object.assign({}, state, {
        modals: [...state.modals, action.payload]
      });

    case ActionType.REMOVE_MODAL:
      return Object.assign({}, state, {
        modals: state.modals.filter((modal) => modal.id !== action.payload)
      });

    default:
      return state;
  }
}

export const FusionContext = React.createContext({} as IFusionContext);

export const FusionProvider: React.FC<IFusionContainerProps> = ({ children, modalClassNames }) => {
  initialState.modalClassNames = modalClassNames;

  const [state, dispatch] = React.useReducer(reducer, initialState);

  return <FusionContext.Provider value={{ state, dispatch }}>{children}</FusionContext.Provider>;
};
