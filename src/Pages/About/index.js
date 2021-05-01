import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import "./index.scss";

// Import resources:
import Users from './users-solid.svg';
import Book from './book-open-solid.svg';
import Hands from './hands-helping-solid.svg';
import Heart from './heart-solid.svg';
// import President from './lindsey.jpg';

class About extends Component{
    render(){
        return(
        <React.Fragment>
        <div className="o-about-wrapper-image">
            <div className="o-about-wrapper-image-title"><h2>Our Chapter</h2></div>
        </div>
        <div className="o-about-values-wrapper">
            <h2 className="o-about-values-heading">
                Our Values
            </h2>
            <div className="hr"/>
            <div className="o-about-values">
                <div className="o-about-values-item">
                    <div className="o-about-values-item-image">
                        <img src={Users} alt="Users" />
                    </div>
                    <span className="o-about-values-item-caption">
                        Brotherhood
                    </span>
                </div>
                <div className="o-about-values-item">
                    <div className="o-about-values-item-image">
                        <img src={Hands} alt="Hands" />
                    </div>
                    <span className="o-about-values-item-caption">
                        Service
                    </span>
                </div>
                <div className="o-about-values-item">
                    <div className="o-about-values-item-image">
                        <img src={Heart} alt="Heart" />
                    </div>
                    <span className="o-about-values-item-caption">
                        Unity
                    </span>
                </div>
                <div className="o-about-values-item">
                    <div className="o-about-values-item-image">
                        <img src={Book} alt="Book" />
                    </div>
                    <span className="o-about-values-item-caption">
                        Knowledge
                    </span>
                </div>
            </div>
        </div>
        <div className="o-about-wrapper-message">
            <Fade> 
                {/* Fading animation on load */}
            {/* <img src={President}/> */}
            <h2>
                Message From Our President
            </h2>
            <div className="hr"></div>
            {/* Divider referenced by global class hr */}
                <p>
                    The largest and oldest professional business fraternity in the nation. A premier developer of principled business leaders. This introduction merely scratches the surface of Alpha Kappa Psi. Carnegie Mellon University's Omega Psi Chapter is proud to be emerging upon our 14th year of providing the brightest business-minded students with professional skills and instilling the important values of brotherhood, knowledge, integrity, and service. <br/>

                    As the only professional business fraternity on campus, we're unique. Our brotherhood is a melting pot of majors and backgrounds, yet we're bonded by our business mindset and our dedication to pursue excellence and leadership on and off campus. We're proud to have brothers achieving their dream job, clinching a win at a hack-a-thon, or expressing their designs at Lunar Gala. From my experience in Alpha Kappa Psi, I've learned that whatever brothers set their mind to they commit and achieve big. I'm especially humbled to be leading a group of people that motivate and inspire me and that I can call mentors and friends. Last year, one of our very own brothers founded the AKPsi Scholarship Fund for a local Pittsburgh high school student as they look toward attending college. This year, we continue our second year of this Scholarship Fund and are delighted to be active within the Pittsburgh community. This year, we’ve pushed to do more with our resources and reach our potential - whether it's hosting more of our sponsors on campus, holding workshops for students, or collaborating with other professional, social, and service groups on campus.<br/>

                    Once brothers graduate, they feel prepared and confident to enter their next chapter. They are immediately adopted into a rich and vast CMU Alpha Kappa Psi alumni network. Our graduates work at some of the most prestigious companies in the world: from Google to Goldman Sachs, from Microsoft to McKinsey &nbsp; Company, and more. <br/>

                    I invite you to see for yourself why the members of the Omega Psi Chapter are proud to be in Alpha Kappa Psi. Maybe you'll discover that you want to be a part of it too.<br/><br/>
                    Sincerely<br/>
                    <i>Lindsey Shi</i><br/>
                    <i>President, Omega Psi</i><br/>
                </p>
            </Fade>
        </div>
        </React.Fragment>
        );
    }
}

export default About;