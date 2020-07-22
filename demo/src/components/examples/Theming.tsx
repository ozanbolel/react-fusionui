import * as React from "react";
import Section from "../app/Section/Section";
import Snippet from "../app/Snippet/Snippet";

const Theming: React.FC = () => {
  const code = `
  import React from "react";
  import { FusionContainer } from "react-fusionui";
  import css from "./App.module.css";

  const MyApp = () => {
    return (
      <FusionContainer
        modalClassNames={{
          container: css.container,
          modal: css.modal
        }}
        dialogClassNames={{
          container: css.container,
          dialog: css.dialog,
          content: css.content,
          actionContainer: css.actionContainer,
          action: css.action,
          actionLabel: css.actionLabel,
          highlight: css.highlight
        }}
      >
      ...
      </FusionContainer>
    );
  };

  export default MyApp;
  `;

  return (
    <Section title="Theming">
      <Snippet code={code} />
    </Section>
  );
};

export default Theming;
