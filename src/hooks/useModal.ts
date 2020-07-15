import { useFusionContext } from "../utils";
import { IModalObject, ActionType } from "../types";

export const useModal = () => {
  const { dispatch } = useFusionContext();

  return (Component: IModalObject["Component"], config?: IModalObject["config"]) => {
    const id = "modal-" + new Date().getTime().toString();
    const payload: IModalObject = { id, Component, config };

    dispatch({ type: ActionType.ADD_MODAL, payload });
  };
};
