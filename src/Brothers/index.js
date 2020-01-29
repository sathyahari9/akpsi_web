import React, {Component} from 'react';
// One bit of shitty code for auto-sizing of brothers companies
import Companies from './companies.png';
// Using semantic-ui for accordion
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import './index.scss';

class Brothers extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeIndex : 0,
        }
    }
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }
    render(){
        const {activeIndex} = this.state
        return(
            <React.Fragment>
                <div className="o-brothers-title">
                    <div className="o-brothers-title-heading"><h2>Our brotherhood</h2></div>
                </div>
                <div className="o-brothers-diversity">
                    <h3>Diversity of cultures and disciplines</h3>
                    <div className="o-brothers-diversity-sections">
                        <div className="o-brothers-diversity-sections-section">
                            <div className="o-brothers-diversity-sections-section-image">
                            </div>
                            <h5>Countries</h5>
                        </div>
                        <div className="o-brothers-diversity-sections-section">
                            <div className="o-brothers-diversity-sections-section-image">
                            </div>
                            <h5>Professions</h5>
                        </div>
                        <div className="o-brothers-diversity-sections-section">
                            <div className="o-brothers-diversity-sections-section-image">
                            </div>
                            <h5>Majors</h5>
                        </div>
                    </div>
                </div>
                <div className="o-brothers-companies">
                    <h3>Companies we work at</h3>
                    <img src={Companies} className="o-brothers-companies-logos"/>
                </div>
                <div className="o-brothers-list">
                    <h3>Active brothers</h3>
                <Accordion defaultActiveKey="0">
                    <div className="o-brothers-list-item">
                        <Accordion.Toggle as={Button} variant="light" eventKey="0">
                            <div className="o-brothers-list-item-header">
                                <h4>Omega class</h4>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <div className="o-brothers-list-item-body">
                                <div className="o-brothers-list-item-class">
                                    <div className="o-brothers-list-item-class-bro">
                                        <div className="o-brothers-list-item-class-bro-photo"/>
                                        <div className="o-brothers-list-item-class-bro-caption">
                                          Steven Han
                                        </div>
                                    </div>
                                    <div className="o-brothers-list-item-class-bro">
                                        <div className="o-brothers-list-item-class-bro-photo"/>
                                        <div className="o-brothers-list-item-class-bro-caption">
                                          Steven Han
                                        </div>
                                    </div>
                                    <div className="o-brothers-list-item-class-bro">
                                        <div className="o-brothers-list-item-class-bro-photo"/>
                                        <div className="o-brothers-list-item-class-bro-caption">
                                          Steven Han
                                        </div>
                                    </div>
                                    <div className="o-brothers-list-item-class-bro">
                                        <div className="o-brothers-list-item-class-bro-photo"/>
                                        <div className="o-brothers-list-item-class-bro-caption">
                                          Steven Han
                                        </div>
                                    </div>
                                    <div className="o-brothers-list-item-class-bro">
                                        <div className="o-brothers-list-item-class-bro-photo"/>
                                        <div className="o-brothers-list-item-class-bro-caption">
                                          Steven Han
                                        </div>
                                    </div>
                                    <div className="o-brothers-list-item-class-bro">
                                        <div className="o-brothers-list-item-class-bro-photo"/>
                                        <div className="o-brothers-list-item-class-bro-caption">
                                          Steven Han
                                        </div>
                                    </div>
                                    <div className="o-brothers-list-item-class-bro">
                                        <div className="o-brothers-list-item-class-bro-photo"/>
                                        <div className="o-brothers-list-item-class-bro-caption">
                                          Steven Han
                                        </div>
                                    </div>
                                    <div className="o-brothers-list-item-class-bro">
                                        <div className="o-brothers-list-item-class-bro-photo"/>
                                        <div className="o-brothers-list-item-class-bro-caption">
                                          Steven Han
                                        </div>
                                    </div>
                                    <div className="o-brothers-list-item-class-bro">
                                        <div className="o-brothers-list-item-class-bro-photo"/>
                                        <div className="o-brothers-list-item-class-bro-caption">
                                          Steven Han
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Collapse>
                    </div>
                    <div className="o-brothers-list-item">
                        <Accordion.Toggle as={Button} variant="light" eventKey="1">
                            <div className="o-brothers-list-item-header">
                                <h4>Alpha Beta class</h4>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <div className="o-brothers-list-item-body">Hello! I'm the body</div>
                        </Accordion.Collapse>
                    </div>
                    <div className="o-brothers-list-item">
                        <Accordion.Toggle as={Button} variant="light" eventKey="2">
                            <div className="o-brothers-list-item-header">
                                <h4>Alpha Gamma class</h4>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <div className="o-brothers-list-item-body">Hello! I'm the body</div>
                        </Accordion.Collapse>
                    </div>
                </Accordion>
                </div>
            </React.Fragment>
        );
    }
}

export default Brothers;