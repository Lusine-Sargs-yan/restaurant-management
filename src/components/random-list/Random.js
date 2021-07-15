import React from "react";
import formatCurrency from "format-currency";
import "./RandomStyle.css";

export const RandomComponent = ({ data }) => {
  const randomData = data[Math.floor(Math.random() * data.length)];
  //console.log(randomData, "random data:::")
  let opts = { format: "%s%v", symbol: "$" };

  return (
    <div className="container-card" key={randomData.id}>
      <img src={randomData.image} alt={randomData.name} className="image" />
      <h4 className="name">{randomData.name}</h4>
      <p className="kitchen">{randomData.kitchen}</p>
      <p className="price">{formatCurrency(`${randomData.price}`, opts)}</p>
    </div>
  );
};

export default RandomComponent;
