import "./Pagination.css";
import React from "react";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const goToNextPage = (e) => {
    e.preventDefault();
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = (e) => {
    e.preventDefault();
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className="pagination">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" onClick={goToPrevPage} href="">
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage === pgNumber ? "active" : ""} `}
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(pgNumber);
              }}
              className="page-link"
              href="#"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" onClick={goToNextPage} href="#">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
