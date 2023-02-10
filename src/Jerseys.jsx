import React from "react";
import PropTypes from "prop-types";

function Jerseys (props) {
  return (
    <React.Fragment>
      <div id="jerseys">
        <h4>Jersey Name: {props.name}</h4>
        <h4>Jersey Price: ${props.price}</h4>
      </div>


    </React.Fragment>
  )
}

Jerseys.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number
}

export default Jerseys;