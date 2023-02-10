import React from "react";
import Jersey from "./Jersey";
import PropTypes from "prop-types";

function JerseysList (props) {
  return (
    <React.Fragment>
      <div id="jersey-list">
      {props.jerseyList.map((jersey) => 
        <Jersey name={jersey.name}
          price={jersey.price}
          quantity={jersey.quantity}
          id={jersey.id} />
      )}
      </div>

    </React.Fragment>
  )
}

JerseysList.propTypes = {
  jerseyList: PropTypes.array
}

export default JerseysList;