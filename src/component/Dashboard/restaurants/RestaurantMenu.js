import React from "react";
import { useParams } from "react-router-dom";
import restaurants from "../../restaurants";
import { useDispatch } from "react-redux";
import { addTocart } from "../cart/cartslice";
import './RestaurantMenu.css'; // isteğe bağlı stil

function RestaurantMenu() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const restaurant = restaurants.find(r => r.id === parseInt(id));

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="restaurant-menu-page">
      <h2>{restaurant.name}</h2>
      <img
        src={`/images/${restaurant.image}`}
        alt={restaurant.name}
        className="restaurant-banner"
      />

      <div className="menu-items">
        {restaurant.menu.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={`/images/${item.image}`} alt={item.name} />
            <h4>{item.name}</h4>
            <p>₺{item.price}</p>
            <button onClick={() => dispatch(addTocart(item))}>
              + Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;
