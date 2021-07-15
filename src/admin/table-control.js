import { useState } from "react";
import { saveState } from "../helpers/local-storage";
import "./admin.css";


export default function TableControl() {
	const [isStatusOn, setIsStatusOn] = useState(true);


	return (
		<div className="tableContainer">
			<div>
        <div>
          <h3>Table1</h3>
        </div>
        <div>
          <h4>Status: {localStorage.getItem("reserveStatus1")}</h4>
        </div>
        <div>
          <button
            className = 'tableButton'
            onClick={() => {
              saveState('reserveStatus1', 'reserved');
              setIsStatusOn((prev) => !prev);
              saveState('adminControlTable1', '1');
            }}
          >
            On reserve
          </button>
          <button
            className = 'tableButton'
            onClick={() => {
              if (localStorage.getItem("Table1") !== null) {
                localStorage.removeItem("Table1");
              }
              localStorage.setItem('reserveStatus1', 'Not reserved');
              setIsStatusOn((prev) => !prev);
              localStorage.removeItem("adminControlTable1");
            }}
          >
            Reserve off
          </button>
        </div>
      </div>
			<div>
        <div>
          <h3>Table2</h3>
        </div>
        <div>
          <h4>Status: {localStorage.getItem("reserveStatus2")}</h4>
        </div>
        <div>
          <button
            className = 'tableButton'
            onClick={() => {
              saveState('reserveStatus2', 'reserved');
              setIsStatusOn((prev) => !prev);
              saveState('adminControlTable2', '1');
            }}
          >
            On reserve
          </button>
          <button
            className = 'tableButton'
            onClick={() => {
              if (localStorage.getItem("Table2") !== null) {
                localStorage.removeItem("Table2");
              }
              localStorage.setItem('reserveStatus2', 'Not reserved');
              setIsStatusOn((prev) => !prev);
              localStorage.removeItem("adminControlTable2");
            }}
          >
            Reserve off
          </button>
        </div>
      </div>
			<div>
        <div>
          <h3>Table3</h3>
        </div>
        <div>
          <h4>Status: {localStorage.getItem("reserveStatus3")}</h4>
        </div>
        <div>
          <button
            className = 'tableButton'
            onClick={() => {
              saveState('reserveStatus3', 'reserved');
              setIsStatusOn((prev) => !prev);
              saveState('adminControlTable3', '1');
            }}
          >
            On reserve
          </button>
          <button
            className = 'tableButton'
            onClick={() => {
              if (localStorage.getItem("Table3") !== null) {
                localStorage.removeItem("Table3");
              }
              localStorage.setItem('reserveStatus3', 'Not reserved');
              setIsStatusOn((prev) => !prev);
              localStorage.removeItem("adminControlTable3");
            }}
          >
            Reserve off
          </button>
        </div>
      </div>
			<div>
        <div>
          <h3>Table4</h3>
        </div>
        <div>
          <h4>Status: {localStorage.getItem("reserveStatus4")}</h4>
        </div>
        <div>
          <button
            className = 'tableButton'
            onClick={() => {
              saveState('reserveStatus4', 'reserved');
              setIsStatusOn((prev) => !prev);
              saveState('adminControlTable4', '1');
            }}
          >
            On reserve
          </button>
          <button
            className = 'tableButton'
            onClick={() => {
              if (localStorage.getItem("Table4") !== null) {
                localStorage.removeItem("Table4");
              }
              localStorage.setItem('reserveStatus4', 'Not reserved');
              setIsStatusOn((prev) => !prev);
              localStorage.removeItem("adminControlTable4");
            }}
          >
            Reserve off
          </button>
        </div>
      </div>
			<div>
        <div>
          <h3>Table5</h3>
        </div>
        <div>
          <h4>Status: {localStorage.getItem("reserveStatus5")}</h4>
        </div>
        <div>
          <button
            className = 'tableButton'
            onClick={() => {
              saveState('reserveStatus5', 'reserved');
              setIsStatusOn((prev) => !prev);
              saveState('adminControlTable5', '1');
            }}
          >
            On reserve
          </button>
          <button
            className = 'tableButton'
            onClick={() => {
              if (localStorage.getItem("Table5") !== null) {
                localStorage.removeItem("Table5");
              }
              localStorage.setItem('reserveStatus5', 'Not reserved');
              setIsStatusOn((prev) => !prev);
              localStorage.removeItem("adminControlTable5");
            }}
          >
            Reserve off
          </button>
        </div>
      </div>
			<div>
        <div>
          <h3>Table6</h3>
        </div>
        <div>
          <h4>Status: {localStorage.getItem("reserveStatus6")}</h4>
        </div>
        <div>
          <button
            className = 'tableButton'
            onClick={() => {
              saveState('reserveStatus6', 'reserved');
              setIsStatusOn((prev) => !prev);
              saveState('adminControlTable6', '1');
            }}
          >
            On reserve
          </button>
          <button
            className = 'tableButton'
            onClick={() => {
              if (localStorage.getItem("Table6") !== null) {
                localStorage.removeItem("Table6");
              }
              localStorage.setItem('reserveStatus6', 'Not reserved');
              setIsStatusOn((prev) => !prev);
              localStorage.removeItem("adminControlTable6");
            }}
          >
            Reserve off
          </button>
        </div>
      </div>
			
		</div>
	);
}
