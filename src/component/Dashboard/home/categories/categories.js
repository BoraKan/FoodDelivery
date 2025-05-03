import React from "react";
import { useHistory } from "react-router-dom";
import './CategoryStyle.css';


function Categories() {
  const history = useHistory();

  const handleCategoryClick = (category) => {
    history.push(`/categories/${category.toLowerCase()}`);
  };

  return (
    <div className="category-page">
      <h2>Select a Category</h2>
      <div className="category-cards">
        <div className="category-card" onClick={() => handleCategoryClick('TurkishFood')}>
          <img src="/images/adana-kebap.jpg" alt="Turkish Food" />
          <p>Turkish Food</p>
        </div>
        <div className="category-card" onClick={() => handleCategoryClick('Burger')}>
          <img src="/images/double-cheeseburger.jpg" alt="Burger" />
          <p>Burger</p>
        </div>
        <div className="category-card" onClick={() => handleCategoryClick('Pizza')}>
          <img src="/images/margherita.jpg" alt="Pizza" />
          <p>Pizza</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
