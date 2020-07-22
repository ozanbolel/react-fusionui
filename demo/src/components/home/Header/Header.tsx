import * as React from "react";
import css from "./Header.module.scss";

const Header: React.FC = () => {
  return (
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
  );
};

export default Header;
