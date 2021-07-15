import { useCartContext } from "../../context/cart/CartState";
import { loadState } from "../../helpers/local-storage";
import CardBeerComponent from "../card/CardBeer";
import "./CardListStyle.css";

export default function CardListBeer({ items }) {
  const { addToCart } = useCartContext();

  if (loadState("DRINK_DATA_loc")) {
    return (
      <div>
        <ul className="list">
          {items?.map(
            ({ id, name, description, image_url, volume, quantity = 0 }) => {
              return (
                <div key={id}>
                  <CardBeerComponent
                    {...{ id, name, description, image_url, volume, quantity }}
                    addToCart={addToCart}
                  />
                </div>
              );
            }
          )}
        </ul>
      </div>
    );
  }
}
