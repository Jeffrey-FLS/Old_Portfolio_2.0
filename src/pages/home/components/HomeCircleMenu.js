
import React, {Component} from 'react';
import './HomeCircleMenu.scss';
// import image from "../../../assets/ring-divided.png";
import image from "../../../assets/circle.png";

class HomeCircleMenu extends Component {
    render() {
        return (
            <div className="homepage_-_circle-menu">


                <div className="homepage_-_circle-menu_--_side-projects circle-side"></div>
                {/*<div className="homepage_-_circle-menu_--_side-blogs circle-side"></div>*/}
                {/*<div className="homepage_-_circle-menu_--_side-about circle-side"></div>*/}
                {/*<div className="homepage_-_circle-menu_--_side-contact circle-side"></div>*/}
                {/*<div className="homepage_-_circle-menu_--_side-experience circle-side"></div>*/}

                <img src={image} alt="" className="tempImage"/>

                {/*    <div className="tempcircle"></div>*/}

            </div>
        );
    }
}

export default HomeCircleMenu;