import React from "react";
import { useLocation, BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/screens/Login/LoginPage";
import LandingPage from "./components/screens/LandingPage/LandingPage";
import Products from "./components/screens/Products/Products";
import ProductDetails from "./components/screens/ProductDetails/ProductDetails";
import InventoryPage from "./components/screens/InventoryPage/InventoryPage";
import Navbar from "./components/utils/Navbar/Navbar";

export default function Router() {
  let navbar;

  if(window.location.pathname.includes("checkout")) {
    navbar = <div></div>
  } else {
    navbar = <div><Navbar /></div>;
  }

  return (
    <div>
      <BrowserRouter>
        {navbar}
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/products" exact component={Products} />
          <Route path="/product-details" component={ProductDetails} />
          <Route path="/login" component={LoginPage} />
          <Route path="/inventory" component={InventoryPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
