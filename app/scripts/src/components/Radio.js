import React from 'react';
import {capitalize} from '../utils';

export default class Radio extends React.Component {
  constructor() {
    super();
  }

  render() {
    const label = capitalize(this.props.value);

    return (
      <div className="radio">
        <label>
          <input type="radio"
            name={this.props.name}
            value={this.props.value}
            onChange={this._handleChoice.bind(this)}
            checked={this.props.checked}
            />
          {label}
        </label>
      </div>
    );
  }

  _handleChoice(event) {
    let newVal = event.target.value;
    console.log(newVal);
    this.props.changeActionHandler({[this.props.name]: newVal});
  }
}
