import { useEffect, useState } from "react";
import CardList from "../../components/card-list/CardList";
import { getVisibleData } from "../../components/pagination/visible-data";
import Pagination from "../../components/pagination/Pagination";
import { loadState} from "../../helpers/local-storage";
import "./SweetsStyle.css";

export default function Sweets() {
	const [data, setData] = useState(loadState('SWEETS_DATA_loc'));
	const [currentPage, setCurrentPage] = useState(1);
	const perPageData = 8;


	useEffect(() => {
		setData(data);
	}, [data]);

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

	const {totalData,pageData} = getPageData();

	
  const handleNextPage = () => {
    setCurrentPage((next) =>  next + 1);
  }


	const handlePreviousPage = () => {

    setCurrentPage((prev) => prev - 1 );

  }

	return (
		<div className="sweet-container">
			<CardList data={pageData}/>
			<Pagination 
				perPageData={perPageData} 
				totalData={totalData} 
				currentPage={currentPage}
				handlePageChange={handlePageChange} 
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
			/>
		</div>
	);
}
