import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./CardStyle.css";
import { useCartContext } from "../../context/cart/CartState";
import formatCurrency from "format-currency";

export default function CardBeerComponent({
  id,
  name,
  description,
  image_url,
  volume,
  quantity,
}) {
  const { addToCart, cartItems, increase } = useCartContext();
  let opts = { format: "%s%v", symbol: "$" };
  const price = volume.value;
  const maxLength = 37;
  const isItemOnList = () => {
    return cartItems.find((product) => product.id === id) !== undefined;
  };

  const handleClick = () => {
    if (isItemOnList()) {
      increase({ id });
    } else {
      addToCart({ id, name, description, image_url, price });
    }
  };
  return (
    <Card
      className={
        !id && !image_url && !name && !description && !price ? "empty" : "card"
      }
      key={id}
    >
      <CardContent className="card-component">
        <Typography variant="body2" component={"span"}>
          <br />
          <img src={image_url} alt={name} className="beer-image" />
        </Typography>
        <Typography variant="h6" component="h6" className="item-decoration">
          {name}
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          className="item-decoration"
        >
          {`${description.substring(0, maxLength)}`}
        </Typography>
        <Typography
          color="textSecondary"
          gutterBottom
          className="item-decoration"
        >
          {formatCurrency(`${+price}`, opts)}
        </Typography>
      </CardContent>
      <button variant="contained" className="add-button" onClick={handleClick}>
        {isItemOnList() ? `${quantity || "ADDED"}` : "ADD TO CART"}
      </button>
    </Card>
  );
}
