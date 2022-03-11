import React from 'react';
import { Pagination } from './Pagination';
import { Card } from './Card';
export const ExchangeList = ({
    items = [],
    pageCount,
    currentPage,
    setCurrentPage,
    setExchangeDetail,
}) => {
    return (
        <div className="exchange-list">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Country</th>
                        <th scope="col">Trust rank</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr
                            key={item.id}
                            onClick={() => setExchangeDetail(item)}
                        >
                            <th scope="row">
                                <Card
                                    url={item.url}
                                    name={item.name}
                                    image={item.image}
                                />
                            </th>
                            <td>{item.country}</td>

                            <td>{item.trust_score_rank}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                pageCount={pageCount}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};
