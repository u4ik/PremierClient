
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
    const APIURL = 'http://localhost:3000/testimonial/all'
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
        <div>
        {/* <CarouselCaption style = {{lineHeight: '1rem', marginTop:''}}  captionText={"-" + item.userFirstName + " " + item.userLastName}  captionHeader={`"${item.userQuote}"`}/> */}
        <div className="carousel-caption d-none d-md-block">
        <h3>{item.userQuote}</h3>
        <h4 style= {{fontSize: '1.3rem',marginBottom:''}}>{"-" + `${item.userFirstName}` + " " + `${item.userLastName}`}</h4>
        <h5 style={{fontSize:'.8rem'}}>{item.userLocation}</h5>
        <p style={{fontSize:'.7rem'}}>{item.serviceCompletionDate}</p>
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
    <div style={{width:'100vw', backgroundColor:'#009FE4'}}>
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        >
        {slides}
        <div>
        <CarouselIndicators items={testimonialData} activeIndex={activeIndex} onClickHandler={goToIndex} />
        </div>
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    </div>
  );
}



export default TestimonialsHome;