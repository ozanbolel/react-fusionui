import * as React from "react";
import css from "./Home.module.scss";
import Topbar from "../Topbar/Topbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Install from "../../examples/Installation";
import Theming from "../../examples/Theming";
import BasicModal from "../../examples/BasicModal";
import BasicModalTS from "../../examples/BasicModalTS";
import BasicDialog from "../../examples/BasicDialog";

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
        <BasicDialog />
        <Footer />
      </div>
    </>
  );
};

export default Home;
