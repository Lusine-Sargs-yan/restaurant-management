import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Food from "../pages/food/Food";
import Sweets from "../pages/sweet/Sweets";
import Drink from "../pages/drink/Drink";


export const Routes = [
	{
		route: "/",
		component: Home,
		title: "Home",
	},
	{
		route: "/about",
		component: About ,
		title: "About",
	},

	{
		route: "/food",
		component: Food,
		title: "Food",
	},
	{
		route: "/sweets",
		component: Sweets,
		title: "Sweets",
	},
	{
		route: "/drinks",
		component: Drink,
		title: "Drink",
	},

];
