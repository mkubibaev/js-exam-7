import React, {Component} from 'react';
import MenuItem from './components/MenuItem/MenuItem';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="order">
                    <h3 className="module-title">Order details</h3>
                    <div className="order-inner">
                        <div className="order-item">
                            <span>Hamburger</span>
                            <span>x 1</span>
                            <span>1 KGS</span>
                            <button>&times;</button>
                        </div>
                        <div className="order-item">
                            <span>Hamburger</span>
                            <span>x 1</span>
                            <span>1 KGS</span>
                            <button>&times;</button>
                        </div>
                        <div className="order-item total">
                            <span>Total price:</span>
                            <span>120 KGS</span>
                        </div>
                    </div>
                </div>

                <div className="menu">
                    <h3 className="module-title">Menu</h3>
                    <div className="menu-items">
                        <MenuItem />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
