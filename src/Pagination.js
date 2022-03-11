import cn from 'classnames';
import React from 'react';
import { genRange } from './utils';

export const Pagination = ({
    pageCount,
    currentPage,
    limit = 5,
    setCurrentPage,
}) => {
    const pageRange = genRange(pageCount, currentPage, limit);
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li
                    className={cn('page-item', { disabled: currentPage === 1 })}
                    onClick={() =>
                        setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
                    }
                >
                    <button className="page-link">Previous</button>
                </li>
                {pageRange.map((num) => (
                    <li
                        className={cn('page-item', {
                            active: num === currentPage,
                        })}
                        onClick={() => setCurrentPage(num)}
                        key={num}
                    >
                        <button className="page-link">{num}</button>
                    </li>
                ))}
                <li
                    className={cn('page-item', {
                        disabled: currentPage === pageCount,
                    })}
                    onClick={() =>
                        setCurrentPage((prev) =>
                            pageCount > prev ? prev + 1 : prev
                        )
                    }
                >
                    <button className="page-link">Next</button>
                </li>
            </ul>
        </nav>
    );
};
