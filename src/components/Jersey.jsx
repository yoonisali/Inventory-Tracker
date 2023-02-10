import React from "react";
import PropTypes from "prop-types";

function Jersey (props) {
  return (
    <React.Fragment>
      <div id="jersey" onClick={() => props.whenJerseyClicked(props.id)}>
        <h4>{props.name} | {props.date} Edition</h4>
        <h4>Price: ${props.price}</h4>
      </div>


    </React.Fragment>
  )
}

Jersey.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  whenJerseyClicked: PropTypes.func
}

export default Jersey;