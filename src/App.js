import React, { useEffect, useState } from 'react';
import { ExchangeList } from './ExchangeList';
import { getPageCount } from './utils';
import logo from './logo.svg';
import { ExchangeDetail } from './ExchangeDetail';

const pageSize = 10;

function App() {
    const [exchangeList, setExchangeList] = useState([]);
    const [exchangeDetail, setExchangeDetail] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(1);

    useEffect(() => {
        fetch(
            `https://api.coingecko.com/api/v3/exchanges?per_page=${pageSize}&page=${currentPage}`
        )
            .then((res) => {
                setTotal(res.headers.get('total'));
                return res.json();
            })
            .then((data) => setExchangeList(data));
    }, [currentPage]);
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
            </header>
            {exchangeDetail ? (
                <ExchangeDetail
                    model={exchangeDetail}
                    setExchangeDetail={setExchangeDetail}
                />
            ) : (
                <ExchangeList
                    items={exchangeList}
                    pageCount={getPageCount(total, pageSize)}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setExchangeDetail={setExchangeDetail}
                />
            )}
        </div>
    );
}

export default App;
