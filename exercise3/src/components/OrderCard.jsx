import React from "react";

export default function OrderCard({ order, onQuantityChange }) {
  const handleQuantityChange = (amount) => {
    onQuantityChange(order.product, amount);
  };

  const isMinusButtonDisabled = order.quantity === 0;

  return (
    <div className="order">
      <div>
        <h4>{order.product}</h4>
        <small>${order.price.toFixed(2)}</small>
      </div>

      <div className="order-quantity">
        <div
          className={`order-button ${isMinusButtonDisabled ? "disable" : ""}`}
          onClick={() => !isMinusButtonDisabled && handleQuantityChange(-1)}
        >
          -
        </div>
        <h4>{order.quantity}</h4>
        <div
          className="order-button"
          onClick={() => handleQuantityChange(1)}
        >
          +
        </div>
      </div>
    </div>
  );
}
