import { DRINK_DATA, FOODS_DATA, SWEETS_DATA } from "../data/data";


export default function LocalStorageData() {

  if (localStorage.getItem('SWEETS_DATA_loc') === null) {
    localStorage.setItem('SWEETS_DATA_loc', JSON.stringify(SWEETS_DATA));
  }

  if (localStorage.getItem('FOODS_DATA_loc') === null) {
    localStorage.setItem('FOODS_DATA_loc', JSON.stringify(FOODS_DATA));
  }

  if (localStorage.getItem('DRINK_DATA_loc') === null) {
    localStorage.setItem('DRINK_DATA_loc', JSON.stringify(DRINK_DATA));
  }

  if (localStorage.getItem('usersArray') === null) {
    localStorage.setItem('usersArray', JSON.stringify([]));
  }

  if (localStorage.getItem('reserveStatus') === null) {
    localStorage.setItem('reserveStatus', 'Not reserved');
  }

  if (localStorage.getItem('loggedInStatus') === null) {
    localStorage.setItem('loggedInStatus', 'toLoggedIn');
  }

  if (localStorage.getItem('reserveStatus1') === null) {
    localStorage.setItem('reserveStatus1', 'Not reserved');
  }

  if (localStorage.getItem('reserveStatus2') === null) {
    localStorage.setItem('reserveStatus2', 'Not reserved');
  }

  if (localStorage.getItem('reserveStatus3') === null) {
    localStorage.setItem('reserveStatus3', 'Not reserved');
  }

  if (localStorage.getItem('reserveStatus4') === null) {
    localStorage.setItem('reserveStatus4', 'Not reserved');
  }
  if (localStorage.getItem('reserveStatus5') === null) {
    localStorage.setItem('reserveStatus5', 'Not reserved');
  }
  if (localStorage.getItem('reserveStatus6') === null) {
    localStorage.setItem('reserveStatus', 'Not reserved');
  }

  return '';
}
