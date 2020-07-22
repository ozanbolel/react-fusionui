import * as React from "react";
import css from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={css.header}>
      <div className={css.title}>Nuclear power-up for your UI.</div>

      <div className={css.desc}>
        <span>Open modals and dialogs with ease! </span>
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </div>

      <div className={css.desc}>
        <span>FusionUI is an </span>
        <span className={css.bold}>unopinionated</span>
        <span> and minimalist library to power-up your UI.</span>
      </div>
    </div>
  );
};

export default Header;
