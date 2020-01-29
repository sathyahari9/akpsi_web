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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere blandit sapien, id accumsan libero sagittis id. 
                        Pellentesque a sapien eu libero vulputate rutrum. Pellentesque posuere blandit sapien, id accumsan libero sagittis id. 
                        Pellentesque a sapien eu libero vulputate rutrum. <br/><br/>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere blandit sapien, id accumsan libero sagittis id.<br/><br/>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere blandit sapien, id accumsan libero sagittis id.<br/><br/>
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere blandit sapien, 
                                id accumsan libero sagittis id.</p>
                            </div>
                        </div>
                        <div className="o-main-activities-activity">
                            <div className="o-main-activities-activity-image 
                                o-main-activities-activity-service">
                            </div>
                            <div className="o-main-activities-activity-caption">
                                <h4>Service</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere blandit sapien, 
                                id accumsan libero sagittis id.</p>
                            </div>
                        </div>
                        <div className="o-main-activities-activity">
                            <div className="o-main-activities-activity-image 
                                o-main-activities-activity-social">
                            </div>
                            <div className="o-main-activities-activity-caption">
                                <h4>Social</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere blandit sapien, 
                                id accumsan libero sagittis id.</p>
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