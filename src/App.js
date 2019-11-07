import React, { Component } from 'react';


function ErrorForm(props) {
  if (props.isHidden) { return null }
  return (
    <div>
      {props.errMessage}
    </div>
  )
}
const validateInput = (checkingText) => {
  const regexp = /^\d{10,11}$/;
  if (regexp.exec(checkingText) !== null) {
    return {
      isInputValid: true,
      errMessage: ''
    }
  }
  else {
    return {
      isInputValid: false,
      errMessage: 'Số điện thoại phải có 10 - 11 chữ số.'
    };
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isInputValid: true,
      errMessage: ''
    }
  }
  onChange = event => {
    const { value } = event.target;
    this.setState({ value });
  }


  handleInpuValidation = event => {
    const { isInputValid, errMessage } = validateInput(this.state.value);
    this.setState({
      isInputValid: isInputValid,
      errMessage: errMessage
    })
  }

  render() {
    return (
      <div>
        <input
          name="phoneNumber"
          type="text"
          className="input-field"
          placeholder="Số điện thoại"
          onChange={this.onChange}
          onBlur={this.handleInpuValidation}

        />
        <ErrorForm
          errMessage={this.state.errMessage}
        />
      </div>
    );
  }
}

export default App;