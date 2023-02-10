import React from "react";
import PropTypes from "prop-types";

function Jersey (props) {
  return (
    <React.Fragment>
      <div id="jersey">
        <h4>Name: {props.name}</h4>
        <h4>Price: ${props.price}</h4>
      </div>


    </React.Fragment>
  )
}

Jersey.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number
}

export default Jersey;