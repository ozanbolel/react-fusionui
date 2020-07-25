import * as React from "react";
import { useFusionContext, animate, sliceFloat } from "../../utils";
import { IModalObject, ActionType } from "../../types";
import { containerStyles, modalStyles } from "./Modal.style";

export const Modal: React.FC<IModalObject> = ({ id, Component, config }) => {
  const [isAnimationDone, setIsAnimationDone] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const { state, dispatch } = useFusionContext();
  const refContainer = React.useRef<HTMLDivElement>(null);
  const refModal = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = refContainer.current;
    const modal = refModal.current;

    if (container && modal) {
      animate((value) => (container.style.opacity = value), { from: parseFloat(container.style.opacity), to: 1 });
      animate((value) => (modal.style.transform = `scale(${value})`), {
        from: sliceFloat(modal.style.transform),
        to: 1,
        onRest: () => setIsAnimationDone(true)
      });
    }
  }, []);

  const closeModal = () => {
    if (isAnimationDone) {
      setIsClosing(true);

      const container = refContainer.current;
      const modal = refModal.current;

      if (container && modal) {
        animate((value) => (container.style.opacity = value), { from: parseFloat(container.style.opacity), to: 0 });
        animate((value) => (modal.style.transform = `scale(${value})`), {
          from: sliceFloat(modal.style.transform),
          to: 0,
          onRest: () => dispatch({ type: ActionType.REMOVE_MODAL, payload: id })
        });
      }
    }
  };

  const closeIfContainer = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).dataset.autoclose === "true") {
      closeModal();
    }
  };

  return (
    <div
      ref={refContainer}
      className={state.modalClassNames?.container}
      style={{ ...containerStyles, cursor: config?.autoclose ? "pointer" : undefined }}
      onClick={config?.autoclose ? (e) => closeIfContainer(e) : undefined}
      data-autoclose={config?.autoclose}
    >
      <div ref={refModal} className={state.modalClassNames?.modal} style={modalStyles}>
        {React.useMemo(
          () => (
            <Component {...{ closeModal, isAnimationDone, isClosing, ...config?.props }} />
          ),
          [closeModal, isAnimationDone, isClosing]
        )}
      </div>
    </div>
  );
};
