import React, {Component} from 'react';
import MenuItem from './components/MenuItem/MenuItem';
import OrderItem from './components/OrderItem/OrderItem';

import hamburgerImage from './assets/images/hamburger.png';
import cheeseburgerImage from './assets/images/cheeseburger.png';
import teaImage from './assets/images/tea.png';
import pepsiImage from './assets/images/pepsi.png';
import coffeeImage from './assets/images/coffee.png';
import friesImage from './assets/images/fries.png';

class App extends Component {
    state = {
        items: [
            {id: 1, name: 'Hamburger', price: 80, image: hamburgerImage, count: 0},
            {id: 2, name: 'Cheeseburger', price: 90, image: cheeseburgerImage, count: 0},
            {id: 3, name: 'Tea', price: 30, image: teaImage, count: 0},
            {id: 4, name: 'Pepsi', price: 40, image: pepsiImage, count: 0},
            {id: 5, name: 'Coffee', price: 50, image: coffeeImage, count: 0},
            {id: 6, name: 'Fries', price: 45, image: friesImage, count: 0},
        ],
        totalPrice: 0
    };

    addItemHandler = (id) => {
        const items = [...this.state.items];

        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                items[i].count++;
            }
        }

        this.setState({items}, this.calcTotalPrice());
    };

    removeItemHandler = (id) => {
        const items = [...this.state.items];

        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                items[i].count--;
            }

            if (items[i].count < 0) {
                items[i].count = 0;
            }
        }

        this.setState({items}, this.calcTotalPrice());
    };

    calcTotalPrice = () => {
        const items = [...this.state.items];
        let totalPrice = 0;

        for (let i = 0; i < items.length; i++) {
            if (items[i].count) {
                let itemPrice = items[i].count * items[i].price;
                totalPrice += itemPrice;
            }
        }

        this.setState({totalPrice});
    };

    render() {
        let orderList = null;

        if (this.state.totalPrice > 0) {
            orderList = (
                <div className="order-inner">
                    {this.state.items.map(order => {
                        if (order.count) {
                            return (
                                <OrderItem
                                    key={order.id}
                                    name={order.name}
                                    count={order.count}
                                    price={order.price}
                                    onRemoveItem={this.removeItemHandler.bind(this, order.id)}
                                />
                            )}
                            return null;
                        })}
                    <div className="order-item total">
                        <span>Total price:</span>
                        <span>{this.state.totalPrice} KGS</span>
                    </div>
                </div>
            )
        } else {
            orderList = (
                <div className="order-inner">
                    <p>Order is empty!</p>
                </div>
            )
        }

        return (
            <div className="container">
                <div className="order">
                    <h3 className="module-title">Order details</h3>

                    {orderList}
                </div>
                <div className="menu">
                    <h3 className="module-title">Menu</h3>
                    <div className="menu-items">
                        {this.state.items.map(item => (
                            <MenuItem
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                onAddItem={this.addItemHandler.bind(this, item.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
