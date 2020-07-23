import { ModalComponent, IModalConfig, IDialogAction, IDialogConfig } from "./types";

export * from "./FusionContainer";
export * from "./hooks";

export type FusionModalComponent<P = {}> = ModalComponent<P>;
export type FusionModalConfig = IModalConfig;
export type FusionDialogAction = IDialogAction;
export type FusionDialogConfig = IDialogConfig;
