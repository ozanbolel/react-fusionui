import * as React from "react";
import { useFusionContext, animate, sliceFloat } from "../../utils";
import { IDialogObject, ActionType } from "../../types";
import { containerStyles, dialogStyles } from "./Dialog.style";

export const Dialog: React.FC<IDialogObject> = ({ id, content, actions, config }) => {
  const { state, dispatch } = useFusionContext();
  const refContainer = React.useRef<HTMLDivElement>(null);
  const refDialog = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = refContainer.current;
    const dialog = refDialog.current;

    if (container && dialog) {
      animate((value) => (container.style.opacity = value), { from: parseFloat(container.style.opacity), to: 1 });
      animate((value) => (dialog.style.transform = `scale(${value})`), { from: sliceFloat(dialog.style.transform), to: 1 });
    }
  }, []);

  const closeDialog = () => {
    const container = refContainer.current;
    const dialog = refDialog.current;

    if (container && dialog) {
      animate((value) => (container.style.opacity = value), { from: parseFloat(container.style.opacity), to: 0 });
      animate((value) => (dialog.style.transform = `scale(${value})`), {
        from: sliceFloat(dialog.style.transform),
        to: 0,
        onRest: () => dispatch({ type: ActionType.REMOVE_DIALOG, payload: id })
      });
    }
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
    <div
      ref={refContainer}
      className={state.dialogClassNames?.container}
      style={{ ...containerStyles, cursor: config?.autoclose ? "pointer" : undefined }}
      onClick={config?.autoclose ? (e) => closeIfContainer(e) : undefined}
      data-autoclose={config?.autoclose}
    >
      <div ref={refDialog} className={state.dialogClassNames?.dialog} style={dialogStyles}>
        <div className={state.dialogClassNames?.content}>{content}</div>

        <div className={state.dialogClassNames?.actionContainer}>
          {actions.map((action, index) => (
            <button
              key={id + "-" + index}
              className={state.dialogClassNames?.action + (state.dialogClassNames?.highlight && action.highlight ? " " + state.dialogClassNames.highlight : "")}
              onClick={() => actionOnClick(action.callback)}
            >
              <span className={state.dialogClassNames?.actionLabel}>{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
