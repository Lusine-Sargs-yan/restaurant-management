import { useCartContext } from "../../context/cart/CartState";
import { loadState } from "../../helpers/local-storage";
import CardComponent from "../card/Card";

import "./CardListStyle.css";

export default function CardList({ data }) {
  const { addToCart } = useCartContext();
  //console.log(data, "data:::::");

  if (
    data === loadState("SWEETS_DATA_loc") ||
    data === loadState("FOODS_DATA_loc")
  ) {
    return (
      <ul className="list" >
        {data?.map(({ id, name, image, kitchen, price, quantity = 0 }) => {
          return (
            <div key={id}>
              <CardComponent
                {...{ id, name, image, kitchen, price, quantity }}
                addToCart={addToCart}
              />
            </div>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className="list">
      {data?.map(
        ({ id, name, image, kitchen, description, price, quantity = 0 }) => {
          return (
            <div key={id}>
              <CardComponent
                {...{ id, name, image, kitchen, description, price, quantity }}
                addToCart={addToCart}
              />
            </div>
          );
        }
      )}
    </ul>
  );
}
