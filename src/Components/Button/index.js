import React, {Component} from 'react';
import './index.scss';

class Button extends Component{
    render(){
        return(
            <button className={'o-button ' + this.props.className}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;