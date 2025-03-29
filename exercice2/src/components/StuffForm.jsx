import React, { useState } from "react";

export default function StuffForm({ onAddStuff }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price) {
      const newStuff = { name, price: parseFloat(price) };
      onAddStuff(newStuff);
      setName(""); // Clear input fields
      setPrice("");
    } else {
      alert("Please fill out both fields.");
    }
  };

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input
        type="text"
        placeholder="Banana"
        value={name}
        onChange={handleNameChange}
      />

      <p>Stuff price</p>
      <input
        type="number"
        placeholder="15"
        value={price}
        onChange={handlePriceChange}
      />

      <button type="submit">Add Stuff</button>
    </form>
  );
}
