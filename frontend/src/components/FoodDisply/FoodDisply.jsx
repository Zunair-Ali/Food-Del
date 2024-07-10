import React from "react";
import "./FoodDisply.css";
import { StoreContext } from "../../Context/StoreContext";
import { useContext } from "react";
import FoodItem from "../FoodItem/FoodItem";
const FoodDisply = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-disply" id="food-disply">
      <h2>Top dishes near you</h2>
      <div className="food-disply-list">
        {food_list.map((item, index) => {
          if ((category === "All" || category === item.category)) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisply;
