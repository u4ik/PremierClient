import React, { Component } from 'react';

import RestaurantImg from  '../../assets/locationIcons/restaurant.svg'
import AthleticImg from  '../../assets/locationIcons/athletic.svg'
import GroceryImg from  '../../assets/locationIcons/grocery.svg'
import MedicalImg from  '../../assets/locationIcons/medical2.svg'
import OfficeImg from  '../../assets/locationIcons/office.svg'
import ServicesImg from  '../../assets/locationIcons/services.svg'

import {Container,Col, Row, UncontrolledPopover, PopoverHeader, PopoverBody, Button} from 'reactstrap'
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from "mdbreact";

import './Services.css'


const iconStyle:React.CSSProperties={
    width: '50%',
    filter:'drop-shadow(1px 1px 1px #024160)',
    userSelect:'none',
}

const iconText:React.CSSProperties={
    fontSize:'1rem',
    color:'#E8C10D',
    fontWeight: 'bold',
    textShadow:'.1rem .1rem .1rem #024160',
    userSelect:'none'
}
//Popover Descriptions
let RestaurantInfo = 'There are many different services offered for our restaurant clients. Including, but not limited to, back kitchen cleaning, dining area, restroom mantinence and window care. '
let AthleticInfo = 'For our Athletic facilities, we offer a wide range of cleaning, such as sweeping courts, cleaning concessions, bleacher cleanup, restroom cleaning, and also deep cleaning.'
let MedicalInfo = 'Offering services for medical facilities is a new branch of our company we are so excited to share, helping with treatment room cleaning, as well as disinfectant services!'
let OfficeInfo = 'Our office cleaning is offered on a case by case bases, and includes sanitization, restroom cleaning, and floor cleaning.'
let GroceryInfo = 'For our grocery store clients we offer cleaning of the dairy, and frozen sections, including vaccuuming, cleaning doors, trays, and troughs.'
let ServicesInfo = 'We pride ourselves on the services we offer to make each experience amazing, some of those services being: Cleaning Chemical procurement & storage, Snow removal management, Landscaping management, Facility cleaning, Off site storage/daily delivery service, RFP management '


class ServicesHome extends React.Component {
    render() {
        return (
            <div style={{backgroundColor:'#009FE4', height: 'auto'}}>
                <h3 style={{fontSize:'1.7rem',paddingTop:'1%', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none', marginBottom: '1%', paddingBottom: '1%', backgroundColor: '#177BBD', borderBottom: 'solid 1px white',borderTop: 'solid 1px white'}}>Service Locations</h3>
                
                <div style={{display:'flex',  flexDirection:'row'}}>
                    <Container style={{display:'flex',  flexDirection:'column'}}>
                     <Row>
                        <Col>
                            <MDBContainer>
                    <div style={{ }} className="">
                                <MDBPopover
                                placement="top"
                                popover
                                clickable
                                id="popper1"
                                >
                                <MDBBtn>    
                                    <img id="PopoverFocus"  draggable = 'false' className='locationIcon' style ={iconStyle} src={RestaurantImg}/>
                                    <p style={iconText}>Food</p>
                                </MDBBtn>
                                <div>
                                    <MDBPopoverHeader>Restaurants</MDBPopoverHeader>
                                    <MDBPopoverBody>
                                    {RestaurantInfo}
                                    </MDBPopoverBody>
                                </div>
                                </MDBPopover>
                    </div>
                            </MDBContainer>
                        </Col>
                        <Col>
                            <MDBContainer>
                    <div style={{ }} className="">
                                <MDBPopover
                                placement="top"
                                popover
                                clickable
                                id="popper1"
                                >
                                <MDBBtn>    
                                    <img id="PopoverFocus"  draggable = 'false' className='locationIcon' style ={iconStyle} src={AthleticImg}/>
                                    <p style={iconText}>Athletics</p>
                                </MDBBtn>
                                <div>
                                    <MDBPopoverHeader>Athletics</MDBPopoverHeader>
                                    <MDBPopoverBody>
                                    {AthleticInfo}
                                    </MDBPopoverBody>
                                </div>
                                </MDBPopover>

                            

                    </div>
                            </MDBContainer>
                        </Col>
                        <Col>
                            <MDBContainer>
                    <div style={{ }} className="">
                                <MDBPopover
                                placement="top"
                                popover
                                clickable
                                id="popper1"
                                >
                                <MDBBtn>    
                                    <img id="PopoverFocus"  draggable = 'false' className='locationIcon' style ={iconStyle} src={MedicalImg}/>
                                    <p style={iconText}>Medical</p>
                                </MDBBtn>
                                <div>
                                    <MDBPopoverHeader>Medical</MDBPopoverHeader>
                                    <MDBPopoverBody>
                                    {MedicalInfo}
                                    </MDBPopoverBody>
                                </div>
                                </MDBPopover>

                            

                    </div>
                            </MDBContainer>
                        </Col>  
                    </Row>  
                    <Row>       
                        <Col>
                            <MDBContainer>
                    <div style={{ }} className="">
                                <MDBPopover
                                placement="top"
                                popover
                                clickable
                                id="popper1"
                                >
                                <MDBBtn>    
                                    <img id="PopoverFocus"  draggable = 'false' className='locationIcon' style ={iconStyle} src={OfficeImg}/>
                                    <p style={iconText}>Office</p>
                                </MDBBtn>
                                <div>
                                    <MDBPopoverHeader>Office</MDBPopoverHeader>
                                    <MDBPopoverBody>
                                    {OfficeInfo}
                                    </MDBPopoverBody>
                                </div>
                                </MDBPopover>

                            

                    </div>
                            </MDBContainer>
                        </Col>     
                        <Col>
                            <MDBContainer>
                    <div style={{}} className="">
                                <MDBPopover
                                placement="top"
                                popover
                                clickable
                                id="popper1"
                                >
                                <MDBBtn>    
                                    <img id="PopoverFocus"  draggable = 'false' className='locationIcon' style ={iconStyle} src={GroceryImg}/>
                                    <p style={iconText}>Grocery</p>
                                </MDBBtn>
                                <div>
                                    <MDBPopoverHeader>Grocery</MDBPopoverHeader>
                                    <MDBPopoverBody>
                                    {GroceryInfo}
                                    </MDBPopoverBody>
                                </div>
                                </MDBPopover>

                            

                    </div>
                            </MDBContainer>
                            </Col> 
                        <Col>                
                            <MDBContainer>
                    <div style={{ }} className="">
                                            <MDBPopover
                                            placement="top"
                                            popover
                                            clickable
                                            id="popper1"
                                            >
                                            <MDBBtn>    
                                                <img id="PopoverFocus"  draggable = 'false' className='locationIcon' style ={iconStyle} src={ServicesImg}/>
                                                <p style={iconText}>Services</p>
                                            </MDBBtn>
                                            <div>
                                                <MDBPopoverHeader>Services</MDBPopoverHeader>
                                                <MDBPopoverBody>
                                            {ServicesInfo}
                                                </MDBPopoverBody>
                                            </div>
                                            </MDBPopover>
                                </div>
                            </MDBContainer>
                        </Col>
                    </Row>      
                    </Container>
                </div>
            </div>
        );
    }
}

export default ServicesHome;



// Back kitchen
// Dining area
// Restrooms
// Window care

// **Athletic Facilities**
// ===============================
// Basketball Court Care
// Concessions cleaning
// Large restroom cleaning
// Bleacher cleanup

// **Medical Facilities**
// ===============================
// Treatment room cleaning
// Disinfecting services

// **Facilities management services**
// ===============================
// Cleaning Chemical procurement & storage
// Snow removal management
// Landscaping management
// Facility cleaning
// Off site storage/daily delivery service
// RFP management

// **Grocery Cleaning**
// ===============================
// Dairy section
// Frozen food section

// **Office Building**
// ===============================
// Sanitization
// Floor cleaning
// Restrooms