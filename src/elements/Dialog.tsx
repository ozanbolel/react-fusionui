import * as React from "react";
import { useFusionContext } from "../utils";
import { motion } from "framer-motion";
import { IDialogObject, ActionType } from "../types";
import { containerStyles, containerVariants, dialogVariants } from "./Dialog.style";

export const Dialog: React.FC<IDialogObject> = ({ id, content, actions, config }) => {
  const { state, dispatch } = useFusionContext();

  const closeDialog = () => {
    dispatch({ type: ActionType.REMOVE_DIALOG, payload: id });
  };

  const closeIfContainer = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).dataset.autoclose === "true") {
      closeDialog();
    }
  };

  const actionOnClick = (callback?: Function) => {
    callback ? callback() : null;
    closeDialog();
  };

  return (
    <motion.div
      className={state.dialogClassNames?.container}
      style={{ ...containerStyles, cursor: config?.autoclose ? "pointer" : undefined }}
      onClick={config?.autoclose ? (e) => closeIfContainer(e) : undefined}
      data-autoclose={config?.autoclose}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div className={state.dialogClassNames?.dialog} style={{ cursor: "default" }} variants={dialogVariants}>
        <div className={state.dialogClassNames?.content}>{content}</div>

        <div className={state.dialogClassNames?.actionContainer}>
          {actions.map((action, index) => (
            <button key={id + "-" + index} className={state.dialogClassNames?.action} onClick={() => actionOnClick(action.callback)}>
              <span className={state.dialogClassNames?.actionLabel}>{action.label}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
