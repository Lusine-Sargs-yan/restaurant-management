import React, { useContext,  useState } from "react";
import { Link } from "react-router-dom";
import { loadState, loadStateByKey, saveState } from "../helpers/local-storage";
import { tableData } from "../data/data-table";
import { ReserveContext } from "../App";
import "./Tables.css";


export function TableListComponent({ changeReserveState }) {
  const [tableStatus1, setTableStatus1] = useState(loadStateByKey('reserveStatus1'));
  const [tableStatus2, setTableStatus2] = useState(loadStateByKey('reserveStatus2'));
  const [tableStatus3, setTableStatus3] = useState(loadStateByKey('reserveStatus3'));
  const [tableStatus4, setTableStatus4] = useState(loadStateByKey('reserveStatus4'));
  const [tableStatus5, setTableStatus5] = useState(loadStateByKey('reserveStatus5'));
  const [tableStatus6, setTableStatus6] = useState(loadStateByKey('reserveStatus6'));

  const reservationContext = useContext(ReserveContext);
  const user = loadState('loggedInUser')

  const free = <h3 className="tableName">Free</h3>;
  const reserved = <h3 className="tableName">Reserved</h3>;

  function TableComponent(props) {
    const tableState = loadState(props.data.name);

    const reservation = () => {
      saveState(
        props.data.name,
        JSON.stringify({ user: user.name, id: props.data.id })
      );
      saveState(props.reserveStatus, "reserved");
      props.changeStatus(loadStateByKey(props.reserveStatus));
    };

    const reservationOff = () => {
      localStorage.removeItem(props.data.name);
      saveState(props.reserveStatus, "Not reserved");
      props.changeStatus(loadStateByKey(props.reserveStatus));
    };
    if (props.admin) {
      return (
        <div className="table">
          <h2 className="tableName">{props.data.name}</h2>
          <h4 className="tableName">Places {props.data.places}</h4>
          {reserved}
        </div>
      );
    }
    if (tableState === null || tableState.user === user.name) {
      if (props.tableStatus === "Not reserved") {
        return (
          <div className="table">
            <h2 className="tableName">{props.data.name}</h2>
            <h4 className="tableName">Places {props.data.places}</h4>
            {free}
            <Link to="/" className="link" onClick={reservation}>
              Reserve
            </Link>
          </div>
        );
      } else if (props.tableStatus === "reserved") {
        return (
          <div className="table">
            <h2 className="tableName">{props.data.name}</h2>
            <h4 className="tableName">Places {props.data.places}</h4>
            {reserved}
            <Link to="/" className="link" onClick={reservationOff}>
              Cancel
            </Link>
          </div>
        );
      }
    } else {
      return (
        <div className="table">
          <h2 className="tableName">{props.data.name}</h2>
          <h4 className="tableName">Places {props.data.places}</h4>
          {reserved}
        </div>
      );
    }
  }
  if (reservationContext) {
    return (
      <div className="tableContainer">
        <div className="close">
          <Link
            className="link"
            to="/"
            onClick={() => {
              if (reservationContext) {
                changeReserveState();
              }
            }}
          >
            X
          </Link>
        </div>
        <div className="tableSampler">
          <div className="table1">
            <TableComponent
              admin={Number(loadStateByKey('adminControlTable1'))}
              tableStatus={tableStatus1}
              reserveStatus="reserveStatus1"
              changeStatus={setTableStatus1}
              data={tableData[0]}
            />
          </div>
          <div className="table1">
            <TableComponent
              admin={Number(loadStateByKey('adminControlTable2'))}
              tableStatus={tableStatus2}
              reserveStatus="reserveStatus2"
              changeStatus={setTableStatus2}
              data={tableData[1]}
            />
          </div>
          <div className="table1">
            <TableComponent
              admin={Number(loadStateByKey('adminControlTable3'))}
              tableStatus={tableStatus3}
              reserveStatus="reserveStatus3"
              changeStatus={setTableStatus3}
              data={tableData[2]}
            />
          </div>
          <div className="table1">
            <TableComponent
              admin={Number(loadStateByKey('adminControlTable4'))}
              tableStatus={tableStatus4}
              reserveStatus="reserveStatus4"
              changeStatus={setTableStatus4}
              data={tableData[3]}
            />
          </div>
          <div className="table1">
            <TableComponent
              admin={Number(loadStateByKey('adminControlTable5'))}
              tableStatus={tableStatus5}
              reserveStatus="reserveStatus5"
              changeStatus={setTableStatus5}
              data={tableData[4]}
            />
          </div>
          <div className="table1">
            <TableComponent
              admin={Number(loadStateByKey('adminControlTable6'))}
              tableStatus={tableStatus6}
              reserveStatus="reserveStatus6"
              changeStatus={setTableStatus6}
              data={tableData[5]}
            />
          </div>
        </div>
      </div>
    );
  }
  return "";
}
