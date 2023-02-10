import React from "react";
import NewJerseyForm from "./NewJerseyForm";
import JerseysList from "./JerseysList";

class JerseyControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainJerseyList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewJerseyToList = (newJersey) => {
    const newMainJerseyList = this.state.mainJerseyList.concat(newJersey);
    this.setState({
      mainJerseyList: newMainJerseyList,
      formVisibleOnPage: false
    });
  }

  render() {
    let currentlyVisableState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisableState = <NewJerseyForm onNewJerseyCreation={this.handleAddingNewJerseyToList}/>;
      buttonText = "Return to Jerseys List"; 
    } else {
      currentlyVisableState = <JerseysList jerseyList={this.state.mainJerseyList}/>;
      buttonText = "Add a Jersey!";
    }
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>{buttonText}</button>
        {currentlyVisableState}
      </React.Fragment>
    )

  }
}

export default JerseyControl;