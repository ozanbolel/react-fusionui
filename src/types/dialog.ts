import * as React from "react";

export interface IDialogClassNames {
  container?: string;
  dialog?: string;
  content?: string;
  actionContainer?: string;
  action?: string;
  actionLabel?: string;
}

export interface IDialogAction {
  label: string;
  callback?: Function;
}

export interface IDialogConfig {
  autoclose?: boolean;
}

export interface IDialogObject {
  id: string;
  content: string | React.ReactNode;
  actions: IDialogAction[];
  config?: IDialogConfig;
}
