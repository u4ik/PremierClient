
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

// const items = [
//   {
//     src: IconBackground,
//     altText: 'Testimonail 1',
//     caption: '"Testimonial 1"',
//     captionName: '-Name1'

//   },
//   {
//     src: IconBackground,
//     altText: 'Testimonial 2',
//     caption: '"Testimonial 2"',
//     captionName:'-Name2'
//   },
//   {
//     src: IconBackground,
//     altText: 'Testimonial 3',
//     caption: '"Testimonial 3"',
//     captionName:'-Name3'
//   }
// ];

const TestimonialsHome: React.FunctionComponent = (props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animating, setAnimating] = useState(false);

  const [testimonialData, setTestimonialData] = useState<any>([]) 


  const slides = testimonialData.map((item:any) => {
    return (
        
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <img src={IconBackground} alt= "TestimonialBacker" />
        
        
            
        <CarouselCaption   captionText={item.userLocation}  captionHeader={`"${item.userQuote}"`} />
  
      
   
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
      
    })
   
    .catch(err => console.warn(err))
}

useEffect (() => {

    getTestimonials();

 },[])


  return (
    <div style={{width:'100vw', backgroundColor:'#177BBD'}}>
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        >

      
        {slides}
        <CarouselIndicators items={testimonialData} activeIndex={activeIndex} onClickHandler={goToIndex} />

        
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    </div>
  );
}



export default TestimonialsHome;