import React from "react";
import {useState } from "react";
import TableControl from "./table-control";
import MenuControl from "./control-menu";
import UserControl from "./user-control";
import "./admin.css";

export function AdminComponent({ changeState }) {
	const [usersControl, setUserControl] = useState(false);
	const [tableControl, setTableControl] = useState(false);
	const [menuControl, setMenucontrol] = useState(false);

	const controlData = (
		<div className="pagediv">
			<button
				className="button"
				onClick={() => {
					setUserControl(true);
					setTableControl(false);
					setMenucontrol(false);
				}}
				variant="contained"
			>
				User Control
			</button>
			<button
				className="button"
				onClick={() => {
					setTableControl(true);
					setUserControl(false);
					setMenucontrol(false);
				}}
				variant="contained"
			>
				Table Control
			</button>
			<button
				className="button"
				onClick={() => {
					setMenucontrol(true);
					setUserControl(false);
					setTableControl(false);
				}}
				variant="contained"
			>
				Menu Control
			</button>
			<button className="button" onClick={changeState} variant="contained">
				Log out
			</button>
		</div>
	);

	if (!usersControl && !tableControl && !menuControl) {
		return <div>{controlData}</div>;
	} else if (usersControl && !tableControl && !menuControl) {
		return (
			<div>
				{controlData}
				<UserControl />
			</div>
		);
	} else if (tableControl && !usersControl && !menuControl) {
		return (
			<div>
				{controlData}
				<TableControl />
			</div>
		);
	} else if (menuControl && !usersControl && !tableControl) {
		return (
			<div>
				{controlData}
				<MenuControl />
			</div>
		);
	}
}
