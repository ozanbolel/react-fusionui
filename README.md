# React FusionUI ☢️

[![npm](https://img.shields.io/npm/v/react-fusionui.svg)](https://www.npmjs.com/package/react-fusionui) [![npm downloads](https://img.shields.io/npm/dt/react-fusionui.svg)](https://www.npmjs.com/package/react-fusionui)

Open modals and dialogs with ease! 🚀 FusionUI is an **unopinionated** and minimalist library to power-up your UI.

## **Installation**

```bash
# npm
npm i react-fusionui

# yarn
yarn add react-fusionui
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

## **Demo**

[ozanbolel.github.io/react-fusionui](https://ozanbolel.github.io/react-fusionui)

## **Theming**

```jsx
import React from "react";
import { FusionContainer } from "react-fusionui";
import css from "./App.module.css";

export default function App() {
  return (
    <FusionContainer
      modalClassNames={{
        container: css.container,
        modal: css.modal
      }}
      dialogClassNames={{
        container: css.container,
        dialog: css.dialog,
        content: css.content,
        actionContainer: css.actionContainer,
        action: css.action,
        actionLabel: css.actionLabel,
        highlight: css.highlight
      }}
    >
      <Home />
    </FusionContainer>
  );
}
```

## **API**

### **useModal**

##### Args

| Arg             | Description                                    |        Type         | Required |
| --------------- | ---------------------------------------------- | :-----------------: | :------: |
| **`Component`** | Component you want to render inside the modal. | FunctionalComponent |   YES    |
| **`config`**    | Modal configuration.                           |       Object        |          |

##### Config Object

| Name            | Description                                                         |  Type   | Required |
| --------------- | ------------------------------------------------------------------- | :-----: | :------: |
| **`props`**     | Props you want to pass to the component you specified.              | Object  |          |
| **`autoclose`** | Should your component close when user clicks outside of your modal. | Boolean |          |

### **useDialog**

##### Args

| Arg           | Description                                |   Type    | Required |
| ------------- | ------------------------------------------ | :-------: | :------: |
| **`content`** | Content of the dialog.                     | ReactNode |   YES    |
| **`actions`** | Actions which will be rendered as buttons. |   Array   |   YES    |
| **`config`**  | Dialog configuration.                      |  Object   |          |

##### Action Object

| Name            | Description                           |   Type   | Required |
| --------------- | ------------------------------------- | :------: | :------: |
| **`label`**     | Label of the button.                  |  String  |   YES    |
| **`callback`**  | Will run when the button is clicked.  | Function |          |
| **`highlight`** | Apply highlight styles to the button. | Boolean  |          |

##### Config Object

| Name            | Description                                                     |  Type   | Required |
| --------------- | --------------------------------------------------------------- | :-----: | :------: |
| **`autoclose`** | Should the dialog close when user clicks outside of the dialog. | Boolean |          |

## License

[MIT](https://github.com/ozanbolel/react-fusionui/blob/master/LICENSE)
