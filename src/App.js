import React from "react";

import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const App = () => {
  return (
    <div>
      <Header />
      <Modal />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
