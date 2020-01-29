import React, {Component} from 'react';
import Button from '../Button';
import Link from '../HyperLink';
import Footer from '../Footer';
import Fade from 'react-reveal/Fade';

import './index.scss';

class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="o-main">
                    <div className="o-main-header">
                        <h1>
                        <div className="o-main-header-top">Developing</div>
                        <div className="o-main-header-mid">principled &amp; professional <br/></div>
                        <div className="o-main-header-bottom">business leaders for tomorrow</div>
                        </h1>
                        <Button className="o-button-white o-main-header-button">Learn more</Button>
                    </div>
                </div>
                <div className="o-main-about">
                    <Fade big>
                        <h3>
                        Who are we?
                        </h3>
                        <p>
                        We are Carnegie Mellon University's premier professional fraternity. Our fraternity also places a high emphasis on leadership, 
                        having brothers that are leaders within our organization as well as across the Carnegie Mellon campus.
                        We accomplish this through various professional and service initiatives.<br/><br/>
                        <Link>Read more about us here</Link>
                        </p>
                    </Fade>
                </div>
                <div className="o-main-previews">
                    <div className="o-main-preview o-main-preview-bros">
                        <Fade>
                            <h4>
                                Brothers
                            </h4>
                            <p>
                            As brothers, we are united by our passion for business, professional development, and dedication to our 
                            fraternity, and we constantly provide each other with assured comfort and support. <br/><br/>                                 
                            <Link className="o-link-white">Learn about our brothers</Link>
                            </p>
                        </Fade>
                    </div>
                    <div className="o-main-preview o-main-preview-alums">
                        <Fade>
                            <h4>
                                Alumni
                            </h4>
                            <p>
                                Our alumni lead by example; not only do they go on to become successfull industry experts and entrepreneurs,
                                 but they also give back to younger brothers by constantly offering their guidance.<br/><br/>
                                <Link className="o-link-white">Learn about our alumni</Link>
                            </p>
                        </Fade>
                    </div>
                </div>
                <div className="o-main-activities-wrapper">
                    <Fade>
                    <h3>Activities</h3>

                    <div className="o-main-activities">
                        <div className="o-main-activities-activity">
                            <div className="o-main-activities-activity-image 
                                o-main-activities-activity-professional">
                            </div>
                            <div className="o-main-activities-activity-caption">
                                <h4>Professional</h4>
                                <p>Our brothers have benefitted from the chapter's professional development program
                                     and network. We keep each other accountable to ensure that we reach our professional goals.
                                </p>
                            </div>
                        </div>
                        <div className="o-main-activities-activity">
                            <div className="o-main-activities-activity-image 
                                o-main-activities-activity-service">
                            </div>
                            <div className="o-main-activities-activity-caption">
                                <h4>Service</h4>
                                <p>Service is an important aspect of Alpha Kappa Psi. Our chapter organizes various campus-wide service events
                                 and is the only chapter in the nation to offer a scholarship program for high school students.
                                </p>
                            </div>
                        </div>
                        <div className="o-main-activities-activity">
                            <div className="o-main-activities-activity-image 
                                o-main-activities-activity-social">
                            </div>
                            <div className="o-main-activities-activity-caption">
                                <h4>Social</h4>
                                <p>As a brotherhood, the friendships we form go way beyond just business and college activities. We often go on
                                     plan trips with each other, study abroad, pursue different hobbies, and enjoy getting to know each other on a personal level.
                                </p>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
                <div className="o-main-subscribe">
                    <h3>Join our mailing list</h3>
                    <div className="o-main-subscribe-desc">
                    </div>
                    <input className="o-main-subscribe-box" type="text"/>
                </div>
                <Footer>
                </Footer>
            </React.Fragment>
        );
    }
}

export default Home;