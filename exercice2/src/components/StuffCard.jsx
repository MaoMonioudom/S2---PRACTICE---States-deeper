import React from "react";

export default function StuffCard({ name, price }) {
  const formatPrice = (price) => {
    if (isNaN(price) || price < 0) {
      return "$ 0.00"; // fallback for invalid or negative prices
    }
    return "$ " + price.toFixed(2); // format price to two decimal places
  };

  return (
    <div className="stuff">
      <h4>{name}</h4>
      <small>{formatPrice(price)}</small>
    </div>
  );
}
