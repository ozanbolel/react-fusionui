# react-fusionui

> Nuclear power-up for your UI.

[![npm](https://img.shields.io/npm/v/react-fusionui.svg)](https://www.npmjs.com/package/react-fusionui) [![npm downloads](https://img.shields.io/npm/dt/react-fusionui.svg)](https://www.npmjs.com/package/react-fusionui) ![last commit](https://img.shields.io/github/last-commit/ozanbolel/react-fusionui.svg)

## **Installation**

```bash
npm i react-fusionui
```

## **Basic Usage**

```jsx
import React from "react";
import { FusionContainer, useModal } from "react-fusionui";

const Modal = ({ isAnimationDone, isClosing, closeModal }) => {
  return <h1>Modal</h1>;
};

const Home = () => {
  const modal = useModal();

  return <button onClick={() => modal(Modal)}>Open Modal</button>;
};

export default function App() {
  return (
    <FusionContainer>
      <Home />
    </FusionContainer>
  );
}
```

> You need to wrap your app within `FusionContainer`.
> FusionUI passes `isAnimationDone`, `isClosing` and `closeModal` props to your modal component.

## **Styling**

```jsx
import React from "react";
import { FusionContainer } from "react-fusionui";
import css from "./App.module.css";

export default function App() {
  return (
    <FusionContainer
      modalClassNames={{
        container: css.modalContainer,
        modal: css.modal
      }}
      dialogClassNames={{
        container: css.dialogContainer,
        dialog: css.dialog,
        content: css.dialogContent,
        action: css.dialogAction
      }}
    >
      <Home />
    </FusionContainer>
  );
}
```

## **Hooks**

### **useModal**

#### Args

| Arg             | Description                                    |         Type         | Required |
| --------------- | ---------------------------------------------- | :------------------: | :------: |
| **`Component`** | Component you want to render inside the modal. | Functional Component |   YES    |
| **`config`**    | Modal configuration.                           |        Object        |          |

#### Config

| Name            | Description                                                         |  Type   | Required |
| --------------- | ------------------------------------------------------------------- | :-----: | :------: |
| **`props`**     | Props you want to pass to the component you specified.              | Object  |          |
| **`autoclose`** | Should your component close when user clicks outside of your modal. | Boolean |          |

### **useDialog**

#### Args

| Arg           | Description                                                    |   Type    | Required |
| ------------- | -------------------------------------------------------------- | :-------: | :------: |
| **`content`** | Props of the component. Must be: `props={ this.props }`        | ReactNode |   YES    |
| **`actions`** | The path to link to.                                           |   Array   |   YES    |
| **`config`**  | Name of the animation. Valid values: `fade` , `slide` , `zoom` |  Object   |          |

#### Action

| Name           | Description                          |   Type   | Required |
| -------------- | ------------------------------------ | :------: | :------: |
| **`label`**    | Label of the button.                 |  String  |   YES    |
| **`callback`** | Will run when the button is clicked. | Function |          |

#### Config

| Name            | Description                                                     |  Type   | Required |
| --------------- | --------------------------------------------------------------- | :-----: | :------: |
| **`autoclose`** | Should the dialog close when user clicks outside of the dialog. | Boolean |          |
