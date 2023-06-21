import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isInStock, setIsInStock] = useState(true);

  const handleStockToggle = () => {
    setIsInStock(prevIsInStock => !prevIsInStock);
  };

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleStockToggle}>In Stock</button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
