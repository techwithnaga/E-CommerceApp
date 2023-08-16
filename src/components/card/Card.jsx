import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/product/${item.id}`} style={{ width: "100%" }}>
        <div className="image">
          {item.isNew && <span>New Season</span>}
          <img src={item.img1} alt="" className="firstImage" />
          <img src={item.img2} alt="" className="secondImage" />
        </div>
        <h3>{item.title}</h3>
        <div className="prices">
          <h4>${item.oldPrice}</h4>
          <h4>${item.price}</h4>
        </div>
      </Link>
    </div>
  );
};

export default Card;
