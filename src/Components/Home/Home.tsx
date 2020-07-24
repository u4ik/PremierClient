import React from 'react';
import {Col, Container} from 'reactstrap'

import ServicesHome from '../Services/ServicesHome' ;
import TestimonialsHome from '../Testimonials/TestimonialsHome';
import HomeBackground from '../../assets/Home/home-background.jpg';

import LogoIcon from '../../assets/Premier-Commercial-Services-icon.svg'

import './Home.css'

// import LogoLayer from '../../assets/logoLayer.png'

class Home extends React.Component {
    render() {
        return (
            <div style={{height:"auto", backgroundImage: `url(${HomeBackground})`, backgroundRepeat: '', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                {/* <h3  style={{fontSize:'1.9rem', paddingTop:'3%', textShadow:'0.5px 0.5px 0.5px #024160', color:'#444343', userSelect:'none', marginBottom: '1%', paddingBottom: '1%', borderBottom: 'solid 1px white', backgroundColor: 'white'}}>About</h3> */}
                <div style={{ display: 'flex', flexDirection:'row', justifyContent:'center', paddingBottom:'3%',paddingTop:'3%'}} >
                    <div style={{display:'flex',flexDirection: 'column',width:'70%',}}>
             
                        <div className="welcomeText" style={{padding:'2%', textAlign:'center'}}>
                        {/* <div className="welcomeText" style={{backgroundColor:'white', opacity: '0.75',  filter:'drop-shadow(2px 2px 2px black', borderRadius:'10px', padding:'2%', textAlign:'center'}}> */}

                            <Container>

                            <Col className="welcomeText">
                                <img src={LogoIcon} style={{width: '10vh', marginBottom: '1rem'}}></img>
                            <h4 style={{fontSize:'1.8rem', textShadow:'1px 1px 1px #024160', color:'#E8C10D', userSelect:'none' }}>
                                Welcome!</h4>
                            <p className='welcomeText' style={{ fontSize: '1.1rem', textShadow:'1px 1px 1px black', lineHeight:'3rem', color: 'white'}}>
                                In simplest terms, Premier Commercial Services provides a refreshingly reliable and unique approach to providing basic facilities management resources. Our foundational services are janitorial/cleaning, light maintenance and grounds keeping.
                        Our approach to customer accountability and collaboration are causing businesses to leave their traditional facilities support services and switch to Premier. In exchange, they partner with a professional and reliable resource that eliminates the headaches often related to this type of service.</p>
                    <p style={{ marginLeft:'10%', marginRight:'10%',fontSize: '0.9rem', textShadow:'1px 1px 1px black', lineHeight:'1rem', color: 'white'}}>
                        -Michael Rootes</p>
                    <p style={{ marginLeft:'10%', marginRight:'10%',fontSize: '0.9rem', textShadow:'1px 1px 1px black', lineHeight:'1rem', color: 'white'}}>
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
                <div style={{borderBottom:'solid 1px white', backgroundColor: '#f9f9f9'}}>
                    <TestimonialsHome/>
                </div>



                
            </div>
        );
    }
}

export default Home;