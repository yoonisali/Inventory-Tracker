import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTicketForm (props) {
  const { jersey } = props;
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditTicketFormSubmission}
        buttonText="Update Jersey!" />
    </React.Fragment>
  );

  function handleEditTicketFormSubmission(event) {
    event.preventDefault();
    props.onEditJersey({name: event.target.name.value, 
      price: event.target.price.value, 
      date: event.target.date.value,
      quantity: event.target.quantity.value,
      id: jersey.id
    });
  }
}

EditTicketForm.propTypes = {
  jersey: PropTypes.object,
  onEditJersey: PropTypes.func
}

export default EditTicketForm;