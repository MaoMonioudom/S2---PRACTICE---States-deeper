import React from "react";
import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  const handleQuantityChange = (productName, amount) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.product === productName
          ? { ...order, quantity: Math.max(order.quantity + amount, 0) }
          : order
      )
    );
  };

  const calculateTotal = () => {
    return orders.reduce((total, order) => total + order.price * order.quantity, 0).toFixed(2);
  };

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard
            key={index}
            order={order}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>

      <CheckoutButton total={calculateTotal()} />
    </>
  );
}
