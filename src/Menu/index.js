import React, {Component} from 'react';
import {
    Link
  } from "react-router-dom";
import './index.scss';

class Menu extends Component{
    render(){
        return(
            <div className="o-menu">
                <span className="o-menu-page">
                    AKΨ
                </span>
                <div className="o-menu-items">
                    <Link to="/" className="o-menu-item">
                        Home
                    </Link>
                    <Link to="/about" className="o-menu-item">
                        About
                    </Link>
                    <Link to="/brothers" className="o-menu-item">
                        Brotherhood
                    </Link>
                    <Link to="/alumni" className="o-menu-item">
                        Alumni
                    </Link>
                    <Link to="/joinus" className="o-menu-item">
                        Join us
                    </Link>
                </div>
            </div>
        );
    }
}
export default Menu; 