import * as React from "react";
import { useDialog, FusionDialogAction } from "react-fusionui";
import Section from "../app/Section/Section";
import Snippet from "../app/Snippet/Snippet";

const DialogHighlight: React.FC = () => {
  const dialog = useDialog();

  const code = `
  const dialog = useDialog();

  const actions = [
    {
      label: "Delete",
      highlight: true
    },
    {
      label: "Close"
    }
  ];

  return <button onClick={() => dialog("Are you sure?", actions)}>Open Dialog</button>;
  `;

  const actions: FusionDialogAction[] = [
    {
      label: "Delete",
      highlight: true
    },
    {
      label: "Close"
    }
  ];

  const preview = <button onClick={() => dialog("Are you sure?", actions)}>Open Dialog</button>;

  return (
    <Section title="Dialog with Highlight">
      <Snippet code={code} preview={preview} />
    </Section>
  );
};

export default DialogHighlight;
