import * as React from "react";
import { useModal, FusionModalComponent, useDialog } from "react-fusionui";
import css from "./Home.module.scss";

const Modal: FusionModalComponent = () => {
  const dialog = useDialog();

  return <button onClick={() => dialog("Hello!", [{ label: "Ok" }, { label: "Cancel" }], { autoclose: true })}>Open Dialog</button>;
};

const Home: React.FC = () => {
  const modal = useModal();
  const dialog = useDialog();

  return (
    <div>
      <div className={css.header}>
        <div className={css.title}>Nuclear power-up for your UI.</div>
        <div className={css.desc}>
          Open modals and dialogs with ease!{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>{" "}
          FusionUI is an <span className={css.bold}>unopinionated</span> and minimalist library to power-up your UI.
        </div>
      </div>

      <div>
        <button onClick={() => modal(Modal, { autoclose: true })}>Open Modal</button>
      </div>

      <div>
        <button onClick={() => dialog("What now?", [{ label: "Ok" }, { label: "Cancel" }], { autoclose: true })}>Open Dialog</button>
      </div>
    </div>
  );
};

export default Home;
