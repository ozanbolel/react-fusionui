import * as React from "react";
import { useFusionContext } from "../utils";
import { Dialog } from "../elements";

export const DialogMapper: React.FC = () => {
  const { state } = useFusionContext();

  return (
    <>
      {state.dialogs.map((dialog) => (
        <Dialog key={dialog.id} id={dialog.id} content={dialog.content} actions={dialog.actions} config={dialog.config} />
      ))}
    </>
  );
};
