import React from 'react';
import {capitalize} from '../utils';

export default class Input extends React.Component {
  constructor() {
    super();
  }

  render() {
    const label = capitalize(this.props.name);

    const className = this.props.type === "range" ? "" : "form-control";

    return (
      <div className="form-group">
        <label htmlFor={`id-${this.props.name}`}>
          {label}
        </label>
        <input className={className} id={`id-${this.props.name}`}
               key={`id-${this.props.name}`}
               type={this.props.type}
               value={this.props.value}
               placeholder={this.props.placeholder}
               onChange={this._handleChange.bind(this)}
               autoFocus={this.props.autoFocus}
               />
      </div>
    );
  }

  _handleChange(event) {
    let newVal = event.target.value;
    console.log(newVal);
    this.props.changeActionHandler({[this.props.name]: newVal});
  }
}
