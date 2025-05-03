import React from "react";
import restaurants from '../../../../restaurants';
import { useHistory } from "react-router-dom";
import '../CategoryStyle.css'; // Ortak stil dosyası

function Burger() {
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/menu/${id}`);
  };

  const filteredRestaurants = restaurants.filter(
    (rest) => rest.category === "Burger"
  );

  return (
    <div className="restaurant-list-page burger-bg">
      <h2 className="category-title">Select a Burger Restaurant</h2>
      <div className="restaurant-grid">
        {filteredRestaurants.map((rest) => (
          <div key={rest.id} className="restaurant-card" onClick={() => handleClick(rest.id)}>
            <img src={`/images/${rest.image}`} alt={rest.name} />
            <h4>{rest.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Burger;
