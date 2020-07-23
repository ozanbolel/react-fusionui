import * as React from "react";
import { useModal, FusionModalComponent } from "react-fusionui";
import Section from "../app/Section/Section";
import Snippet from "../app/Snippet/Snippet";

const ModalLifecycle: React.FC = () => {
  const modal = useModal();

  const code = `
  const modal = useModal();

  const Modal = ({ isAnimationDone, isClosing }) => {
    useEffect(() => {
      if (!isAnimationDone) {
        alert("Modal added.");
      }

      if (isAnimationDone && !isClosing) {
        alert("Modal animation is done.");
      }

      if (isClosing) {
        alert("Modal is closing.");
      }

      return () => {
        if (isClosing) {
          alert("Modal removed.");
        }
      };
    }, [isAnimationDone, isClosing]);

    return <h2>Click outside to close.</h2>;
  };

  return <button onClick={() => modal(Modal, { autoclose: true })}>Open Modal</button>;
  `;

  const Modal: FusionModalComponent = ({ isAnimationDone, isClosing }) => {
    React.useEffect(() => {
      if (!isAnimationDone) {
        alert("Modal added.");
      }

      if (isAnimationDone && !isClosing) {
        alert("Modal animation is done.");
      }

      if (isClosing) {
        alert("Modal is closing.");
      }

      return () => {
        if (isClosing) {
          alert("Modal removed.");
        }
      };
    }, [isAnimationDone, isClosing]);

    return <h2>Click outside to close.</h2>;
  };

  const preview = <button onClick={() => modal(Modal, { autoclose: true })}>Open Modal</button>;

  return (
    <Section title="Modal Component Lifecycle">
      <Snippet code={code} preview={preview} />
    </Section>
  );
};

export default ModalLifecycle;
