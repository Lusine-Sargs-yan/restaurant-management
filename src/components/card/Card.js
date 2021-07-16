import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./CardStyle.css";
import formatCurrency from "format-currency";
import { useCartContext } from "../../context/cart/CartState";

export default function CardComponent({
  id,
  name,
  image,
  kitchen,
  description,
  quantity,
  price,
}) {
  const { addToCart, cartItems, increase } = useCartContext();
  let opts = { format: "%s%v", symbol: "$" };

  const isItemOnList = () => {
    return cartItems.find((product) => product.id === id) !== undefined;
  };

  const handleClick = () => {
    if (isItemOnList()) {
      increase({ id });
    } else {
      addToCart({ id, name, image, kitchen, description, price });
    }
  };
  return (
    <Card
      className={
        !id && !image && !name && !kitchen && !description && !price
          ? "empty"
          : "card"
      }
      key={id}
    >
      <CardContent className="card-component">
        <Typography variant="body2" component={'span'} >
          <img className="all-image" src={image} alt={name} />
        </Typography>
        <Typography variant="h6" component="h6" className="item-decoration">
          {name}
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          className="item-decoration"
        >
          {kitchen}
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          className="item-decoration"
        >
          {description}
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          className="item-decoration"
        >
          {formatCurrency(`${price}`, opts)}
        </Typography>
      </CardContent>

      <button className="add-button" onClick={handleClick}>
        {isItemOnList() ? `${quantity || "ADDED"}` : "ADD TO CART"}
      </button>
    </Card>
  );
}
