import React from 'react';
import OrderForm from './OrderForm';
import CheckList from './CheckList';

const STORAGE_KEY = 'x/react-coffeerun';
const TEMP_DATA = [{"coffee":"frappe","email":"you@hoo.com","size":"grande","flavor":"","strength":30},{"coffee":"espresso-tronic","email":"me@you.com","size":"grande","flavor":"","strength":30},{"coffee":"chicago dog coffee","email":"me@bignerdranch.com","size":"tall","flavor":"","strength":30}];

const EMPTY_ORDER = {
  coffee: '',
  email: '',
  size: '',
  flavor: '',
  strength: ''
};

export default class CoffeeRunApp extends React.Component {
  constructor() {
    super();
    // You assign `this.state` in the constructor
    this.state = {
      orders: Array.from(TEMP_DATA),
      currentOrder: Object.assign({}, EMPTY_ORDER)
    };
  }

  render() {

    return (
      <div>
        <OrderForm order={this.state.currentOrder}
                   changeOrderHandler={this._changeCurrentOrder.bind(this)}
                   newOrderHandler={this._createOrder.bind(this)}/>
        <CheckList orders={this.state.orders}
                   checkActionHandler={this._deliverOrder.bind(this)}
        />
      </div>
    );
  }

  _deliverOrder(recipientEmail) {
    console.log(`yep! someone got their coffee: ${recipientEmail}`);
    // remove from state
    // by calling `this.setState`
    this.setState({
      orders: this.state.orders.filter((ord) => ord.email !== recipientEmail)
    });
    console.log(this.state.orders);
  }

  _changeCurrentOrder(updatedOrder) {
    console.log(updatedOrder);
    this.setState({
      currentOrder: Object.assign({}, this.state.currentOrder, updatedOrder)
    });
  }

  _createOrder() {
    if (this.state.currentOrder.email) {
      let _orders = Array.from(this.state.orders.filter((item) => item.email !== this.state.currentOrder.email));
      _orders.push(this.state.currentOrder);
      this.setState({
        orders: _orders,
        currentOrder: Object.assign({}, EMPTY_ORDER)
      });
    }
  }
}
