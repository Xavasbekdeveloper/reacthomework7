import { Fragment, useState } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Products from "./components/products";
import Device from "./components/device";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Hero />
        <Products />
        <Device />
      </main>
    </Fragment>
  );
}

export default App;
