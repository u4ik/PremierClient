import React from 'react';

import RestaurantImg from  '../../assets/locationIcons/restaurantyellow.svg'
import AthleticImg from  '../../assets/locationIcons/athleticyellow.svg'
import GroceryImg from  '../../assets/locationIcons/groceryyellow.svg'
import MedicalImg from  '../../assets/locationIcons/medical2yellow.svg'
import OfficeImg from  '../../assets/locationIcons/officeyellow.svg'
import ServicesImg from  '../../assets/locationIcons/servicesyellow.svg'

import {Col, Row} from 'reactstrap'
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn } from "mdbreact";



import './Services.css'


const iconStyle:React.CSSProperties={
    width: '50%',
    filter:'drop-shadow(2px 2px 1px black)',
    userSelect:'none',
}

const iconText:React.CSSProperties={
    fontSize:'1rem',
    color:'white',
    fontWeight: 'bold',
    textShadow:'.1rem .1rem .1rem black',
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

            <div id='serviceHomeContainer' style={{display:'flex',flexDirection: 'column',width:'',marginLeft:'18.5%',marginRight:'18.5%',marginBottom:'3%',   background: 'rgba(26, 35, 64, 0.5)', borderRadius:'20px'}}>
                <h3  id='homeHeaderText'  className="headerText" style={{fontSize:'2.2rem', paddingTop:'1%', color:'white', userSelect:'none',paddingLeft:'1%', paddingRight:'1%', marginLeft:'15%' , marginRight:'15%', borderRadius:'25px' ,marginBottom: '1%', paddingBottom: '1%', backgroundColor: 'transparent', textShadow: '2px 2px 2px black'}}>Service Locations</h3>
                <div style={{display:'flex',  flexDirection:'row', justifyContent:'center', flexWrap:'wrap'}}>
               
                     <Row>
                            <Col>
                            
                        <div className = "icon1">
                                    <MDBPopover
                                    placement="top"
                                    popover
                                    clickable
                                    id="popper1"
                                    >
                                    <MDBBtn>    
                                        <img id="PopoverFocus"  draggable = 'false' className='locationIcon' style ={iconStyle} src={RestaurantImg}/>
                                        <p style={iconText} className="iconText">Restaurants</p>
                                    </MDBBtn>
                                    <div>
                                        <MDBPopoverHeader>Restaurants</MDBPopoverHeader>
                                        <MDBPopoverBody>
                                        {RestaurantInfo}
                                        </MDBPopoverBody>
                                    </div>
                                    </MDBPopover>
                        </div>
                                
                            </Col>
                            <Col>
                            
                        <div style={{ }}  className = "icon1">
                                    <MDBPopover
                                    placement="top"
                                    popover
                                    clickable
                                    id="popper1"
                                    >
                                    <MDBBtn>    
                                        <img id="PopoverFocus"  draggable = 'false' className='locationIcon' style ={iconStyle} src={AthleticImg}/>
                                        <p style={iconText} className="iconText">Athletics</p>
                                    </MDBBtn>
                                    <div>
                                        <MDBPopoverHeader>Athletics</MDBPopoverHeader>
                                        <MDBPopoverBody>
                                        {AthleticInfo}
                                        </MDBPopoverBody>
                                    </div>
                                    </MDBPopover>

                                

                        </div>
                                
                            </Col>
                            <Col>
                            
                        <div style={{ }}  className = "icon1">
                                    <MDBPopover
                                    placement="top"
                                    popover
                                    clickable
                                    id="popper1"
                                    >
                                    <MDBBtn>    
                                        <img id="PopoverFocus"  draggable = 'false' className='locationIcon' style ={iconStyle} src={MedicalImg}/>
                                        <p style={iconText} className="iconText">Medical</p>
                                    </MDBBtn>
                                    <div>
                                        <MDBPopoverHeader>Medical</MDBPopoverHeader>
                                        <MDBPopoverBody>
                                        {MedicalInfo}
                                        </MDBPopoverBody>
                                    </div>
                                    </MDBPopover>

                                

                        </div>
                                
                            </Col>  
                        </Row>  
                        <Row>       
                            <Col>
                            
                        <div style={{ }}  className = "icon1">
                                    <MDBPopover
                                    placement="top"
                                    popover
                                    clickable
                                    id="popper1"
                                    >
                                    <MDBBtn>    
                                        <img id="PopoverFocus"  draggable = 'false' className='locationIcon' style ={iconStyle} src={OfficeImg}/>
                                        <p style={iconText} className="iconText">Office</p>
                                    </MDBBtn>
                                    <div>
                                        <MDBPopoverHeader>Office</MDBPopoverHeader>
                                        <MDBPopoverBody>
                                        {OfficeInfo}
                                        </MDBPopoverBody>
                                    </div>
                                    </MDBPopover>

                                

                        </div>
                                
                            </Col>     
                            <Col>
                            
                        <div style={{}}  className = "icon1">
                                    <MDBPopover
                                    placement="top"
                                    popover
                                    clickable
                                    id="popper1"
                                    >
                                    <MDBBtn>    
                                        <img id="PopoverFocus"  draggable = 'false' className='locationIcon' style ={iconStyle} src={GroceryImg}/>
                                        <p style={iconText} className="iconText">Grocery</p>
                                    </MDBBtn>
                                    <div>
                                        <MDBPopoverHeader>Grocery</MDBPopoverHeader>
                                        <MDBPopoverBody>
                                        {GroceryInfo}
                                        </MDBPopoverBody>
                                    </div>
                                    </MDBPopover>

                                

                        </div>
                                
                                </Col> 
                            <Col>                
                            
                        <div style={{ }}  className = "icon1">
                                                <MDBPopover
                                                placement="top"
                                                popover
                                                clickable
                                                id="popper1"
                                                >
                                                <MDBBtn>    
                                                    <img id="PopoverFocus"  draggable = 'false' className='locationIcon' style ={iconStyle} src={ServicesImg}/>
                                                    <p style={iconText} className="iconText">Services</p>
                                                </MDBBtn>
                                                <div>
                                                    <MDBPopoverHeader>Services</MDBPopoverHeader>
                                                    <MDBPopoverBody>
                                                {ServicesInfo}
                                                    </MDBPopoverBody>
                                                </div>
                                                </MDBPopover>
                                    </div>
                                
                            </Col>
                        </Row>      
               
                </div>
                {/* <hr style={{ marginLeft: '15%', marginRight: '15%' }} /> */}
            </div>
   

            );
    }
}

export default ServicesHome;