import React from "react";
import CardList from "./CardList";
import data from "./data";
import "./styles.css";

const App = () => {
  return (
    <div className="app">
      <CardList data={data} />
    </div>
  );
};

export default App;
