import * as React from "react";
import { FusionContainer } from "react-fusionui";
import Home from "./components/Home/Home";
import "./styles/app.scss";
import css from "./styles/fusion.module.scss";

const App: React.FC = () => {
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
        actionLabel: css.actionLabel
      }}
    >
      <Home />
    </FusionContainer>
  );
};

export default App;
