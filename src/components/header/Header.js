import React, {Component} from 'react';
import './Header.scss';
import logo from '../../assets/logo/logo_full.png';
import {FaBars} from "react-icons/fa";



class Header extends Component {
    render() {
        return (
            <header>
                <div className="header_-_logo">
                    <img src={logo} alt=""/>
                    {/*<img src="../../assets/logo.png" alt=""/>*/}
                    {/*<div className="header_-_logo_--_bar1"></div>*/}
                    {/*<div className="header_-_logo_--_bar2"></div>*/}
                    {/*<div className="header_-_logo_--_bar3"></div>*/}
                </div>

                <div className="header_-_nav">
                    <h1><FaBars/></h1>
                </div>
            </header>
        )
    };
}

export default Header;