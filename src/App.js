import React from "react";
import Navigation from "./navigation/navigation";
import Header from "./header/header";
import ListSection from "./list_section/list_section";
import BoxSection from "./box_section/box_section";
import Footer from "./footer/footer";
import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <ListSection />
      <BoxSection />
      <Footer />
    </div>
  );
}

export default App;
