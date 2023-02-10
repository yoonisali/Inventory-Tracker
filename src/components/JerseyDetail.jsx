import React from "react";
import PropTypes from "prop-types";

function JerseyDetail(props) {
  const { jersey } = props;

  return (
    <React.Fragment>
      <div id="jersey-details">
        <h4>Name: {jersey.name}</h4>
        <h4>Price: {jersey.price}</h4>
        <h4>Quantity: {jersey.quantity}</h4>
      </div>
    </React.Fragment>
  );
}

JerseyDetail.propTypes = {
  jersey: PropTypes.object
}

export default JerseyDetail;