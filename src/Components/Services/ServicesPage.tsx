import React, { Component } from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBBadge, MDBCollapse } from "mdbreact";
import Athletics from '../../assets/services/athletics.jpg';
import Offices from '../../assets/services/offices.jpg';
import Medical from '../../assets/services/medical.jpg';
import Food from '../../assets/services/food.jpg';
import Facilities from '../../assets/services/facility.jpg';
import Groceries from '../../assets/services/grocery.jpg';

type MyState = {
    collapseID: string
}

class ServicesPage extends React.Component <unknown, MyState> {

    state: MyState = {
        collapseID: ""
      }
      
      toggleCollapse = (collapseID: string) => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
      }


    render() {
        const listItemStyle = {
            backgroundColor: 'transparent', 
            color: 'white', 
            fontWeight: 'bold', 
            fontSize: '1.2rem',
            textShadow: '2px 2px 2px black',
            borderColor: 'transparent'
        }

        return (
            <div>
                <h3 style={{fontSize:'1.7rem', paddingTop:'1%', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none', marginBottom: 'none', paddingBottom: '1%', backgroundColor: '#177BBD', borderBottom: 'solid 1px white', borderTop:'solid 1px white'}}>All Services</h3>
                <div style={{ marginTop: '5%', marginBottom: '5%' }}>
                    <h4> Welcome to our services </h4>
                    <p style={{ marginLeft: '25%', marginRight: '25%'}}> some placeholder texts here some placeholder texts heresome placeholder texts heresome placeholder texts heresome placeholder texts here</p>
                    
                </div>
                <div>
                    <div>
                        <h3 style={{fontSize:'1.7rem', cursor: 'pointer', paddingTop:'1%', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none', marginBottom: 'none', paddingBottom: '1%', backgroundColor: '#177BBD', borderBottom: 'solid 1px white', borderTop:'solid 1px white'}}
                        onClick={this.toggleCollapse("basicCollapse1")}
                        >Food</h3>
                        <MDBCollapse id="basicCollapse1" isOpen={this.state.collapseID} style={{ backgroundImage: `url(${Food})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <MDBContainer>
                                <MDBListGroup style={{ marginLeft: '25%', marginRight: '25%', marginBottom: '5px' }}>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">Back kitchen<MDBBadge color="primary"
                                        pill>$400,000</MDBBadge>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">Dining area<MDBBadge
                                        color="primary" pill>$20</MDBBadge>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">Restrooms<MDBBadge color="primary"
                                        pill>$500</MDBBadge>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">Window care<MDBBadge color="primary"
                                        pill>$10,000</MDBBadge>
                                    </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBContainer>
                        </MDBCollapse>
                    </div>

                    <div>
                        <h3 style={{fontSize:'1.7rem', cursor: 'pointer', paddingTop:'1%', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none', marginBottom: 'none', paddingBottom: '1%', backgroundColor: '#177BBD', borderBottom: 'solid 1px white', borderTop:'solid 1px white'}}
                        onClick={this.toggleCollapse("basicCollapse2")}
                        >Athletics</h3>
                        <MDBCollapse id="basicCollapse2" isOpen={this.state.collapseID} style={{ backgroundImage: `url(${Athletics})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <MDBContainer>
                                <MDBListGroup style={{ marginLeft: '25%', marginRight: '25%', marginBottom: '5px' }}>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">Basketball Court Care<MDBBadge color="primary"
                                        pill>$400,000</MDBBadge>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">Concessions cleaning<MDBBadge
                                        color="primary" pill>$20</MDBBadge>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">Large restroom cleaning<MDBBadge color="primary"
                                        pill>$500</MDBBadge>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">Bleacher cleanup<MDBBadge color="primary"
                                        pill>$10,000</MDBBadge>
                                    </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBContainer>
                        </MDBCollapse>
                    </div>

                    <div>
                        <h3 style={{fontSize:'1.7rem', cursor: 'pointer', paddingTop:'1%', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none', marginBottom: 'none', paddingBottom: '1%', backgroundColor: '#177BBD', borderBottom: 'solid 1px white', borderTop:'solid 1px white'}}
                        onClick={this.toggleCollapse("basicCollapse3")}
                        >Medical</h3>
                        <MDBCollapse id="basicCollapse3" isOpen={this.state.collapseID} style={{ backgroundImage: `url(${Medical})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <MDBContainer>
                                <MDBListGroup style={{ marginLeft: '25%', marginRight: '25%', marginBottom: '5px' }}>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">Treatment room cleaning<MDBBadge color="primary"
                                        pill>$400,000</MDBBadge>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">Disinfecting services<MDBBadge
                                        color="primary" pill>$20</MDBBadge>
                                    </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBContainer>
                        </MDBCollapse>
                    </div>

                    <div>
                        <h3 style={{fontSize:'1.7rem', cursor: 'pointer', paddingTop:'1%', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none', marginBottom: 'none', paddingBottom: '1%', backgroundColor: '#177BBD', borderBottom: 'solid 1px white', borderTop:'solid 1px white'}}
                        onClick={this.toggleCollapse("basicCollapse4")}
                        >Facilities</h3>
                        <MDBCollapse id="basicCollapse4" isOpen={this.state.collapseID} style={{ backgroundImage: `url(${Facilities})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <MDBContainer>
                                <MDBListGroup style={{ marginLeft: '25%', marginRight: '25%', marginBottom: '5px' }}>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">Cleaning Chemical procurement & storage<MDBBadge color="primary"
                                        pill>$400,000</MDBBadge>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">Snow removal management<MDBBadge
                                        color="primary" pill>$20</MDBBadge>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">Landscaping management<MDBBadge color="primary"
                                        pill>$500</MDBBadge>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">Facility cleaning<MDBBadge color="primary"
                                        pill>$10,000</MDBBadge>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">Off site storage/daily delivery service<MDBBadge color="primary"
                                        pill>$10,000</MDBBadge>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">RFP management<MDBBadge color="primary"
                                        pill>$10,000</MDBBadge>
                                    </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBContainer>
                        </MDBCollapse>
                    </div>

                    <div>
                        <h3 style={{fontSize:'1.7rem', cursor: 'pointer', paddingTop:'1%', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none', marginBottom: 'none', paddingBottom: '1%', backgroundColor: '#177BBD', borderBottom: 'solid 1px white', borderTop:'solid 1px white'}}
                        onClick={this.toggleCollapse("basicCollapse5")}
                        >Groceries</h3>
                        <MDBCollapse id="basicCollapse5" isOpen={this.state.collapseID} style={{ backgroundImage: `url(${Groceries})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <MDBContainer>
                                <MDBListGroup style={{ marginLeft: '25%', marginRight: '25%', marginBottom: '5px' }}>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">Dairy section<MDBBadge color="primary"
                                        pill>$400,000</MDBBadge>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">Frozen food section<MDBBadge
                                        color="primary" pill>$20</MDBBadge>
                                    </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBContainer>
                        </MDBCollapse>
                    </div>

                    <div>
                        <h3 style={{fontSize:'1.7rem', cursor: 'pointer', paddingTop:'1%', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none', marginBottom: 'none', paddingBottom: '1%', backgroundColor: '#177BBD', borderBottom: 'solid 1px white', borderTop:'solid 1px white'}}
                        onClick={this.toggleCollapse("basicCollapse6")}
                        >Offices</h3>
                        <MDBCollapse id="basicCollapse6" isOpen={this.state.collapseID} style={{ backgroundImage: `url(${Offices})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <MDBContainer>
                                <MDBListGroup style={{ marginLeft: '25%', marginRight: '25%', marginBottom: '5px' }}>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">Sanitization<MDBBadge color="primary"
                                        pill>$400,000</MDBBadge>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">Floor cleaning<MDBBadge
                                        color="primary" pill>$20</MDBBadge>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem style={listItemStyle} className="d-flex justify-content-between align-items-center">Restrooms<MDBBadge color="primary"
                                        pill>$500</MDBBadge>
                                    </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBContainer>
                        </MDBCollapse>
                    </div>

               </div>
                
            </div>
        );
    }
}

export default ServicesPage;