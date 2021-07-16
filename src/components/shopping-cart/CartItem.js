import React from "react";
import { useCartContext } from "../../context/cart/CartState";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import LocalOfferTwoToneIcon from "@material-ui/icons/LocalOfferTwoTone";
import clsx from "clsx";
import formatCurrency from "format-currency";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    marginTop: 15,
  },
  media: {
    height: 0,
    margin: "-28px 0px 15px 0px",
    backgroundSize: "contain",
    paddingTop: "55%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export const CartItem = ({ item }) => {
  const { removeItem, increase, decrease } = useCartContext();
  let opts = { format: "%s%v", symbol: "€" };
  const classes = useStyles();
  const expanded = false;

  return (
    <Card className={classes.root}>
      <CardContent>
        <CardMedia
          className={classes.media}
          image={item.image || item.image_url}
          title="item.image"
        />
        <Typography variant="body2" color="textSecondary" component={'span'}>
          {item.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component={'span'}>
          <LocalOfferTwoToneIcon />
          {formatCurrency(`${item.price || item.volume.value}`, opts)}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <Typography>
          <AddShoppingCartIcon />
          {item.quantity}
        </Typography>
        <IconButton>
          <AddCircleOutlineIcon onClick={() => increase(item)} />
        </IconButton>

        {item.quantity > 1 && (
          <IconButton aria-label="share">
            <RemoveCircleOutlineIcon onClick={() => decrease(item)} />
          </IconButton>
        )}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
        >
          <DeleteOutlinedIcon
            color="secondary"
            onClick={() => removeItem(item)}
            aria-expanded={expanded}
            aria-label="show more"
          />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CartItem;
