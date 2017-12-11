import React from 'react';
//import all childComponents

export default class TodoApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handleDeleOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ 
      selectedOption: option 
    }));
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }

  handleClosingModal = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        // set options in state equal to options, the shorthand def is displayed below,
        // this is the same as ({ options: options })
        this.setState(() => ({ options }))
      }
    } catch (e) {
      console.log('error', e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      // creates a string representation which we can store in localStorage
      const json = JSON.stringify(this.state.options);
      // store it in localStorage
      localStorage.setItem('options', json);
      console.log('save data', localStorage.getItem('options')); 
    }
  }

  componentWillUnmount() {
    console.log('component will unmount');
  }
  

  // render
  render() {
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClosingModal={this.handleClosingModal}
        />
      </div>
    );
  }
}