import React, { Component } from 'react';

import ServicesHome from '../Services/ServicesHome' ;

import TestimonialsHome from '../Testimonials/TestimonialsHome' ;

import LogoLayer from '../../assets/logoLayer.png'

class Home extends React.Component {
    render() {
        return (
            <div style={{height:"auto", backgroundColor:'#009FE4'}}>
                <h3 style={{fontSize:'1.7rem',paddingTop:'1%', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none', marginBottom: '1%', paddingBottom: '1%', backgroundColor: '#177BBD', borderTop: 'solid 1px white', borderBottom: 'solid 1px white'}}>About</h3>
                <div style={{ display: 'flex', flexDirection:'row', justifyContent:'center', paddingBottom:'3%'}} >
                    <div style={{display:'flex',flexDirection: 'column',width:'70%',}}>
                        <h4 style={{fontSize:'1.3rem', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none' }}>Welcome!</h4>
                        <div style={{backgroundColor:'white', filter:'drop-shadow(2px 2px 2px black', borderRadius:'10px', padding:'2%', textAlign:'center'}}>
                            <p style={{fontSize: '.8rem', filter:'drop-shadow(1px 1px 3px lightgrey'}}><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et augue orci. Nunc eu placerat lectus, eget aliquet diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et augue orci. Nunc eu placerat lectus, eget aliquet diam. </b> </p>
                        </div>
                    </div>
                    
                  
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