// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {
  formSubmitHandler = () => console.log('Entering password...');

  render() {
    return (
      <input onKeyUp={() => this.formSubmitHandler()} type="password"/>
    )
  }
}
