import { useFusionContext } from "../utils";
import { IDialogObject, ActionType } from "../types";

export const useDialog = () => {
  const { dispatch } = useFusionContext();

  return (content: IDialogObject["content"], actions: IDialogObject["actions"], config?: IDialogObject["config"]) => {
    const id = "dialog-" + new Date().getTime().toString();
    const payload: IDialogObject = { id, content, actions, config };

    dispatch({ type: ActionType.ADD_DIALOG, payload });
  };
};
