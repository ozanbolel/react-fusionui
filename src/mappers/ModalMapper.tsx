import * as React from "react";
import { useFusionContext } from "../utils";
import { Modal } from "../elements";

export const ModalMapper: React.FC = () => {
  const { state } = useFusionContext();

  return (
    <>
      {state.modals.map((modal) => (
        <Modal key={modal.id} id={modal.id} Component={modal.Component} config={modal.config} />
      ))}
    </>
  );
};
