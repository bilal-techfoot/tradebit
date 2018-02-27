
import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';
import ChartShowComponent from './displayChart';

import Home from "./home";
import Header from "./header";

class ChartComponent extends React.Component {

    render() {
        return (
            <Router>
                <div className="fixed-nav sticky-footer bg-dark" id="page-top">

                    <Header/>
                    <Switch>

                        <Route path="/chart" component={ChartShowComponent} />
                        <Route path="/" component={Home} />

                    </Switch>
                </div>
            </Router>
        )
    }
}

render(
    <ChartComponent />,
    document.getElementById("root")
);

