import * as React from "react";
import { FusionContainer, useModal, FusionModalComponent, useDialog } from "react-fusionui";
import css from "./App.module.css";

const Modal: FusionModalComponent = () => {
  const dialog = useDialog();

  return <button onClick={() => dialog("Hello!", [{ label: "Ok" }, { label: "Cancel" }])}>Open Dialog</button>;
};

const Home: React.FC = () => {
  const modal = useModal();

  return <button onClick={() => modal(Modal, { autoclose: true })}>Open Modal</button>;
};

export default function App() {
  return (
    <FusionContainer
      modalClassNames={{
        container: css.modalContainer,
        modal: css.modal
      }}
      dialogClassNames={{
        container: css.dialogContainer,
        dialog: css.dialog,
        content: css.dialogContent,
        action: css.dialogAction
      }}
    >
      <Home />
    </FusionContainer>
  );
}
