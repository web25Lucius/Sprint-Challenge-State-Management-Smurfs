import React from "react";
import { connect } from "react-redux";

const SmurfEntree = props => {
  return (
    <div>
      <h1>Bon Appétit</h1>
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
      <h3>{props.height}</h3>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    name: state.name,
    age: state.age,
    height: state.height
  };
};

export default connect(mapStateToProps)(SmurfEntree);
