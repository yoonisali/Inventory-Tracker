import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewJerseyForm(props) {
  return (
    <React.Fragment>
        <form onSubmit={handleNewJerseyFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Jersey Name' />
        <input
          type='number'
          name='price'
          placeholder='Jersey Price' />
        <input
          name='quantity'
          placeholder='Jersey Quantity' />
        <button type='submit'>Add!</button>
      </form>

    </React.Fragment>
  );

  function handleNewJerseyFormSubmission(event) {
    event.preventDefault();
    props.onNewJerseyCreation({
      name: event.target.name.value, 
      price: event.target.price.value, 
      quantity: event.target.quantity.value, 
      id: v4()
    });
  }
}

NewJerseyForm.propTypes = {
  onNewJerseyCreation: PropTypes.func
};


export default NewJerseyForm;



