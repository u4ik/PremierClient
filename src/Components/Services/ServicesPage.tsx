import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBBadge, MDBCollapse } from "mdbreact";
import Athletics from '../../assets/services/athletics.jpg';
import Offices from '../../assets/services/offices.jpg';
import Medical from '../../assets/services/medical.jpg';
import Food from '../../assets/services/food.jpg';
import Facilities from '../../assets/services/facility.jpg';
import Groceries from '../../assets/services/grocery.jpg';


import FoodIcon from '../../assets/locationIcons/restaurantyellow.svg'
import AthleticIcon from '../../assets/locationIcons/athleticyellow.svg'
import OfficeIcon from '../../assets/locationIcons/officeyellow.svg'
import MedicalIcon from '../../assets/locationIcons/medical2yellow.svg'
import GroceryIcon from '../../assets/locationIcons/groceryyellow.svg'
import FacilitiesIcon from '../../assets/locationIcons/servicesyellow.svg'

import ServiceLogo from '../../assets/logoLayer2.png'

type MyState = {
    collapseID: string,
 
  
}


type ServiceProps = {
    signedIn: any
}

class ServicesPage extends React.Component <ServiceProps, MyState> {

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
            textShadow: '1px 1px 1px black',
            borderColor: 'transparent'
        }

        const iconStyles = {

            width:'4vh',
            filter: 'drop-shadow(.5px .5px .5px #024160)'
        }


        return (
            <div>
           
                    <img src={ServiceLogo} style={{marginTop: '5vh',width: '10%',filter:'drop-shadow(.1rem .1rem .1rem #024160)'}}></img>
        


                <div>
                    <h3 style={{fontSize:'1.9rem', paddingTop:'3%', textShadow:'0.5px 0.5px 0.5px #024160', color:'#444343', userSelect:'none', marginBottom: '1%', paddingBottom: '.5vh', borderBottom: 'solid 1px white', backgroundColor: 'white'}}> Welcome To Our Services </h3>
                    
                    
                    <p style={{    textShadow: 'black .2px .2px 1px', marginLeft: '25%', marginRight: '25%'}}> 
                    Feel free to browse through the services that we provide based on the location type.
                    Below each category you can find the specific services that we offer, along with the rates.
                    </p>

                    {this.props.signedIn ?
                        <p style={{    textShadow: 'black .2px .2px 1px', marginLeft: '25%', marginRight: '25%'}}>Then you may head over to 'My Orders' to create an order!</p>
                    :null}
                </div>
                <div>
                    <div >
              
                        <div style={{ cursor: 'pointer', paddingTop: '2vh',backgroundColor: '#177BBD', borderBottom: 'solid 1px white', borderTop:'solid 1px white'}}  onClick={this.toggleCollapse("basicCollapse1")}>
                            <img src={FoodIcon} style={iconStyles}></img>
                            <h3 style={{fontSize:'1.7rem', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none', marginBottom: 'none', paddingBottom: '.5vh',}}
                        
                            >Food</h3>
                        
                        </div>
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
                        <div style={{ cursor: 'pointer', paddingTop: '2vh',backgroundColor: '#177BBD', borderBottom: 'solid 1px white', borderTop:'solid 1px white'}}  onClick={this.toggleCollapse("basicCollapse2")}>
                            <img src={AthleticIcon} style={iconStyles}></img>
                            <h3 style={{fontSize:'1.7rem', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none', marginBottom: 'none', paddingBottom: '.5vh',}}
                        
                            >Athletics</h3>
                        
                        </div>
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
                        <div style={{ cursor: 'pointer', paddingTop: '2vh',backgroundColor: '#177BBD', borderBottom: 'solid 1px white', borderTop:'solid 1px white'}}  onClick={this.toggleCollapse("basicCollapse3")}>
                            <img src={MedicalIcon} style={iconStyles}></img>
                            <h3 style={{fontSize:'1.7rem', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none', marginBottom: 'none', paddingBottom: '.5vh',}}
                        
                            >Medical</h3>
                        
                        </div>
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
                        <div style={{ cursor: 'pointer', paddingTop: '2vh',backgroundColor: '#177BBD', borderBottom: 'solid 1px white', borderTop:'solid 1px white'}}  onClick={this.toggleCollapse("basicCollapse4")}>
                            <img src={FacilitiesIcon} style={iconStyles}></img>
                            <h3 style={{fontSize:'1.7rem', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none', marginBottom: 'none', paddingBottom: '.5vh',}}
                        
                            >Facilities</h3>
                        
                        </div>
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
                        <div style={{ cursor: 'pointer', paddingTop: '2vh',backgroundColor: '#177BBD', borderBottom: 'solid 1px white', borderTop:'solid 1px white'}}  onClick={this.toggleCollapse("basicCollapse5")}>
                            <img src={GroceryIcon} style={iconStyles}></img>
                            <h3 style={{fontSize:'1.7rem', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none', marginBottom: 'none', paddingBottom: '.5vh',}}
                        
                            >Groceries</h3>
                        
                        </div>
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
                        <div style={{ cursor: 'pointer', paddingTop: '2vh',backgroundColor: '#177BBD', borderBottom: 'solid 1px white', borderTop:'solid 1px white'}}  onClick={this.toggleCollapse("basicCollapse6")}>
                            <img src={OfficeIcon} style={iconStyles}></img>
                            <h3 style={{fontSize:'1.7rem', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none', marginBottom: 'none', paddingBottom: '.5vh',}}
                        
                            >Offices</h3>
                        
                        </div>
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