import * as React from "react";
import { useFusionContext } from "../../utils";
import { motion } from "framer-motion";
import { IModalObject, ActionType } from "../../types";
import { containerStyles, containerVariants, modalVariants } from "./Modal.style";

export const Modal: React.FC<IModalObject> = ({ id, Component, config }) => {
  const [isAnimationDone, setIsAnimationDone] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const { state, dispatch } = useFusionContext();

  React.useEffect(() => {
    setTimeout(() => {
      setIsAnimationDone(true);
    }, 400);
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
    <motion.div
      className={state.modalClassNames?.container}
      style={{ ...containerStyles, cursor: config?.autoclose ? "pointer" : undefined }}
      onClick={config?.autoclose ? (e) => closeIfContainer(e) : undefined}
      data-autoclose={config?.autoclose}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div className={state.modalClassNames?.modal} style={{ cursor: "default" }} variants={modalVariants}>
        {React.useMemo(
          () => (
            <Component {...{ closeModal, isAnimationDone, isClosing, ...config?.props }} />
          ),
          [closeModal, isAnimationDone, isClosing]
        )}
      </motion.div>
    </motion.div>
  );
};
