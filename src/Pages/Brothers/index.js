import React, {Component} from 'react';
// One bit of shitty code for auto-sizing of brothers companies
import Companies from './companies.png';
// Using semantic-ui for accordion
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Fade from 'react-reveal/Fade';

import './index.scss';
// const fs = require('fs')

class Brothers extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeIndex : 0,
            brothers: 
            {
                alphabeta: [
                {
                    last_name: "Balaji",
                    first_name: "Vaishnav"
                    },
                    {
                    last_name: "Dubrosa",
                    first_name: "Fiona"
                    },
                    {
                    last_name: "Fiordalis",
                    first_name: "Ruth"
                    },
                    {
                    last_name: "Frank",
                    first_name: "Alec"
                    },
                    /* {
                    last_name: "Li",
                    first_name: "Christina"
                    }, */
                    {
                    last_name: "Luong",
                    first_name: "Nicholas"
                    },
                    {
                    last_name: "Song",
                    first_name: "Jesse"
                    },
                    {
                    last_name: "Tully",
                    first_name: "Alessandra"
                    },
                    {
                    last_name: "Xu",
                    first_name: "Jeff"
                    },
                    {
                    last_name: "Yu",
                    first_name: "Kevin"
                    },
                    {
                    last_name: "Zhang",
                    first_name: "Kristy"
                    },
                ],
                alphagamma: [
                    {
                        last_name: "Hassonjee",
                        first_name: "Ammar"
                      },
                      {
                        last_name: "Heifetz",
                        first_name: "Milana"
                      },
                      {
                        last_name: "Lin",
                        first_name: "Linda"
                      },
                      {
                        last_name: "Low Wey Hsuan",
                        first_name: "Kyra"
                      },
                      {
                        last_name: "Rao",
                        first_name: "Jay"
                      },
                      {
                        last_name: "Wang",
                        first_name: "David"
                      },
                      {
                        last_name: "Yang",
                        first_name: "Eric"
                      },
                ],
                alphadelta: [
                      /* {
                        last_name: "Bhave",
                        first_name: "Pallavi"
                      }, */
                      {
                        last_name: "Chen",
                        first_name: "Nathan"
                      },
                      {
                        last_name: "Ding",
                        first_name: "Sylvia"
                      },
                      {
                        last_name: "Dzieniszewski",
                        first_name: "Arthur"
                      },
                      {
                        last_name: "Guo",
                        first_name: "Matthew"
                      },
                      {
                        last_name: "Hari",
                        first_name: "Sathya"
                      },
                      {
                        last_name: "Hon",
                        first_name: "Natalie"
                      },
                      {
                        last_name: "Iordache",
                        first_name: "Alexandra"
                      },
                      {
                        last_name: "Jain",
                        first_name: "Nidhi"
                      },
                      {
                        last_name: "Kerudi",
                        first_name: "Shifali"
                      },
                      {
                        last_name: "Menon",
                        first_name: "Govind"
                      },
                      {
                        last_name: "Peng",
                        first_name: "Sophy"
                      },
                      {
                        last_name: "Qin",
                        first_name: "Oliver"
                      },
                      {
                        last_name: "Shah",
                        first_name: "Maya"
                      },
                      {
                        last_name: "Yang",
                        first_name: "Kelly"
                      },
                ],
                alphaepsilon: [
                    {
                        last_name: "Dyer",
                        first_name: "Karin"
                      },
                      {
                        last_name: "Frech",
                        first_name: "Christian"
                      },
                      {
                        last_name: "Luo",
                        first_name: "Tina"
                      },
                      {
                        last_name: "Pena",
                        first_name: "Carlos"
                      },
                      {
                        last_name: "Susanto",
                        first_name: "Nadia"
                      },
                      {
                        last_name: "Wadhwa",
                        first_name: "Meet"
                      },
                      {
                        last_name: "Zhou",
                        first_name: "Xinda"
                      },
                ],
                alphazeta: [
                    {
                        last_name: "Han",
                        first_name: "Steven"
                      },
                      {
                        last_name: "Karur",
                        first_name: "Naren"
                      },
                      {
                        last_name: "Kim",
                        first_name: "Susie"
                      },
                      {
                        last_name: "Liu",
                        first_name: "Jamie"
                      },
                      {
                        last_name: "Song",
                        first_name: "Alyssa"
                      },
                      {
                        last_name: "Vandenavond",
                        first_name: "Bryce"
                      },
                      {
                        last_name: "Wang",
                        first_name: "Adrienne"
                      },
                      {
                        last_name: "Yukevich",
                        first_name: "Emma"
                      }
                ]
            }
        }
    }
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }
    render(){
        return(
            <React.Fragment>
                <div className="o-brothers-title">
                    <Fade>
                        <div className="o-brothers-title-heading"><h2>Our Brotherhood</h2></div>
                    </Fade>
                </div>
                <div className="o-brothers-list">
                    <Fade>
                    <h3>Active Brothers</h3><br></br>
                    <Accordion defaultActiveKey="0">
                        <div className="o-brothers-list-item">
                            <Accordion.Toggle as={Button} variant="light" eventKey="0">
                                <div className="o-brothers-list-item-header">
                                    <h4>Alpha Beta Class</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <div className="o-brothers-list-item-body">
                                    <div className="o-brothers-list-item-class">
                                        {this.state.brothers.alphabeta.map((brother) => 
                                            <div className="o-brothers-list-item-class-bro">
                                            <img src={require('./pictures/' + brother.first_name + '.jpg')} className="o-brothers-list-item-class-bro-photo" alt="Brother Name" />                                            <div className="o-brothers-list-item-class-bro-caption">
                                                {brother.first_name} {brother.last_name}
                                                </div>
                                            </div>
                                            )}
                                    </div>
                                </div>
                            </Accordion.Collapse>
                        </div><br></br>
                        <div className="o-brothers-list-item">
                            <Accordion.Toggle as={Button} variant="light" eventKey="1">
                                <div className="o-brothers-list-item-header">
                                    <h4>Alpha Gamma Class</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                            <div className="o-brothers-list-item-body">
                                    <div className="o-brothers-list-item-class">
                                        {this.state.brothers.alphagamma.map((brother) => 
                                            <div className="o-brothers-list-item-class-bro">
                                            <img src={require('./pictures/' + brother.first_name + '.jpg')} className="o-brothers-list-item-class-bro-photo" alt="Brother Name" />
                                                <div className="o-brothers-list-item-class-bro-caption">
                                                {brother.first_name} {brother.last_name}
                                                </div>
                                            </div>
                                            )}
                                    </div>
                                </div>
                            </Accordion.Collapse>
                        </div><br></br>
                        <div className="o-brothers-list-item">
                            <Accordion.Toggle as={Button} variant="light" eventKey="2">
                                <div className="o-brothers-list-item-header">
                                    <h4>Alpha Delta Class</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <div className="o-brothers-list-item-body">
                                    <div className="o-brothers-list-item-class">
                                        {this.state.brothers.alphadelta.map((brother) => 
                                            <div className="o-brothers-list-item-class-bro">
                                            <img src={require('./pictures/' + brother.first_name + '.jpg')} className="o-brothers-list-item-class-bro-photo" alt="Brother Name" />
                                                <div className="o-brothers-list-item-class-bro-caption">
                                                {brother.first_name} {brother.last_name}
                                                </div>
                                            </div>
                                            )}
                                    </div>
                                </div>
                            </Accordion.Collapse>
                        </div><br></br>
                        <div className="o-brothers-list-item">
                            <Accordion.Toggle as={Button} variant="light" eventKey="3">
                                <div className="o-brothers-list-item-header">
                                    <h4>Alpha Epsilon Class</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                                <div className="o-brothers-list-item-body">
                                    <div className="o-brothers-list-item-class">
                                        {this.state.brothers.alphaepsilon.map((brother) => 
                                            <div className="o-brothers-list-item-class-bro">
                                            <img src={require('./pictures/' + brother.first_name + '.jpg')} className="o-brothers-list-item-class-bro-photo" alt="Brother Name" />
                                                <div className="o-brothers-list-item-class-bro-caption">
                                                {brother.first_name} {brother.last_name}
                                                </div>
                                            </div>
                                            )}
                                    </div>
                                </div>
                            </Accordion.Collapse>
                        </div><br></br>
                        <div className="o-brothers-list-item">
                            <Accordion.Toggle as={Button} variant="light" eventKey="4">
                                <div className="o-brothers-list-item-header">
                                    <h4>Alpha Zeta Class</h4>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4">
                                <div className="o-brothers-list-item-body">
                                    <div className="o-brothers-list-item-class">
                                        {this.state.brothers.alphazeta.map((brother) => 
                                            <div className="o-brothers-list-item-class-bro">
                                            <img src={require('./pictures/' + brother.first_name + '.jpg')} className="o-brothers-list-item-class-bro-photo" alt="Brother Name" />
                                                <div className="o-brothers-list-item-class-bro-caption">
                                                {brother.first_name} {brother.last_name}
                                                </div>
                                            </div>
                                            )}
                                    </div>
                                </div>
                            </Accordion.Collapse>
                        </div>
                    </Accordion>
                    </Fade>
                </div>
                {/* <div className="o-brothers-diversity">
                    <Fade>
                    <h3>Diversity of Cultures and Disciplines</h3>
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
                    </Fade>
                </div> */}
                <div className="o-brothers-companies">
                    <Fade>
                        <h3>Companies We Work At</h3><br></br>
                        <img src={Companies} className="o-brothers-companies-logos" alt="Companies" />
                    </Fade>
                </div>
            </React.Fragment>
        );
    }
}

export default Brothers;