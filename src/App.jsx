import { Fragment, useState } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Products from "./components/products";
import Device from "./components/device";
import ProducInfo from "./components/product info";
import Faq from "./components/faq";
import Footer from "./components/footer";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
        <Products />
        <Device />
        <ProducInfo />
        <Faq />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
