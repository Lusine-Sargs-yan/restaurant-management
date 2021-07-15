import { useState } from "react";
import MenuControlComponent from "./components";
import { loadState } from "../helpers/local-storage";
import "./admin.css";


export default function MenuControl() {
  const sweetData = loadState('SWEETS_DATA_loc');
  const foodData = loadState('FOODS_DATA_loc');
  const drinkData = loadState('DRINK_DATA_loc');

  const [isSweet, setIsSweet] = useState(false);
  const [isFood, setIsFood] = useState(false);
  const [isDrink, setIsDrink] = useState(false);

  const elements = (
    <div className="menuContainer">
      <button
        className="menuButton"
        onClick={() => {
          setIsSweet(true);
          setIsFood(false);
          setIsDrink(false);
        }}
      >
        SWEET
      </button>
      <button
        className="menuButton"
        onClick={() => {
          setIsSweet(false);
          setIsFood(true);
          setIsDrink(false);
        }}
      >
        FOOD
      </button>
      <button
        className="menuButton"
        onClick={() => {
          setIsSweet(false);
          setIsFood(false);
          setIsDrink(true);
        }}
      >
        DRINK
      </button>
    </div>
  );

  if (!isSweet && !isFood && !isDrink) {
    return elements;
  } else if (isSweet && !isFood && !isDrink) {
    return (
      <div>
        {elements}
        <MenuControlComponent
          data={sweetData}
          localStorageData="SWEETS_DATA_loc"
        />
      </div>
    );
  } else if (!isSweet && isFood && !isDrink) {
    return (
      <div>
        {elements}
        <MenuControlComponent
          data={foodData}
          localStorageData="FOODS_DATA_loc"
        />
      </div>
    );
  } else if (!isSweet && !isFood && isDrink) {
    return (
      <div>
        {elements}
        <MenuControlComponent
          data={drinkData}
          localStorageData="DRINK_DATA_loc"
        />
      </div>
    );
  }
}
