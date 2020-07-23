import * as React from "react";
import { useDialog, FusionDialogAction } from "react-fusionui";
import Section from "../app/Section/Section";
import Snippet from "../app/Snippet/Snippet";

const BasicDialogTS: React.FC = () => {
  const dialog = useDialog();

  const code = `
  import * as React from "react";
  import { useDialog, FusionDialogAction } from "react-fusionui";

  const MyComponent = () => {
    const dialog = useDialog();

    const actions: FusionDialogAction[] = [{ label: "Bye." }];

    return <button onClick={() => dialog("Hi there!", actions)}>Open Dialog</button>;
  };

  export default MyComponent;
  `;

  const actions: FusionDialogAction[] = [{ label: "Bye." }];

  const preview = <button onClick={() => dialog("Hi there!", actions)}>Open Dialog</button>;

  return (
    <Section title="Basic Dialog with TypeScript">
      <Snippet code={code} preview={preview} language="tsx" />
    </Section>
  );
};

export default BasicDialogTS;
