import * as React from "react";
import css from "./Section.module.scss";

const Section: React.FC<{ title?: string }> = ({ children, title }) => {
  return (
    <div className={css.section}>
      {title ? <div className={css.title}>{title}</div> : null}
      {children}
    </div>
  );
};

export default Section;
