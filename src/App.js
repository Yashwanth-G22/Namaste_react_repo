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
        {items.map(({ delivery, foodName, image, rating, resName }) => {
          return (
            <RestaurantCard
              foodName={foodName}
              image={image}
              rating={rating}
              resName={resName}
              delivery={delivery}
            />
          );
        })}
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
