import React from "react";
import NewJerseyForm from "./NewJerseyForm";
import JerseysList from "./JerseysList";
import JerseyDetail from "./JerseyDetail";

class JerseyControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainJerseyList: [],
      selectedJersey: null
    };
  }

  handleClick = () => {
    if (this.state.selectedJersey !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedJersey: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewJerseyToList = (newJersey) => {
    const newMainJerseyList = this.state.mainJerseyList.concat(newJersey);
    this.setState({
      mainJerseyList: newMainJerseyList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedJersey = (id) => {
    const selectedJersey = this.state.mainJerseyList.filter(jersey => jersey.id === id)[0];
    this.setState({ selectedJersey: selectedJersey });
  }

  render() {
    let currentlyVisableState = null;
    let buttonText = null;
    if (this.state.selectedJersey !== null) {
      currentlyVisableState = 
        <JerseyDetail
          jersey={this.state.selectedJersey} />
          buttonText = "Return to Jerseys List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisableState = <NewJerseyForm onNewJerseyCreation={this.handleAddingNewJerseyToList}/>;
      buttonText = "Return to Jerseys List"; 
    } else {
      currentlyVisableState = <JerseysList jerseyList={this.state.mainJerseyList} onJerseySelection={this.handleChangingSelectedJersey}/>;
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