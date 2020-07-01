import React, { Component } from 'react';
import {Col, Container, Row} from 'reactstrap'

import ServicesHome from '../Services/ServicesHome' ;
import TestimonialsHome from '../Testimonials/TestimonialsHome' ;

import './Home.css'

import LogoLayer from '../../assets/logoLayer.png'

class Home extends React.Component {
    render() {
        return (
            <div style={{height:"auto", backgroundColor:'#009FE4'}}>
                <h3 id="titleId" style={{fontSize:'1.7rem',paddingTop:'1%', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none', paddingBottom: '1%', backgroundColor: '#177BBD', borderTop: 'solid 1px white', borderBottom: 'solid 1px white', marginBottom:'0'}}>About</h3>
                <div style={{ display: 'flex', flexDirection:'row', justifyContent:'center', paddingBottom:'3%',paddingTop:'3%'}} >
                    <div style={{display:'flex',flexDirection: 'column',width:'70%',}}>
             
                        <div className="welcomeText" style={{backgroundColor:'white', filter:'drop-shadow(2px 2px 2px black', borderRadius:'10px', padding:'2%', textAlign:'center'}}>

                            <Container>

                                <Col className="welcomeText">
                            <h4 style={{fontSize:'1.8rem', textShadow:'1px 1px 1px #024160', color:'#E8C10D', userSelect:'none' }}>
                                Welcome!</h4>
                            <p className='welcomeText' style={{ fontSize: '1.2rem', lineHeight:'3rem',filter:'drop-shadow(1px 1px 1px lightgrey'}}><b>
                                In simplest terms, Premier Commercial Services provides a refreshingly reliable and unique approach to providing basic facilities management resources. Our foundational services are janitorial/cleaning, light maintenance and grounds keeping.
                        Our approach to customer accountability and collaboration are causing businesses to leave their traditional facilities support services and switch to Premier. In exchange, they partner with a professional and reliable resource that eliminates the headaches often related to this type of service. </b> </p>
                    <p style={{ marginLeft:'10%',marginRight:'10%',fontSize: '1.2rem', lineHeight:'1rem',filter:'drop-shadow(1px 1px 1px lightgrey'}}><b>
                        -Michael Rootes</b></p>
                    <p style={{ marginLeft:'10%',marginRight:'10%',fontSize: '1.2rem', lineHeight:'1rem',filter:'drop-shadow(1px 1px 1px lightgrey'}}>
                        Owner at Premier Commercial Services LLC</p>
                    </Col>
                    </Container>

                        </div>
                    </div>
                    
                  
                </div>

                <div>


                </div>



                <div style={{borderBottom:'solid 1px white'}}>
                    <ServicesHome/>
                </div>
                <div style={{borderBottom:'solid 1px white', backgroundColor: '#009FE4'}}>
                    <TestimonialsHome/>
                </div>



                
            </div>
        );
    }
}

export default Home;