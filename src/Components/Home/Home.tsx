import React, { Component } from 'react';

import ServicesHome from '../Services/ServicesHome' 

import TestimonialsHome from '../Testimonials/TestimonialsHome' 

class Home extends React.Component {
    render() {
        return (
            <div style={{height:"auto"}}>
                <div style={{
                    
                }}>
                    <h1> HomeWelcome to Premier Commercial Services!</h1>
                </div>

                <div style={{borderBottom:'solid 1px white'}}>
                        <ServicesHome/>
                </div>
                <div style={{borderBottom:'solid 1px white'}}>
                        <TestimonialsHome/>
                </div>
            </div>
        );
    }
}

export default Home;