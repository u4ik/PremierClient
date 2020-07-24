
import React, { useState, useEffect } from 'react';

import './TestimonialsHome.css'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const TestimonialsHome: React.FunctionComponent = (props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animating, setAnimating] = useState(false);
  const [testimonialData, setTestimonialData] = useState<any>([])
  const [testUserData, setTestUserData] = useState<any>()
  
  const getTestimonials = () => {
    const APIURL:string = 'http://localhost:3000/testimonial/all'
    fetch(APIURL ,{
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    }).then(res => res.json())
    .then(testData => {
        setTestimonialData(testData.AllTestimonials);
        setTestUserData(testData)
    })
    .catch(err => console.warn(err))
}
useEffect (() => {
    getTestimonials();
    
 },[])
  const slides = testimonialData.map((item:any) => {
    return (
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        
        {/* <img src={IconBackground} alt= "TestimonialBacker" /> */}
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
        {/* <CarouselCaption style = {{lineHeight: '1rem', marginTop:''}}  captionText={"-" + item.userFirstName + " " + item.userLastName}  captionHeader={`"${item.userQuote}"`}/> */}
        

        <div className="carousel-caption d-none d-md-block" style={{
          backgroundColor:'#177BBD',
          borderRadius:'1rem',
          paddingLeft:'.5rem',
          paddingRight:'.5rem',
          marginTop:'.5rem',
          userSelect:'none',
          marginBottom:'.5rem',
          width:'auto',
          filter: 'drop-shadow(1px 1px 1px black)',
          marginLeft:'20%',
          marginRight:'20%'}}>



          <h3 style={{fontSize:'1.4rem', textShadow:'.1px .1px .1px grey', color:'white', userSelect:'none'}}>{ `"` + `${item.userQuote}` + `"`}</h3>
          <div style={{transform: 'scale(2)'}}>
          <Rater  total={5} rating={item.userRating} interactive={false}  />
          </div>
        </div>
        <div>
            <h4 style= {{fontSize: '1.1rem', color:'#177BBD',  userSelect:'none'}}>{"- " + `${item.userFirstName}` + " " + `${item.userLastName}`}</h4>
            <h5 style={{fontSize:'.8rem', color:'grey', userSelect:'none'}}>{item.userLocationType}</h5>
            <h5 style={{fontSize:'.8rem', color:'grey', userSelect:'none'}}>{item.userLocation}</h5>
            <p style={{fontSize:'.7rem', color:'grey', userSelect:'none'}}>{item.serviceCompletionDate}</p>
        </div>
        
    
        </div>
      </CarouselItem> 
    );
  });
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === testimonialData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? testimonialData.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  
  }
  const goToIndex = (newIndex:any) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }


  return (
    <div style={{width:'auto', backgroundColor:'white'}}>
        <h3 style={{fontSize:'1.9rem',paddingTop:'1%', color:'#444343', userSelect:'none', marginBottom: '1%', paddingBottom: '1%', borderBottom: 'solid 1px white', backgroundColor: 'white'}}>Testimonials</h3>
        <Carousel
          activeIndex={activeIndex}
          next={next} 
          previous={previous}
          >
          {slides}
          <div style={{marginTop:'1%', backgroundColor:'#009FE4'}}>
          {/* <CarouselIndicators items={testimonialData} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
          </div>
          <div>
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </div>
        </Carousel>
    </div>
  );
}



export default TestimonialsHome;