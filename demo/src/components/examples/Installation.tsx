import * as React from "react";
import Section from "../app/Section/Section";
import Snippet from "../app/Snippet/Snippet";

const Installation: React.FC = () => {
  const codeBash = `
  # npm
  npm i react-fusionui

  # yarn
  yarn add react-fusionui
  `;

  const codeApp = `
  import React from "react";
  import { FusionContainer } from "react-fusionui";

  const MyApp = () => {
    return (
      <FusionContainer>
      ...
      </FusionContainer>
    );
  };

  export default MyApp;
  `;

  return (
    <Section title="Installation">
      <Snippet code={codeBash} language="bash" margin />
      <Snippet code={codeApp} />
    </Section>
  );
};

export default Installation;
