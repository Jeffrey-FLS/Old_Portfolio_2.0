
import React, {Component} from 'react';
import './HomeCircleMenu.scss';
import image from "../../../assets/ring-divided.png";

class HomeCircleMenu extends Component {
    render() {
        return (
            <div className="homepage_-_circle-menu">


                <div className="homepage_-_circle-menu_--_side-projects circle-side"></div>
                <div className="homepage_-_circle-menu_--_side-blogs circle-side"></div>
                <div className="homepage_-_circle-menu_--_side-about circle-side"></div>

                <img src={image} alt="" className="tempImage"/>

                {/*<div className="tempbody">*/}
                    <div className="tempcircle"></div>
                {/*</div>*/}

            </div>
        );
    }
}

export default HomeCircleMenu;