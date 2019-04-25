import React from "react";
import "./App.css";

// Components
import Header from "./components/header/Header";
import MainContent from "./components/MainContent/MainContent";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="main-container">
      <Header />
      <MainContent />
      <Card />
    </div>
  );
}

export default App;
