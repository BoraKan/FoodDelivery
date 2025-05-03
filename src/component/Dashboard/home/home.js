import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../header/header.css';
import Footer from "../footer/footer";
import { useSelector, useDispatch } from "react-redux";
import { getTotals } from "../cart/cartslice";
import { useEffect } from "react";
import Categories from "./categories/categories";

function Home() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div className="home-page-container">
      <div className="home-content">
        <Categories />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
