import React from "react";
import SmurfOrderForm from "./components/form";
//import SmurfMenuForm from "./components/form";
import Smurf from "./components/smurfVillage";
import SmurfEntree from "./components/menuDisplay"
//import {getSmurf} from "./actions/smurfActions"
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <h1>Gargamel's Golden Quick Bites</h1>
      <h2>You conjure them, <br></br>we fry em'!</h2>
      <SmurfOrderForm />
      <Smurf />
   
    </div>
  );
}
