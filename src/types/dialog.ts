import * as React from "react";

export interface IDialogClassNames {
  container?: string;
  dialog?: string;
  content?: string;
  actionContainer?: string;
  action?: string;
  actionLabel?: string;
  highlight?: string;
}

export interface IDialogAction {
  label: string;
  callback?: Function;
  highlight?: boolean;
}

export interface IDialogConfig {
  autoclose?: boolean;
}

export interface IDialogObject {
  id: string;
  content: React.ReactNode;
  actions: IDialogAction[];
  config?: IDialogConfig;
}
