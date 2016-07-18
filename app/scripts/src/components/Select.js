import React from 'react';
import {capitalize} from '../utils';

export default class Select extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="flavorShot">Flavor Shot</label>
        <select id="flavorShot" className="form-control" name="flavor" onChange={this._handleChoice.bind(this)}>
            <option value="">None</option>
            <option value="caramel">Caramel</option>
            <option value="almond">Almond</option>
            <option value="mocha">Mocha</option>
        </select>
      </div>
    );
  }

  _handleChoice(event) {
    console.log(event);
  }

}
