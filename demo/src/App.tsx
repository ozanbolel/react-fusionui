import * as React from "react";
import { FusionContainer, useModal, FusionModalComponent } from "react-fusionui";
import css from "./App.module.css";

const Modal: FusionModalComponent<{ text?: string }> = ({ text }) => {
  return <h1>{text ? text : "No text."}</h1>;
};

const Home: React.FC = () => {
  const [text, setText] = React.useState("Hello!");
  const modal = useModal();

  const openModal = () => modal(Modal, { props: { text }, autoclose: true });

  React.useEffect(() => {
    openModal();

    setTimeout(() => {
      setText("Hellooo!!!!");
    }, 400);
  }, []);

  return <h3 onClick={() => openModal()}>{text}</h3>;
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
