import React from 'react';

const Pagination = () => {
    return (
        <ul className="pagination">
            <li className="pagination__item">
                <a href="#" className="pagination__link active">1</a>
            </li>
            <li className="pagination__item">
                <a href="#" className="pagination__link">2</a>
            </li>
            <li className="pagination__item">
                <a href="#" className="pagination__link">3</a>
            </li>
        </ul>
    );
};

export default Pagination;