import React from "react";
import Form from "./components/form";
import Smurfs from "./components/smurfVillage";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Gargamel's Golden Quick Bites</h1>
      <h2>You conjure them, we fry em'</h2>
      <Form />
      <Smurfs />
    </div>
  );
}
