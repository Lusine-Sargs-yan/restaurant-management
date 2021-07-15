import React from "react";
import "./PaginationStyle.css";

export default function Pagination({
  perPageData,
  totalData,
  currentPage,
  handlePageChange,
  handlePreviousPage,
  handleNextPage,
}) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalData.length / perPageData); i++) {
    pages.push(i);
  }

  const renderPageNumber = pages.map((page) => {
    return (
      <span
        key={page.toString()}
        id={page}
        onClick={(event) => handlePageChange(page, event)}
        className={currentPage === page ? "active" : null}
      >
        {page}
      </span>
    );
  });

  return (
    <div className="pagianation-container">
      <button
        onClick={handlePreviousPage}
        className="prev-button"
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <ul className="pagination">{renderPageNumber}</ul>
      <button
        onClick={handleNextPage}
        className="next-button"
        disabled={currentPage === pages.length}
      >
        Next
      </button>
    </div>
  );
}
