import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../header/header.css';
import Footer from "../footer/footer";
import { useSelector, useDispatch } from "react-redux";
import { getTotals } from "../cart/cartslice";
import Categories from "./categories/categories";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Home() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const history = useHistory();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  useEffect(() => {
    async function fetchRestaurants() {
      setLoading(true);
      setError('');
      try {
        const res = await axios.get('http://localhost:8080/restaurants');
        console.log('Restaurants API response:', res.data);
        if (Array.isArray(res.data)) {
          setRestaurants(res.data);
        } else {
          setError('Unexpected response format.');
        }
      } catch (err) {
        setError('Failed to load restaurants: ' + (err.message || 'Unknown error'));
        console.error('Error fetching restaurants:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchRestaurants();
  }, []);

  const handleRestaurantClick = (id) => {
    history.push(`/menu/${id}`);
  };

  return (
    <div className="home-page-container">
      <div className="home-content">
        <Categories />
        <div className="restaurant-list">
          <h3>Restaurants</h3>
          {loading && <div>Loading...</div>}
          {error && <div style={{ color: 'red', whiteSpace: 'pre-wrap' }}>{error}</div>}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {restaurants.map((r) => (
              <div
                key={r.ID}
                className="restaurant-card"
                style={{
                  border: '1px solid #eee',
                  borderRadius: '8px',
                  padding: '16px',
                  minWidth: '200px',
                  cursor: 'pointer',
                  background: '#fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}
                onClick={() => handleRestaurantClick(r.ID)}
              >
                <h5 style={{ margin: 0 }}>{r.Name}</h5>
                <div style={{ color: '#888', fontSize: '0.9em' }}>{r.Location}</div>
                {r.Description && <div style={{ marginTop: '8px' }}>{r.Description}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
