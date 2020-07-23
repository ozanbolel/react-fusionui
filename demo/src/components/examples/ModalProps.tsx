import * as React from "react";
import { useModal, FusionModalComponent, FusionModalConfig } from "react-fusionui";
import Section from "../app/Section/Section";
import Snippet from "../app/Snippet/Snippet";

const ModalProps: React.FC = () => {
  const modal = useModal();

  const code = `
  const modal = useModal();

  const Modal = ({ text }) => {
    return <h2>{text}</h2>;
  };

  const config = {
    props: { text: "Hi there!" },
    autoclose: true
  };

  return <button onClick={() => modal(Modal, config)}>Open Modal</button>;
  `;

  const Modal: FusionModalComponent<{ text?: string }> = ({ text }) => {
    return <h2>{text}</h2>;
  };

  const config: FusionModalConfig = {
    props: { text: "Hi there!" },
    autoclose: true
  };

  const preview = <button onClick={() => modal(Modal, config)}>Open Modal</button>;

  return (
    <Section title="Modal with Props">
      <Snippet code={code} preview={preview} />
    </Section>
  );
};

export default ModalProps;
