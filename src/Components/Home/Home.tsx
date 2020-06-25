import React, { Component } from 'react';

import ServicesHome from '../Services/ServicesHome' 

import TestimonialsHome from '../Testimonials/TestimonialsHome' 

class Home extends React.Component {
    render() {
        return (
            <div style={{height:"auto"}}>
                <div style={{
                    
                }}>
                    <h1 style= {{fontSize:'1rem'}}> Home/welcome/whatever: Welcome to Premier Commercial Services!</h1>
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