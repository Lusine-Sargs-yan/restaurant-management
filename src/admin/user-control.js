import { useState } from "react";
import { loadState, saveState } from "../helpers/local-storage";
import "./admin.css";

export default function UserControl() {
  const userList = loadState("usersArray");
  const [count, setCount] = useState(1);

  const users = userList.map(({ name, password }, index) => (
    <li key={password.toString()}>
      {name},{" "}
      <button
        onClick={() => {
          let results = [];

          userList.forEach((user) => {
            if (user.name !== name && user.password !== password) {
              results.push(user);
            }
            setCount(count + 1);
          });

          saveState("usersArray", JSON.stringify(results));
        }}
      >
        Delete user
      </button>
    </li>
  ));

  if (!userList.length) {
    return (
      <div >
        <h3>Logged out User</h3>
      </div>
    );
  }

  return (
    <div className="loggedInContainer">
      <h3>Logged In User</h3>
      {users}
    </div>
  );
}
