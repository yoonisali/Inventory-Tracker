import React from "react";
import Jersey from "./Jersey";
import PropTypes from "prop-types";

function JerseysList (props) {
  return (
    <React.Fragment>
      <div id="jersey-list">
      {props.jerseyList.map((jersey) => 
        <Jersey 
          whenJerseyClicked = { props.onJerseySelection }
          name={jersey.name}
          price={jersey.price}
          quantity={jersey.quantity}
          id={jersey.id} 
          key={jersey.id} />
      )}
      </div>

    </React.Fragment>
  )
}

JerseysList.propTypes = {
  jerseyList: PropTypes.array,
  onJerseySelection: PropTypes.func
}

export default JerseysList;