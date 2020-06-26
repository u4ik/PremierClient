import React, { Component } from 'react';

import RestaurantImg from  '../../assets/locationIcons/restaurant.svg'
import AthleticImg from  '../../assets/locationIcons/athletic.svg'
import GroceryImg from  '../../assets/locationIcons/grocery.svg'
import MedicalImg from  '../../assets/locationIcons/medical2.svg'
import OfficeImg from  '../../assets/locationIcons/office.svg'
import ServicesImg from  '../../assets/locationIcons/services.svg'

import {Container, Row, Col} from 'reactstrap'

import './Services.css'


const iconStyle:React.CSSProperties={
    width: '20%',
    filter:'drop-shadow(2px 2px 1px black)',
    userSelect:'none',
    


}

const iconText:React.CSSProperties={
    fontSize:'1rem',
    color:'#E8C10D',
    fontWeight: 'bold',
    textShadow:'1px 1px 1px black',
    userSelect:'none'
}

class ServicesHome extends React.Component {
    render() {
        return (
            <div style={{backgroundColor:'#009FE4', height: 'auto'}}>
                <h3 style={{fontSize:'1.7rem',paddingTop:'1%', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none', marginBottom: '1%', paddingBottom: '1%', backgroundColor: '#177BBD', borderBottom: 'solid 1px white'}}>Locations We Service</h3>
                
                <Container>
                    <Row>
                        <Col >
                        
                        <img draggable = 'false' className='locationIcon' style ={iconStyle} src={RestaurantImg}/>
                        <p style={iconText}>Restaurants</p>
                        </Col>

                        <Col>
                        <img draggable = 'false' className='locationIcon' style ={iconStyle} src={AthleticImg}/>
                        <p style={iconText}>Athletics</p>
                        </Col>

                        <Col>
                        <img draggable = 'false' className='locationIcon' style ={iconStyle} src={GroceryImg}/>
                        <p style={iconText}>Grocery</p>
                        </Col>
                         
                    </Row>
                    <Row>
                        <Col>
                        <img draggable = 'false' className='locationIcon' style ={iconStyle} src={MedicalImg}/>
                        <p style={iconText}>Medical</p>
                        </Col>
                        <Col>
                        <img draggable='false' className='locationIcon' style ={iconStyle} src={OfficeImg}/>
                        <p style={iconText}>Office</p>
                        </Col>
                        <Col>
                        <img draggable = 'false' className='locationIcon' style ={iconStyle} src={ServicesImg}/>
                        <p style={iconText}>Management Services</p>
                        </Col>
                    </Row>
                    

           



                </Container>
               





            </div>

      
        );
    }
}

export default ServicesHome;