import React from 'react';

const OrderItem = props => (
    <div className="order-item">
        <span>Hamburger</span>
        <span>x 1</span>
        <span>1 KGS</span>
        <button>&times;</button>
    </div>
);

export default OrderItem;