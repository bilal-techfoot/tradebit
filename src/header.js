
import React from 'react';
import {
    Link,
} from 'react-router-dom';

class Header extends React.Component {
    constructor(props){
        super(props);
        // end of Temp code for volume chart

    }

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-white" id="mainNav">
                <a className="navbar-brand" href="index.html">CAP Exchange</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ">
                        <li className="nav-item main-nav dropdown">
                            <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Market Cap</a>
                            <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                                <a className="dropdown-item" href="#"><strong>Status Update</strong></a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#"><strong>Status Update </strong></a></div>
                        </li>
                        <li className="nav-item main-nav dropdown">
                            <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                TRADE VOLUMN
                            </a>
                            <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                                <a className="dropdown-item" href="#">
                                    <strong>
                                        Status Update
                                    </strong>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    <strong>
                                        Status Update
                                    </strong>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item main-nav dropdown">
                            <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                TRENDING
                            </a>
                            <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                                <a className="dropdown-item" href="#">
                                    <strong>
                                        Status Update
                                    </strong>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    <strong>
                                        Status Update
                                    </strong>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item main-nav dropdown">
                            <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                TOOLS
                            </a>
                            <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                                <a className="dropdown-item" href="#">
                                    <strong>
                                        Status Update
                                    </strong>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    <strong>
                                        Status Update
                                    </strong>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown pull-right">
                            <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                USD
                            </a>
                            <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                                <a className="dropdown-item" href="#">
                                    AUD
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown pull-right">
                            <a className="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                ENGLISH
                            </a>
                            <div className="dropdown-menu" aria-labelledby="messagesDropdown">
                                <a className="dropdown-item" href="#">
                                    FRENCH
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
    )
    }
}


export default  Header