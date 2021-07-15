import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import CardList from "../../components/card-list/CardList";
import CardListBeer from "../../components/card-list/CardListBeer";
import {loadState } from "../../helpers/local-storage";
import Pagination from "../../components/pagination/Pagination";
import { getVisibleData } from "../../components/pagination/visible-data";
import "./DrinkStyle.css";
import { getBeersData } from "../../data/service/beers";

export default function Drink() {
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [dataOfDrinks, setDataOfDrinks]  =  useState(loadState('DRINK_DATA_loc'));
	const perPageData = 4;

	useEffect(() => {
		setDataOfDrinks(dataOfDrinks);
	}, [dataOfDrinks]);

	useEffect(() => {
		setLoading(true);
		getBeersData()
			.then((info) => {

				setData(info);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	if (isLoading) {
		return <CircularProgress />;
	}

	if (error) {
		return <p className="error">{error}</p>;
	}


	const handlePageChange = (page, event) => {
		event.preventDefault();
		if(page !== currentPage)
		setCurrentPage(page);
	}


	const getPageData = () => {

		const paginationData = getVisibleData(data, currentPage, perPageData);

		return {
			totalData: data,
			pageData: paginationData
		}
	};

	const getPageDataOtherDrinks = () => {

		const paginationData = getVisibleData(dataOfDrinks, currentPage, perPageData);

		return {
			totalDataOtherDrinks: dataOfDrinks,
			pageDataOtherDrinks: paginationData
		}
	};

	const {totalData, pageData} = getPageData();
	const {totalDataOtherDrinks, pageDataOtherDrinks} = getPageDataOtherDrinks();

	
  const handleNextPage = () => {
    setCurrentPage((next) =>  next + 1);
  }

	const handlePreviousPage = () => {
    setCurrentPage((prev) => prev - 1 );
  }

	return (
		<div className="drink-container">
			<CardList data={pageDataOtherDrinks}/>
			<CardListBeer items={pageData} />
			<Pagination
				perPageData={perPageData} 
				totalData={totalData || totalDataOtherDrinks} 
				currentPage={currentPage}
				handlePageChange={handlePageChange} 
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
			/>
		</div>
	);
}
