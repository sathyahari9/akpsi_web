import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import "./index.scss";

class About extends Component{
    render(){
        return(
        <div className="o-about-wrapper">
            <div className="o-about-wrapper-left">
                {/* Left empty for image, disappears on mobile */}
            </div>
            <div className="o-about-wrapper-right">
                <Fade> 
                    {/* Fading animation on load */}
                <h2>
                    Message from our President
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
        </div>
        );
    }
}

export default About;