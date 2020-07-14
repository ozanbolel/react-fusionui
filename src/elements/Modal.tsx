import * as React from "react";
import { useFusionContext } from "../utils";
import { IModalObject, ActionType } from "../types";

export const Modal: React.FC<IModalObject> = ({ id, component, config }) => {
  const [isAnimationDone, setIsAnimationDone] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const { state, dispatch } = useFusionContext();

  React.useEffect(() => {
    setIsAnimationDone(true);
  }, []);

  const closeModal = () => {
    setIsClosing(true);
    dispatch({ type: ActionType.REMOVE_MODAL, payload: id });
  };

  const closeIfContainer = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).dataset.autoclose === "true") {
      closeModal();
    }
  };

  return (
    <div
      className={state.modalClassNames?.container}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "calc(var(--fusion-vh, 1vh) * 100)",
        cursor: config?.autoclose ? "pointer" : undefined
      }}
      onClick={config?.autoclose ? (e) => closeIfContainer(e) : undefined}
      data-autoclose={config?.autoclose}
    >
      <div className={state.modalClassNames?.modal} style={{ cursor: "default" }}>
        {React.useMemo(
          () =>
            React.createElement(component, {
              closeModal,
              isAnimationDone,
              isClosing,
              ...config?.props
            }),
          [component, isAnimationDone, isClosing]
        )}
      </div>
    </div>
  );
};
