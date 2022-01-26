import "./App.css";

import React, { useState, useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop.js";
import { Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Project1 from "./pages/project1";
import Project2 from "./pages/project3";
import Project3 from "./pages/project2";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 890 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/project1" component={Project1} />
        <Route path="/project2" component={Project2} />
        <Route path="/project3" component={Project3} />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
