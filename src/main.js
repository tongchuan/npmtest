import React from 'react';
import ReactDOM from 'react-dom';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.onChange=this.onChange.bind(this);
  }
  onChange(event){
    console.log(event.target.value)
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange} />
      </div>
    )
  }
}