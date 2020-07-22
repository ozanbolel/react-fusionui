import * as React from "react";
import { useDialog } from "react-fusionui";
import Section from "../app/Section/Section";
import Snippet from "../app/Snippet/Snippet";

const BasicDialog: React.FC = () => {
  const dialog = useDialog();

  const code = `
  import React from "react";
  import { useDialog } from "react-fusionui";

  const MyComponent = () => {
    const dialog = useDialog();

    return <button onClick={() => dialog("Hi there!", [{ label: "Bye." }])}>Open Dialog</button>;
  };

  export default MyComponent;
  `;

  const preview = <button onClick={() => dialog("Hi there!", [{ label: "Bye." }])}>Open Dialog</button>;

  return (
    <Section title="Basic Dialog">
      <Snippet code={code} preview={preview} />
    </Section>
  );
};

export default BasicDialog;
