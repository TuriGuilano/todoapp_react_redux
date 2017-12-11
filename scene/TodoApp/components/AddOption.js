import React from 'react';
import ReactDOM from 'react-dom';

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));
    // clear input if there was no error
    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}