import React, {useState } from "react";
import { Link } from "react-router-dom";
import { loadState, saveState } from "../helpers/local-storage";
import SignIn from "./register";


export default  function NewUserComponent() {
  const usersList = loadState("usersArray");
  const [usersStatus, setUsersStatus] = useState("correct");
  const [isAdding, setIsAdding] = useState(false);
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const correctUsername = user.name.toLowerCase().trim();
  const correctPassword = user.password.toLowerCase().trim();

  const takeUserInfo = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value.toLowerCase().trim(),
    });
  };

  const nameControl = () => {
    if (correctUsername.length < 4) {
      return false;
    }
    return true;
  };

  const nameRepeatControl = () => {
    let usernameCount = 0;

    for (let key of usersList) {
      if (key.name === correctUsername) {
        usernameCount = usernameCount + 1;
      }
    }

    if (usernameCount) {
      return false;
    }
    return true;
  };
  
  const passwordControl = () => {
    if (correctPassword.length < 5) {
      return false;
    }
    return true;
  };

  const addNewUser = () => {
    if (!nameControl()) {
      setUsersStatus("incorrect");
      return null;
    }
    if (!passwordControl()) {
      setUsersStatus("incorrectPassword");
      return null;
    }
    if (!nameRepeatControl()) {
      setUsersStatus("busy");
      return null;
    }

    let newUserList = [...usersList, user];
    saveState("usersArray", JSON.stringify(newUserList));
    setIsAdding(true);
  };


  if (!isAdding) {
    return (
      <div className="logIn">
        <div className="newRegiter">
          <h2 className="logInTiltle">Create account</h2>
          <div >
            <input
              placeholder="username"
              className="input"
              onChange={takeUserInfo}
              name="name"
              value={user.value}
            />

            <div className="inccorectMessage">
              {usersStatus === "incorrect" && (
                <p className="errorText">The username must be at least 4 charachters</p>
              )}
            </div>
            <div>
              {usersStatus === "busy" && (
                <p className="errorText">This username is already taken</p>
              )}
            </div>
            <input
              placeholder="Password"
              className="input"
              onChange={takeUserInfo}
              name="password"
              value={user.password}
              type="password"
            />
            <div className="inccorectMessage">
              {usersStatus === "incorrectPassword" && (
                <p className="errorText">The password must be at least 4 charachters</p>
              )}
            </div>
            <div className="logInLink">
              <Link to="/" onClick={addNewUser} className="link">
                Create account
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <SignIn /> 
  
  }
}
