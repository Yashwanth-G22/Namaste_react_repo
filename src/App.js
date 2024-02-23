import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Header";
import { RestaurantCard } from "./Rescard";
import { items } from "./items";

const Body = () => {
  return (
    <div>
      <div className="search-bar">Search</div>
      <div className="res-container">
        <RestaurantCard items={items} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      {/* 
     header
     body
     footer     
     */}
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
