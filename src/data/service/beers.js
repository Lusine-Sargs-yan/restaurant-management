import { BASE_URL } from "./config";


export const getBeersData = () => {
	return fetch(BASE_URL).then((response) => response.json());
};
