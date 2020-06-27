
import React, { useState, useEffect } from 'react';

import './TestimonialsHome.css'

import IconBackground from '../../assets/IconBackground.png'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
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
          backgroundColor:'white',
          borderRadius:'1rem',
          paddingLeft:'.5rem',
          paddingRight:'.5rem',
          marginTop:'.5rem',
          userSelect:'none',
          marginBottom:'.5rem',
          width:'auto',
          filter: 'drop-shadow(2px 2px 2px black)',
          marginLeft:'20%',
          marginRight:'20%'}}>



          <h3 style={{fontSize:'1.4rem', textShadow:'.1px .1px .1px grey', color:'black', userSelect:'none'}}>{ `"` + `${item.userQuote}` + `"`}</h3>
         
        </div>
        <div>
            <h4 style= {{fontSize: '1.1rem', textShadow:'1px 1px 1px black', color:'#E8D47B',  userSelect:'none'}}>{"- " + `${item.userFirstName}` + " " + `${item.userLastName}`}</h4>
            <h5 style={{fontSize:'.8rem', color:'white', textShadow:'1px 1px 1px black', userSelect:'none'}}>{item.userLocationType}</h5>
            <h5 style={{fontSize:'.8rem', color:'white', textShadow:'1px 1px 1px black', userSelect:'none'}}>{item.userLocation}</h5>
            <p style={{fontSize:'.7rem', color:' white', textShadow:'1px 1px 1px black', userSelect:'none'}}>{item.serviceCompletionDate}</p>
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
    console.log(testUserData)
  }
  const goToIndex = (newIndex:any) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }


  return (
    <div style={{width:'auto', backgroundColor:'#009FE4'}}>
        <h3 style={{fontSize:'1.7rem',paddingTop:'1%', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none', marginBottom: '1%', paddingBottom: '1%', backgroundColor: '#177BBD', borderBottom: 'solid 1px white'}}>Testimonials</h3>
        <Carousel
          activeIndex={activeIndex}
          next={next} 
          previous={previous}
          >
          {slides}
          <div style={{marginTop:'1%', backgroundColor:'#009FE4'}}>
          <CarouselIndicators items={testimonialData} activeIndex={activeIndex} onClickHandler={goToIndex} />
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