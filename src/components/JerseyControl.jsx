import React from "react";
import NewJerseyForm from "./NewJerseyForm";
import JerseysList from "./JerseysList";
import JerseyDetail from "./JerseyDetail";
import EditJerseyForm from "./EditJerseyForm"

class JerseyControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainJerseyList: [],
      selectedJersey: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedJersey !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedJersey: null,
        editing: false
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

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingJerseyInList = (jerseyToEdit) => {
    const editedMainJerseyList = this.state.mainJerseyList
          .filter(jersey => jersey.id !== this.state.selectedJersey.id)
          .concat(jerseyToEdit);
          this.setState({
            mainJerseyList: editedMainJerseyList,
            editing: false,
            selectedJersey: null
          })
  }

  handleDeletingJersey = (id) => {
    const newMainJerseyList = this.state.mainJerseyList.filter(jersey => jersey.id !== id);
    this.setState({
      mainJerseyList: newMainJerseyList,
      selectedJersey: null
    });
  }

  handleSellJersey = (jersey) => {
    jersey.quantity-= 1;
    this.setState({
      selectedJersey: jersey
    });
    } 

  render() {
    let currentlyVisableState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisableState = 
        <EditJerseyForm 
          jersey={this.state.selectedJersey}
          onEditJersey={this.handleEditingJerseyInList} />
          buttonText = "Return to Jerseys List";
    } else if (this.state.selectedJersey !== null) {
      currentlyVisableState = 
        <JerseyDetail
          jersey={this.state.selectedJersey} 
          onClickingEdit={this.handleEditClick}
          onClickingDelete={this.handleDeletingJersey} 
          onClickingSell = {this.handleSellJersey}/>
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
        <div id="display">
        {currentlyVisableState}
        <button onClick={this.handleClick}>{buttonText}</button>
        </div>
        
      </React.Fragment>
    )

  }
}

export default JerseyControl;