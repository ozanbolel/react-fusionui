import * as React from "react";
import css from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={css.footer}>
      <a href="https://twitter.com/oznbll" target="_blank" rel="noopener noreferrer">
        <span>Created with </span>
        <span role="img" aria-label="love">
          ❤️
        </span>
        <span> by Ozan Bolel</span>
      </a>
    </div>
  );
};

export default Footer;
