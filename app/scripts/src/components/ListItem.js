

import React from 'react';

export default class ListItem extends React.Component {
  constructor(){
    super();
  }
  render() {

    // shorten the name we have to use for the rest of this function
    const order = this.props.order;

    // template strings!
    const desc = `${order.size} ${order.flavor} ${order.coffee} (${order.email}) [${order.strength}x]`;

    /*
     * Note: you must `.bind(this)` your event handlers
     */

    return (
      <div className="checkbox">
        <label>
          <input type='checkbox'
            onChange={this._handleCheckboxClick.bind(this)}
            value={order.email}> {desc}
          </input>
        </label>
      </div>
    );
  }

  _handleCheckboxClick(event) {
    // You don't even need to pull the info from the `event`!
    console.log(`you checked ${this.props.order.email}`);

    // I was given a callback...I guess I'll call it!
    this.props.checkActionHandler(this.props.order.email);
  }


}
