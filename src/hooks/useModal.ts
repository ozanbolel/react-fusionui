import { useFusionContext } from "../utils";
import { IModalObject, ActionType } from "../types";

export const useModal = () => {
  const { dispatch } = useFusionContext();

  return (component: IModalObject["component"], config?: IModalObject["config"]) => {
    const id = "modal-" + new Date().getTime().toString();
    const payload: IModalObject = { id, component, config };

    dispatch({ type: ActionType.ADD_MODAL, payload });
  };
};
