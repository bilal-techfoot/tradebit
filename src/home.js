
import React from 'react';
import {
    Link,
} from 'react-router-dom';

class Home extends React.Component {
    constructor(props){
        super(props);
        // end of Temp code for volume chart

    }

    render() {

        return (
            <div className="content-wrapper">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="nav-panel">
                            <ul className="summary-list">
                                <li>Market Cap: <span>$2323.45</span></li>
                                <li>24h Vol: <span>$2323.45</span></li>
                                <li>BTC Dominance: <span>36.3%</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="container-fluid">
                            <div className="card-header">
                                All Coins
                                <div className="cry-search">
                                    <form className="form-inline my-2 my-lg-0">
                                        <div className="input-group">
                                            <input className="form-control search-currency" type="text" placeholder="Search currencies..." />
                                            <span className="input-group-append">
                                            <button className="btn btn-primary btn-search" type="button">
                                              <span className="icon-magnifier"></span>
                                            </button>
                                          </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="cry-card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Market Cap</th>
                                            <th>Price</th>
                                            <th>Volumn(24H)</th>
                                            <th>Circulating Supply</th>
                                            <th>Change</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="cry-no">
                                                <span>1</span>
                                                <span className="rating active"></span>
                                            </td>
                                            <td>
                                                <Link to="/chart">
                                                    <div className="cry-icon">
                                                        <img href="/chart" src="/images/bitcoin.png" />
                                                    </div>
                                                    <div className="cry-detail">
                                                        <span className="color-1">Bitcoin</span>
                                                        <span className="color-4">BTC</span>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div className="cry-detail">
                                                    <span>$53443.3434</span>
                                                    <span className="color-4">You invest: </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cry-detail">
                                                    <span className="color-1">$34343443.3</span>
                                                    <span className="color-4">You own: <em className="color-3">0.34343434 ETH</em></span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cry-detail">
                                                    <span className="color-1">$34343443.3</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cry-detail">
                                                    <span className="color-1">34343443.3 BTC</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cry-change">
                                                    <span className="color-3">+30.66%</span> in 24H
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="cry-no">
                                                <span>1</span>
                                                <span className="rating"></span>
                                            </td>
                                            <td>
                                                <Link to="/chart">
                                                <div className="cry-icon">
                                                   <img href="/chart" src="/images/bitcoin.png" />
                                                </div>
                                                <div className="cry-detail">
                                                    <span className="color-1">Bitcoin</span>
                                                    <span className="color-4">BTC</span>
                                                </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div className="cry-detail">
                                                    <span>$53443.3434</span>
                                                    <span className="color-4">You invest:</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cry-detail">
                                                    <span className="color-1">$34343443.3</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cry-detail">
                                                    <span className="color-1">$34343443.3</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cry-detail">
                                                    <span className="color-1">34343443.3 BTC</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="cry-change">
                                                    <span className="color-2">-14.66%</span> in 24H
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div></div>
                    <div className="col-lg-2">
                        <div className="ads-banner">
                            Ads Banner
                        </div>
                    </div>
                </div>
            </div>
    )
    }
}


export default  Home