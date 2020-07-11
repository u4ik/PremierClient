import React from 'react';

import RestaurantImg from  '../../assets/locationIcons/restaurant.svg'
import AthleticImg from  '../../assets/locationIcons/athletic.svg'
import GroceryImg from  '../../assets/locationIcons/grocery.svg'
import MedicalImg from  '../../assets/locationIcons/medical2.svg'
import OfficeImg from  '../../assets/locationIcons/office.svg'
import ServicesImg from  '../../assets/locationIcons/services.svg'

import {Container,Col, Row} from 'reactstrap'
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from "mdbreact";

import './Services.css'


const iconStyle:React.CSSProperties={
    width: '50%',
    filter:'drop-shadow(1px 1px 1px #024160)',
    userSelect:'none',
}

const iconText:React.CSSProperties={
    fontSize:'1rem',
    color:'#177BBD',
    fontWeight: 'bold',
    // textShadow:'.1rem .1rem .1rem #024160',
    userSelect:'none'
}
//Popover Descriptions
let RestaurantInfo = 'Something about Restaurants'
let AthleticInfo = 'Something about Athletics'
let MedicalInfo = 'Something about Medical'
let OfficeInfo = 'Something about Offices'
let GroceryInfo = 'Something about Grocery'
let ServicesInfo = 'Something about Services'


class ServicesHome extends React.Component {
    render() {
        return (
            <div style={{backgroundColor:'#f9f9f9', height: 'auto'}}>
                <h3 style={{fontSize:'1.9rem', paddingTop:'3%', color:'#444343', userSelect:'none', marginBottom: '1%', paddingBottom: '1%', borderBottom: 'solid 1px white', backgroundColor: 'white'}}>Service Locations</h3>
                {/* <hr style={{ marginLeft: '15%', marginRight: '15%' }} /> */}
                <div style={{display:'flex',  flexDirection:'row'}}>
                    <Container style={{display:'flex',  flexDirection:'column'}}>
                     <Row>
                        <Col>
                            <MDBContainer>
                    <div>
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
                {/* <hr style={{ marginLeft: '15%', marginRight: '15%' }} /> */}
            </div>
        );
    }
}

export default ServicesHome;