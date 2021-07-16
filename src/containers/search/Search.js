import { CircularProgress} from "@material-ui/core";
import { useState } from "react";
import { loadState } from "../../helpers/local-storage";
import { BASE_URL } from "../../data/service/config";
import CardList from "../../components/card-list/CardList";

export default function SearchContainer() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sweetsData, setSweetsData] = useState(loadState("SWEETS_DATA_loc"));
  const [foodData, setFoodData] = useState(loadState("FOODS_DATA_loc"));
  const [drinksData, setDrinkData] = useState(loadState("DRINK_DATA_loc"));
  const [isSearchData, setIsSearchData] = useState(true);

  useState(() => {
    setIsLoading(true);
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((info) => {
        setData(info);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [data]);

  useState(() => {
    setSweetsData(sweetsData);
    setFoodData(foodData);
    setDrinkData(drinksData);
  }, [sweetsData, foodData, drinksData]);

  const handleSearchUpdate = (event) => {
    let value = event.target.value;
    setSearchValue(value);
  };

  const handleOnReset = () => {
    let clear = "";
    setSearchValue(clear);
  };
  const handleOnClick = () => setIsSearchData(false);

  const filterNames = (arr) => {
    return !searchValue
      ? arr.map(({ name }) => name)
      : arr.filter(({ name }) =>
          name.toLowerCase().match(searchValue.toLowerCase())
        );
  };

  const filteredDataNames = filterNames(data);
  const filteredSweetsDataNames = filterNames(sweetsData);
  const filteredFoodDataNames = filterNames(foodData);
  const filteredDrinksDataNames = filterNames(drinksData);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error !== "") {
    return (
      <div>
        <p className="error">{error}</p>
      </div>
    );
  }


  return (
    <form onReset={handleOnReset} >
      <div className="search-container" key="searchInput">
        <input
          type="text"
          value={searchValue}
          onChange={(event) => {
            handleSearchUpdate(event);
          }}
          onClick={handleOnClick}
          placeholder="Search"
          className="search-input"
          name="search"
        />
        <div key="search">
          {!isSearchData ? <CardList data={filteredSweetsDataNames}/> : null}
          {!isSearchData ? <CardList data={filteredFoodDataNames } /> : null}
          {!isSearchData ? <CardList data={filteredDrinksDataNames }/> : null}
          {!isSearchData ? <CardList data={filteredDataNames } />  : null}

        </div>
      </div>
    </form>
  );
}
