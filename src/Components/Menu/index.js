import React, {Component} from 'react';
import {
    Link
  } from "react-router-dom";
import './index.scss';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible: true,
        }
    }
    handleClick = (e) => {
        e.preventDefault()
       this.setState({
           visible : !this.state.visible
       })
    }
    // Separate handleClicks for hamburger and hyperlinks to prevent default action on hamburger
    handleClickLink = (e) => {
        // e.preventDefault()
       this.setState({
           visible : !this.state.visible
       })
    }
    render(){
        return(
            <React.Fragment>
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
                    <div className="o-menu-hamburger" onClick={this.handleClick}>
                        <span className="o-menu-hamburger-line"/>
                        <span className="o-menu-hamburger-line"/>
                        <span className="o-menu-hamburger-line"/>
                    </div>
                </div>
                <div className={this.state.visible ? ' o-menu-responsive-invisible' : 'o-menu-responsive-visible'}>
                    <Link to="/" onClick={this.handleClickLink} className="o-menu-responsive-item">
                        Home
                    </Link>
                    <Link to="/brothers" onClick={this.handleClickLink} className="o-menu-responsive-item">
                        Brotherhood
                    </Link>
                    <Link to="/about" onClick={this.handleClickLink} className="o-menu-responsive-item">
                        About
                    </Link>
                </div>

            </React.Fragment>
        );
    }
}
export default Menu; 