import * as React from "react";
import { useModal, FusionModalComponent } from "react-fusionui";
import Section from "../app/Section/Section";
import Snippet from "../app/Snippet/Snippet";

const ModalAutoClose: React.FC = () => {
  const modal = useModal();

  const code = `
  const modal = useModal();

  const Modal = () => {
    return <h2>Click outside to close.</h2>;
  };

  return <button onClick={() => modal(Modal, { autoclose: true })}>Open Modal</button>;
  `;

  const Modal: FusionModalComponent = () => {
    return <h2>Click outside to close.</h2>;
  };

  const preview = <button onClick={() => modal(Modal, { autoclose: true })}>Open Modal</button>;

  return (
    <Section title="Modal with Auto Close">
      <Snippet code={code} preview={preview} />
    </Section>
  );
};

export default ModalAutoClose;
