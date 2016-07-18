
import React from 'react';
import ListItem from './ListItem';

export default class CheckList extends React.Component {
  constructor(){
    super();
  }
  render() {

    // Caveat: previously tried this with data as object literal.
    // for..of didn't work
    // Object.keys().forEach(() => ) was wonky, and `this` was not properly scoped
    // was going to use `const orders = ;` but I need to deal with keyed children: https://fb.me/react-warning-keys
    const checkList = this.props.orders.map((ord) => <ListItem key={ord.email} order={ord} checkActionHandler={this.props.checkActionHandler}/>);

    return (
      <section>
        <div className="panel panel-default">
          <div className="panel-body">
            <h4>Pending Orders:</h4>
            {checkList}
          </div>
        </div>
      </section>
    );
  }

}
