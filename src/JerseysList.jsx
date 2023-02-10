import React from "react";
import Jerseys from "./Jerseys";
import PropTypes from "prop-types";

function JerseysList () {
  return (
    <React.Fragment>
      <div id="jerseys-list">
      {props.jerseysList.map((jerseys) => 
        <Item name={jerseys.name}
          price={jerseys.price}
          quantity={jerseys.quantity}
          id={jerseys.id} />
      )}
      </div>

    </React.Fragment>
  )
}

JerseysList.PropTypes = {
  jerseysList: PropTypes.array
}

export default JerseysList;