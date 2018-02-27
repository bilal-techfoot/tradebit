import React from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
import VolumeChart from './volumeChart';
import data from "./dummy_data"
import {timeParse} from "d3-time-format";

class ChartShowComponent extends React.Component {
    constructor(props){
        super(props);
        const parseDate = timeParse("%Y-%m-%d");
        const obj=[];
        // Temp code for volume chart
        let data1=[];
        data.map((item,index)=> {
            item = Object.assign({}, item, {date: parseDate(item.date)});
            obj.push(item);
            let temp = item;
            if (index < 100 / 2) {
                temp.open = 0;
                temp.close=Math.round(Math.random() * (50 - 1)) + 1
            } else if (index == 50) {
                temp.open = 0;
                temp.close = 0;
            } else if(index<100){
                temp.close = 0;
                temp.open=Math.round(Math.random() * (50 - 1)) + 1
            }
            if (index < 100){
                data1.push(temp)
            }
        })
        // end of Temp code for volume chart
        this.state = {volume:data1,intervalId: 500,data:obj,counter:1,suffix: 1,chart:'candle'}
        this.handleReset = this.handleReset.bind(this);

    }
    componentDidMount() {
        var intervalId = setInterval(this.timer.bind(this), 5000);
        // store intervalId in the state so it can be accessed later:
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount() {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
    }
    handleReset() {

        this.setState({
            suffix: this.state.suffix + 1
        });
    }
    handleClick() {
    const toggleChart = this.state.chart==='candle'? 'volume':'candle';
        this.setState({
            chart: toggleChart
        });
    }

    timer() {

        const parseDate = timeParse("%Y-%m-%d");
        let dataState = this.state.data;
        dataState.push(dataState[this.state.counter]);
        // Temp code for volume chart
        let data1 = [];
        if (data) {
            this.state.data.map((temp, index) => {
                let item=temp;

                if (index < 100 / 2) {
                    item.open = 0;
                    item.close=Math.round(Math.random() * (50 - 1)) + 1
                } else if (index == 50) {
                    item.open = 0;
                    item.close = 0;
                } else if(index<100){
                    item.close = 0;
                    item.open=Math.round(Math.random() * (50 - 1)) + 1
                }
                if (index < 100){
                    data1.push(item)
                }

            });

        }
        // end of Temp code for volume chart
        // setState method is used to update the state
        this.setState({volume:data1, data: dataState, counter:this.state.counter+1 });
    }


    render() {

        if (this.state == null) {
            return <div>Loading...</div>
        }

        return (
            <div className="fixed-nav sticky-footer bg-dark" id="page-top">
                <div className="content-wrapper bg-wrapper">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="card-header">
	             <span className="cry-icon-sm">
	               <img src="images/bitcoin.png" />
	             </span>
                                Bitcoin
                                <span className="color-4">BTC</span>
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
                            <div className="card-section">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="info-crypto">
                                            $661,20 <span className="currency">USD</span> <span className="down">(-14,70%)</span>
                                        </div>
                                        <div className="info-crypto-typo">
                                            0.454661,20 <span className="currency">BTC</span> <span className="down">(-14,70%)</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <a className="instant-buy" href="#">BUY INSTANT</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5">
                                        <table className="table table-details">
                                            <thead>
                                            <tr>
                                                <th>Market Cap</th>
                                                <th>Volumn (24h)</th>
                                                <th>Circulating Supply</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <div className="cry-detail">
                                                        <span className="color-5">$34343443.3 USD</span>
                                                        <span className="color-4">0.34343443 BTC</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="cry-detail">
                                                        <span className="color-5">$34343443.3 USD</span>
                                                        <span className="color-4">0.34343443 BTC</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="cry-detail">
                                                        <span className="color-5">0.4534343443 ETH</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="panel panel-primary">
                                            <div className="panel-heading">
	                            <span className="pull-righ">
                                    <ul className="nav panel-tabs">
	                                    <li className="active"><a href="#tab1" data-toggle="tab">CHARTS</a></li>
	                                    <li><a href="#tab2" data-toggle="tab">MARKETS</a></li>
	                                    <li><a href="#tab3" data-toggle="tab">SOCIAL</a></li>
	                                    <li><a href="#tab4" data-toggle="tab">TOOLS</a></li>
	                                    <li><a href="#tab5" data-toggle="tab"  onClick={() => this.handleClick()}>HISTORICAL DATA</a></li>
	                                </ul>
	                            </span>
                                            </div>
                                            <div className="panel-body">
                                                <div className="tab-content">
                                                    {(() => {
                                                        if (this.state.chart==='volume') {
                                                            return  <VolumeChart  data={this.state.volume}  />
                                                        }else{
                                                            return  <Chart  data={this.state.data} suffix={this.props.suffix}  onResetZoom={this.handleReset} />
                                                        }
                                                    })()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="ads-banner">
                                Ads Banner
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ChartShowComponent;
