import { DRINK_DATA, FOODS_DATA, SWEETS_DATA } from "../data/data";
import { loadStateByKey, saveState } from "./local-storage";


export default function LocalStorageData() {

  if (loadStateByKey('SWEETS_DATA_loc') === null) {
    saveState('SWEETS_DATA_loc', JSON.stringify(SWEETS_DATA));
  }

  if (loadStateByKey('FOODS_DATA_loc') === null) {
    saveState('FOODS_DATA_loc', JSON.stringify(FOODS_DATA));
  }

  if (loadStateByKey('DRINK_DATA_loc') === null) {
    saveState('DRINK_DATA_loc', JSON.stringify(DRINK_DATA));
  }

  if (loadStateByKey('usersArray') === null) {
    saveState('usersArray', JSON.stringify([]));
  }

  if (loadStateByKey('reserveStatus') === null) {
    saveState('reserveStatus', 'Not reserved');
  }

  if (loadStateByKey('loggedInStatus') === null) {
    saveState('loggedInStatus', 'toLoggedIn');
  }

  if (loadStateByKey('reserveStatus1') === null) {
    saveState('reserveStatus1', 'Not reserved');
  }

  if (loadStateByKey('reserveStatus2') === null) {
    saveState('reserveStatus2', 'Not reserved');
  }

  if (loadStateByKey('reserveStatus3') === null) {
    saveState('reserveStatus3', 'Not reserved');
  }

  if (loadStateByKey('reserveStatus4') === null) {
    saveState('reserveStatus4', 'Not reserved');
  }
  if (loadStateByKey('reserveStatus5') === null) {
    saveState('reserveStatus5', 'Not reserved');
  }
  if (loadStateByKey('reserveStatus6') === null) {
    saveState('reserveStatus', 'Not reserved');
  }

  return null;
}
