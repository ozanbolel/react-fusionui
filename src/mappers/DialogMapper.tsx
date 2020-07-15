import * as React from "react";
import { useFusionContext } from "../utils";
import { AnimatePresence } from "framer-motion";
import { Dialog } from "../elements";

export const DialogMapper: React.FC = () => {
  const { state } = useFusionContext();

  return (
    <AnimatePresence>
      {state.dialogs.map((dialog) => (
        <Dialog key={dialog.id} id={dialog.id} content={dialog.content} actions={dialog.actions} config={dialog.config} />
      ))}
    </AnimatePresence>
  );
};
