
import React, { Component } from 'react';
import './HomePage.scss';

import Header from "../../components/header/Header";
import HomeCircleMenu from "./components/HomeCircleMenu";


class HomePage extends Component {
    render() {
        return (
            <div className="homepage">
                <Header />

                {/*<div className="container">*/}
                {/*    <div className="row">*/}
                {/*        <div className="col-12">*/}
                {/*<div className="homepage_-_main">*/}
                    <HomeCircleMenu />
                {/*</div>*/}

                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
        );
    }
}

export default HomePage;