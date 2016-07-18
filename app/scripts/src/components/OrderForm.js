import React from 'react';

import Input from './Input';
import Radio from './Radio';
import Select from './Select';
import Range from './Range';

export default class OrderForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log('render. it happens');

    const radioGroup = ['short', 'tall', 'grande'].map((size, idx) => (
      <Radio
        key={size}
        name="size"
        value={size}
        checked={this.props.order.size === size || idx === 0}
        changeActionHandler={this._doChange.bind(this)}
        />
    ));

    console.log(this.props.order);

    return (
     <section>
      <div className="panel panel-default">
        <div className="panel-body">
          <form action="#" method="post" onSubmit={this._doSubmit.bind(this)}>

            <Input name="coffee"
              value={this.props.order.coffee || ''}
              type="text"
              placeholder="quintuple espresso"
              changeActionHandler={this._doChange.bind(this)}
              autoFocus={true}
              />
            <Input name="email"
              value={this.props.order.email || ''}
              type="email"
              placeholder="bob@bob.com"
              changeActionHandler={this._doChange.bind(this)}
              />

            {radioGroup}

            <Select />

            <Input name="strength"
              value={this.props.order.strength || 11}
              type="range"
              changeActionHandler={this._doChange.bind(this)}
              />

            <button onClick={this._doSubmit.bind(this)} type="submit" className="btn btn-default">Submit</button>
            <button onClick={this._doReset.bind(this)} type="reset" className="btn btn-default">Reset</button>
          </form>
        </div>
      </div>
    </section>
    );
  }

  _doChange(valObj) {
    console.log(valObj);
    this.props.changeOrderHandler(valObj);
  }

  _doSubmit(event) {
    event.preventDefault();
    console.log('submit the form');
    // this.props.changeOrderHandler(valObj);
    this.props.changeOrderHandler(valObj);
  }

  _doReset(event) {
    console.log('reset the form');
  }
}
