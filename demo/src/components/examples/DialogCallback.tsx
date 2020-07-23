import * as React from "react";
import { useDialog, FusionDialogAction } from "react-fusionui";
import Section from "../app/Section/Section";
import Snippet from "../app/Snippet/Snippet";

const DialogCallback: React.FC = () => {
  const dialog = useDialog();

  const code = `
  const dialog = useDialog();

  const actions = [
    {
      label: "Alert Me",
      callback: () => alert("Done.")
    },
    {
      label: "Close"
    }
  ];

  return <button onClick={() => dialog("Hi there!", actions)}>Open Dialog</button>;
  `;

  const actions: FusionDialogAction[] = [
    {
      label: "Alert Me",
      callback: () => alert("Done.")
    },
    {
      label: "Close"
    }
  ];

  const preview = <button onClick={() => dialog("Hi there!", actions)}>Open Dialog</button>;

  return (
    <Section title="Dialog with Callback">
      <Snippet code={code} preview={preview} />
    </Section>
  );
};

export default DialogCallback;
