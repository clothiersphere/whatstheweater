import React from 'react';
import ReactDOM from 'react-dom';

export default class ZipInput extends React.Component {

  submit(e) {
    e.preventDefault();
    alert('it works');
  }

  render() {
    return (
      <form onSubmit={this.submit}>
       <input type="text" name="zip"/>
       <input type="submit" value="Submit"/> 
      </form>
    )
  }
}