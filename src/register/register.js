import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ReserveContext } from "../App";
import { loadState, loadStateByKey, saveState } from "../helpers/local-storage";
import NewUserComponent from "./newUser";
import "./register.css";

export default function SignIn({ changeReserveState }) {
	const reservationContext = useContext(ReserveContext);
	const [loggedInKey, setLoggedInKey] = useState(
		loadStateByKey("loggedInStatus")
	);
	const [loggedIn, setLoggedIn] = useState("");
	const [generalError, setGeneralError] = useState("");
	const [user, setUser] = useState({
		name: "",
		password: "",
	});

	const onInputChange = (event) => {
		setUser({
			...user,
			[event.target.name]: event.target.value,
		});
	};

	const handleLoggedIn = () => {
		const usersArray = loadState("usersArray");
		usersArray.forEach((element) => {
			if (
				user.name.trim().toLowerCase() !== element.name ||
				user.password !== element.password
			) {
				setGeneralError("Incorrect username or password ");
			}
			if (
				user.name.trim().toLowerCase() === element.name &&
				user.password.trim().toLowerCase() === element.password
			) {
				saveState("loggedInUser", JSON.stringify(element));
				saveState("loggedInStatus", "loggedInInfo");
				setLoggedInKey(loadStateByKey("loggedInStatus"));
				setLoggedIn("loggedInInfo");
				setUser({
					name: "",
					password: "",
				});
			}
		});
	};

	function pageControl() {
		const newUserlist = [];
		const usersList = loadState("usersArray");
		const logUser = loadState("loggedInUser");

		usersList.forEach((element) => {
			if (
				element.name !== logUser.name &&
				element.password !== logUser.password
			) {
				newUserlist.push(element);
			}
		});

		saveState("usersArray", JSON.stringify(newUserlist));
		setLoggedIn("");
		localStorage.removeItem("loggedInUser");
		saveState("loggedInStatus", "toLoggedIn");
		setLoggedInKey(loadStateByKey("loggedInStatus"));
		if (reservationContext) {
			changeReserveState();
		}

		return null;
	}

	const closeLoggedIn = () => {
		setLoggedIn("");
		setLoggedInKey("toLoggedIn");
	};

	const handleLoggedOut = () => {
		setLoggedIn("");
		localStorage.removeItem("loggedInUser");
		saveState("loggedInStatus", "toLoggedIn");
		setLoggedInKey(loadStateByKey("loggedInStatus"));
		setGeneralError("");
		if (reservationContext) {
			changeReserveState();
		}
	};

	if (!loggedIn && loggedInKey === "toLoggedIn") {
		return (
			<div>
				<Link to="/" onClick={() => setLoggedIn("toLoggedIn")} className="link">
					Log in
				</Link>
			</div>
		);
	}

	if (loggedIn === "toLoggedIn") {
		return (
			<div className="logIn">
				<div>
					<Link to="/" className="closeLink" onClick={closeLoggedIn}>
						X
					</Link>
				</div>
				<div>
					<h2 className="logInTitle">Log in</h2>
				</div>
				<div className="input-container">
					<input
						placeholder="username"
						className="input"
						onChange={onInputChange}
						name="name"
						value={user.name}
					/>

					<input
						placeholder="password"
						className="input"
						onChange={onInputChange}
						name="password"
						value={user.password}
						type="password"
					/>
				</div>
				<div className="errorMessage">
					{generalError && (
						<p className="errorText">Incorrect username or password</p>
					)}
				</div>
				<div className="logInLink">
					<Link to="/" onClick={handleLoggedIn} className="link">
						Login
					</Link>
				</div>

				<div className="accountLink">
					<Link
						to="/"
						className="link"
						onClick={() => setLoggedIn("createAccount")}
					>
						Create a new account
					</Link>
				</div>
			</div>
		);
	}

	if (loggedIn === "createAccount") {
		return <NewUserComponent />;
	}

	return (
		<div>
			{loggedInKey && (
				<>
					<h4 className="username">{loadState("loggedInUser").name}</h4>
					<Link to="/" className="link" onClick={handleLoggedOut}>
						Log out
					</Link>
					<Link to="/" className="link" onClick={changeReserveState}>
						Reserve a table
					</Link>
					<Link to="/" className="link" onClick={pageControl}>
						Delete account
					</Link>
				</>
			)}
		</div>
	);

}
