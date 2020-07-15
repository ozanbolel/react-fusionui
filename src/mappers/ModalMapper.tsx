import * as React from "react";
import { useFusionContext } from "../utils";
import { AnimatePresence } from "framer-motion";
import { Modal } from "../elements";

export const ModalMapper: React.FC = () => {
  const {
    state: { modals }
  } = useFusionContext();

  return (
    <AnimatePresence>
      {modals.map((modal) => (
        <Modal key={modal.id} id={modal.id} Component={modal.Component} config={modal.config} />
      ))}
    </AnimatePresence>
  );
};
