import * as React from "react";
import { FusionContainer, useModal, FusionModalComponent } from "react-fusionui";
import css from "./App.module.css";

const Modal: FusionModalComponent<{ text?: string }> = ({ text }) => {
  return <h1>{text ? text : "No text."}</h1>;
};

const Home: React.FC = () => {
  const modal = useModal();

  return <h3 onClick={() => modal(Modal, { autoclose: true, props: { text: "Hello!" } })}>Open Modal</h3>;
};

export default function App() {
  return (
    <FusionContainer
      modalClassNames={{
        container: css.modalContainer,
        modal: css.modal
      }}
    >
      <Home />
    </FusionContainer>
  );
}
