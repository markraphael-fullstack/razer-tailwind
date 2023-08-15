import { useState } from "react";
import "./App.css";

import NavBar from "./components/nav-bar";
import Hero from "./components/hero-section";
import Features from "./components/features";
import Carousel from "./components/carousel";
import Banner from "./components/banner-section";
import ProductSection from "./components/products-section";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Carousel />
      <Banner />
      <ProductSection />
    </>
  );
}

export default App;
