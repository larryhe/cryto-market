import React from 'react';

export const ExchangeDetail = ({ model, setExchangeDetail }) => {
    return (
        <div className="container exchange-detail">
            <div className="row">
                <div className="col-3">Name</div>
                <div className="col-9">{model.name}</div>
            </div>
            <div className="row">
                <div className="col-3">Logo</div>
                <div className="col-9">
                    <img src={model.image} alt={model.name} />
                </div>
            </div>
            <div className="row">
                <div className="col-3">Description</div>
                <div className="col-9">{model.description}</div>
            </div>
            <div className="row">
                <div className="col-3">Country</div>
                <div className="col-9">{model.country}</div>
            </div>
            <div className="row">
                <div className="col-3">Trust Rank</div>
                <div className="col-9">{model.trust_score_rank}</div>
            </div>
            <div className="row">
                <div className="col-3">Year established</div>
                <div className="col-9">{model.year_established}</div>
            </div>
            <div className="row">
                <div className="col-3">Website</div>
                <div className="col-9">
                    <a href={model.url}>{model.url}</a>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button
                        className="btn btn-primary"
                        onClick={() => setExchangeDetail(null)}
                    >
                        Go back
                    </button>
                </div>
            </div>
        </div>
    );
};
