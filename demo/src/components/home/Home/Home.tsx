import * as React from "react";
import css from "./Home.module.scss";
import Topbar from "../Topbar/Topbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Install from "../../examples/Installation";
import BasicModal from "../../examples/BasicModal";
import BasicModalTS from "../../examples/BasicModalTS";
import BasicDialog from "../../examples/BasicDialog";

const Home: React.FC = () => {
  return (
    <div className={css.home}>
      <Topbar />
      <Header />
      <Install />
      <BasicModal />
      <BasicModalTS />
      <BasicDialog />
      <Footer />
    </div>
  );
};

export default Home;
