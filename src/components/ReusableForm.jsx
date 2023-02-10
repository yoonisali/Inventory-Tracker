import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Jersey Name' />
        <input
          type='number'
          name='price'
          placeholder='Jersey Price' />
          <input
          type="number" 
          min="1970" 
          max="2023" 
          name='date'
          placeholder='Date' />
        <input
          name='quantity'
          placeholder='Jersey Quantity' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;