import React, {Component} from 'react';
import './index.scss';
import Link from '../HyperLink';

class Footer extends Component{
    render(){
        return(
            <React.Fragment>
            <div className="o-footer-sponsor">
                Interested in working with us? <Link><b>Find out how</b></Link>
            </div>
            <div className="o-footer-frat">
                <span className="o-footer-tagline">Alpha Kappa Psi | Omega Psi Chapter</span>
            </div>
            </React.Fragment>
        );
    }
}

export default Footer;