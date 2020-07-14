import * as React from "react";
import { Modal } from "../elements";
import { useFusionContext } from "../utils";

export const ModalMapper: React.FC = () => {
  const {
    state: { modals }
  } = useFusionContext();

  return (
    <>
      {modals.map((modal) => (
        <Modal key={modal.id} id={modal.id} component={modal.component} config={modal.config} />
      ))}
    </>
  );
};
