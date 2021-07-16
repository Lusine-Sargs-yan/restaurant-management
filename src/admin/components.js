import { useState } from "react";

export default function MenuControlComponent(props) {
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState(0);

  const nameInputListener = (event) => {
    setNewName(event.target.value);
  };

  const passwordInputListener = (event) => {
    setNewPrice(Number(event.target.value));
  };

  const handleOnClickName = (id) => {
    const newLocalStorageResult = props.data.map((el) => {
      if (Number(id) === Number(el.id)) {
        el.name = newName;
        return el;
      } 
      return el;
    });
    localStorage.setItem(
      props.localStorageData,
      JSON.stringify(newLocalStorageResult)
    );
    if (newName) {
      setNewName("");
    }
    return newLocalStorageResult;
  };

  const handleOnClickPrice = (id) => {
    const newLocalStorageResult = props.data.map((el) => {
      if (Number(id) === Number(el.id)) {
        el.price = newPrice;
        return el;
      } 
      return el;
    });
    localStorage.setItem(
      props.localStorageData,
      JSON.stringify(newLocalStorageResult)
    );
    if (newPrice) {
      setNewPrice(0);
    }
    return newLocalStorageResult;
  };

  return (
    <>
      {props.data.map(({ name, id, price }) => {
        return (
          <li key={id}>
            <div className="menuItem">
              <div>
                <div>
                  <h3>Name</h3>
                  {name}
                </div>
                <input placeholder="New name" onChange={nameInputListener} />
                <button
                  className="changeButton"
                  onClick={() => {
                    handleOnClickName(id);
                  }}
                >
                  Change name
                </button>
              </div>
              <div>
                <div>
                  <h3>Price</h3> {price}
                </div>
                <input
                  placeholder="New price"
                  onChange={passwordInputListener}
                />
                <button
                  className="changeButton"
                  onClick={() => {
                    handleOnClickPrice(id);
                  }}
                >
                  Change price
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}
