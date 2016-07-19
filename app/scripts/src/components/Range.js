import React from 'react';

export default class Range extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="form-group">
        <label for="strengthLevel">Caffeine Rating</label>
        <input name="strength" id="strengthLevel" type="range" onChange={this._handleChange.bind(this)} />
      </div>
    );
  }

  _handleChange(event) {
    console.log(event.target.value);
  }
}
