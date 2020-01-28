import React, {Component} from 'react';
import './index.scss';

class Link extends Component{
    render(){
        return(
            <span className={"o-link " + this.props.className}>
                {this.props.children}
            </span>
        );
    }
}

export default Link;