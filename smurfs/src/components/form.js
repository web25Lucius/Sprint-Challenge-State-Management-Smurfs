import React, { useState } from "react";
import SmurfEntree from "./menuDisplay";
import { connect } from "react-redux";
import { nextIngredient } from "../actions/index";

const Form = props => {
  
  const [formState, setFormState] = useState({
    name: "",
    age: 0,
    height: ""
  });

  
  const inputChange = e => {
    e.persist();
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const formSubmit = e => {
    e.preventDefault();
    console.log("Conjured Smurf is on the way. Order received!", formState);

    setFormState({
      name: "",
      age: 0,
      height: ""
    });
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={formState.name}
            onChange={inputChange}
          />
        </label>
        <label htmlFor="age">
          Age
          <input
            type="text"
            name="age"
            id="age"
            value={formState.age}
            onChange={inputChange}
          />
        </label>
        <label htmlFor="height">
          Height
          <input
            name="height"
            id="height"
            value={formState.height}
            onChange={inputChange}
          />
        </label>
        <button
          onClick={() => {
            nextIngredient(formState);
          }}
        >
          Submit Conjured Order
        </button>
      </form>
      <div>
        <SmurfEntree />
      </div>
    </>
  );
};

export default connect(
  null,
  { nextIngredient }
)(Form);
