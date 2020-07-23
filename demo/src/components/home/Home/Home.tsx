import * as React from "react";
import css from "./Home.module.scss";
import Topbar from "../Topbar/Topbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Install from "../../examples/Installation";
import Theming from "../../examples/Theming";
import BasicModal from "../../examples/BasicModal";
import BasicModalTS from "../../examples/BasicModalTS";
import ModalAutoClose from "../../examples/ModalAutoClose";
import ModalProps from "../../examples/ModalProps";
import ModalLifecycle from "../../examples/ModalLifecycle";
import BasicDialog from "../../examples/BasicDialog";
import BasicDialogTS from "../../examples/BasicDialogTS";
import DialogAutoClose from "../../examples/DialogAutoClose";
import DialogCallback from "../../examples/DialogCallback";
import DialogHighlight from "../../examples/DialogHighlight";

const Home: React.FC = () => {
  return (
    <>
      <Topbar />

      <div className={css.home}>
        <Topbar placeholder />
        <Header />
        <Install />
        <Theming />
        <BasicModal />
        <BasicModalTS />
        <ModalAutoClose />
        <ModalProps />
        <ModalLifecycle />
        <BasicDialog />
        <BasicDialogTS />
        <DialogAutoClose />
        <DialogCallback />
        <DialogHighlight />
        <Footer />
      </div>
    </>
  );
};

export default Home;
