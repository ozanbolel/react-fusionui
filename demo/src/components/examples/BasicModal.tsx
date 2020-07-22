import * as React from "react";
import { useModal, FusionModalComponent } from "react-fusionui";
import Section from "../app/Section/Section";
import Snippet from "../app/Snippet/Snippet";

const BasicModal: React.FC = () => {
  const modal = useModal();

  const code = `
  import React from "react";
  import { useModal } from "react-fusionui";

  const Modal = ({ closeModal }) => {
    return <h1 onClick={() => closeModal()}>Click to Close</h1>;
  };

  const MyComponent = () => {
    const modal = useModal();

    return <button onClick={() => modal(Modal)}>Open Modal</button>;
  };

  export default MyComponent;
  `;

  const Modal: FusionModalComponent = ({ closeModal }) => {
    return <h1 onClick={() => closeModal()}>Click to Close</h1>;
  };

  const preview = <button onClick={() => modal(Modal)}>Open Modal</button>;

  return (
    <Section title="Basic Modal">
      <Snippet code={code} preview={preview} />
    </Section>
  );
};

export default BasicModal;
