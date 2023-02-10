import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewJerseyForm(props) {
  return (
    <React.Fragment>
        <ReusableForm 
        formSubmissionHandler={handleNewJerseyFormSubmission}
        buttonText="Add Jersey!" />
    </React.Fragment>
  );

  function handleNewJerseyFormSubmission(event) {
    event.preventDefault();
    props.onNewJerseyCreation({
      name: event.target.name.value, 
      price: event.target.price.value, 
      date: event.target.date.value,
      quantity: event.target.quantity.value,
      id: v4()
    });
  }
}

NewJerseyForm.propTypes = {
  onNewJerseyCreation: PropTypes.func
};


export default NewJerseyForm;



