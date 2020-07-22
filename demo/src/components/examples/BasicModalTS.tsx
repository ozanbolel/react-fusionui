import * as React from "react";
import { useModal, FusionModalComponent } from "react-fusionui";
import Section from "../app/Section/Section";
import Snippet from "../app/Snippet/Snippet";

const BasicModalTS: React.FC = () => {
  const modal = useModal();

  const code = `
  import * as React from "react";
  import { FusionModalComponent, useModal } from "react-fusionui";

  const Modal: FusionModalComponent = ({ closeModal }) => {
    return <h2 onClick={() => closeModal()}>Click to Close</h2>;
  };

  const MyComponent: React.FC = () => {
    const modal = useModal();

    return <button onClick={() => modal(Modal)}>Open Modal</button>;
  };

  export default MyComponent;
  `;

  const Modal: FusionModalComponent = ({ closeModal }) => {
    return <h2 onClick={() => closeModal()}>Click to Close</h2>;
  };

  const preview = <button onClick={() => modal(Modal)}>Open Modal</button>;

  return (
    <Section title="Basic Modal with TypeScript">
      <Snippet code={code} preview={preview} language="tsx" />
    </Section>
  );
};

export default BasicModalTS;
