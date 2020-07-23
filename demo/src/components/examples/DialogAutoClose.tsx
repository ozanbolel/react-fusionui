import * as React from "react";
import { useDialog } from "react-fusionui";
import Section from "../app/Section/Section";
import Snippet from "../app/Snippet/Snippet";

const DialogAutoClose: React.FC = () => {
  const dialog = useDialog();

  const code = `
  const dialog = useDialog();

  return <button onClick={() => dialog("Click outside to close.", [{ label: "Ok" }], { autoclose: true })}>Open Dialog</button>;
  `;

  const preview = <button onClick={() => dialog("Click outside to close.", [{ label: "Ok" }], { autoclose: true })}>Open Dialog</button>;

  return (
    <Section title="Dialog with Auto Close">
      <Snippet code={code} preview={preview} />
    </Section>
  );
};

export default DialogAutoClose;
