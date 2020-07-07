import React from "react";
import { getSmurf } from "../actions/smurfActions";
import { connect } from "react-redux";

const Smurf = props => {
  console.log(props)
  return (


    <div>
     
      
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

export default connect(
  mapStateToProps,
  { getSmurf }
)(Smurf);


