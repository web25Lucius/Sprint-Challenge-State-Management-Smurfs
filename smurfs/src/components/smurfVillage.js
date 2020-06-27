import React from "react";
import { postSmurf, getSmurf } from "../actions/smurfActions";
import { connect } from "react-redux";

const Smurf = props => {
  return (


    <div>
      <p>Your conjured order: </p>
      <div>
        <h3>{props.name}</h3>
        <h3>{props.age}</h3>
        <h3>{props.height}</h3>
      </div>
      <br></br>
      <br></br>
      <p>Your Daily Special:</p>
      <div>
        <h3>{props.name}</h3>
        <h3>{props.age}</h3>
        <h3>{props.height}</h3>
      </div>
      
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfSetup: state.smurfSetup,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getSmurf }
)(Smurf);
