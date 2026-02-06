import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Projects from "./component/Projects";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
