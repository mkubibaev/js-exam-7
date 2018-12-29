import React, {Component} from 'react';
import MenuItem from './components/MenuItem/MenuItem';
import OrderItem from './components/OrderItem/OrderItem';

class App extends Component {
    state = {
        items: [
            {id: 1, name: 'Hamburger', price: 80, count: 0},
            {id: 2, name: 'Cheeseburger', price: 90, count: 0},
            {id: 3, name: 'Tea', price: 30, count: 0},
            {id: 4, name: 'Cola', price: 40, count: 0},
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
        console.log(this.state);
        return (
            <div className="container">
                <div className="order">
                    <h3 className="module-title">Order details</h3>
                    <div className="order-inner">

                        <OrderItem />

                        <div className="order-item total">
                            <span>Total price:</span>
                            <span>{this.state.totalPrice} KGS</span>
                        </div>
                    </div>
                </div>

                <div className="menu">
                    <h3 className="module-title">Menu</h3>
                    <div className="menu-items">
                        {this.state.items.map(item => (
                            <MenuItem
                                key={item.id}
                                name={item.name}
                                price={item.price}
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
