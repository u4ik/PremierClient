
import React, { useState, useEffect } from 'react';

import './TestimonialsHome.css'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


import APIURL from '../../helpers/environment';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import TestimonialHomeBcg from '../../assets/testimonial-bcg.jpg'

const TestimonialsHome: React.FunctionComponent = (props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animating, setAnimating] = useState(false);
  const [testimonialData, setTestimonialData] = useState<any>([])
  const [testUserData, setTestUserData] = useState<any>()
  
  const getTestimonials = () => {
    // const APIURL:string = `${APIURL}/testimonial/all`
    fetch(`${APIURL}/testimonial/all` ,{
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

    const TestimonialInfoText:React.CSSProperties ={

      fontSize: '1.1rem',
      color:'#E8C10D',
      userSelect:'none',
      textShadow: ('1px 1px 1px black')

    }
    const TestimonialInfoText2:React.CSSProperties ={

      fontSize: '.8rem',
      color:'white',
      userSelect:'none',
      textShadow: ('1px 1px 1px black')

    }
    const TestimonialInfoText3:React.CSSProperties ={

      fontSize: '.69rem',
      color:'white',
      userSelect:'none',
      textShadow: ('1px 1px 1px black')

    }
    return (
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        
        {/* <img src={IconBackground} alt= "TestimonialBacker" /> */}
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', minHeight:'2vh'}}>
        {/* <CarouselCaption style = {{lineHeight: '1rem', marginTop:''}}  captionText={"-" + item.userFirstName + " " + item.userLastName}  captionHeader={`"${item.userQuote}"`}/> */}
        

        <div className="carousel-caption d-none d-md-block" style={{
          // backgroundColor:'#177BBD',
          minHeight: ' 100px',
          // background: 'rgba(34,111,153, .1)',
          // border: '1px #177BBD',
          // borderStyle:'solid',
          borderRadius:'1rem',
          paddingLeft:'.5rem',
          paddingRight:'.5rem',
          marginTop:'.5rem',
          userSelect:'none',
          marginBottom:'5%',
          width:'auto',
          filter: 'drop-shadow(2px 2px 2px navy)',
          marginLeft:'10%',
          marginRight:'10%'}}>


          <div style={{overflowWrap:'break-word'}} >
          <h3 className='testHomeQuote' style={{fontSize:'1.4rem', textShadow:'1px 1px 1px black', color:'white', userSelect:'none'}}>{ `"` + `${item.userQuote}` + `"`}</h3>
          </div>
          <div className="stars" style={{transform: 'scale(2)', marginLeft:'30%', marginRight:'30%', marginTop:'2%'}}>
          <Rater  total={5} rating={item.userRating} interactive={false}  />
          </div>
        </div>
        <div style={{marginTop: '-5%', marginLeft:'20%', marginRight:'20%'}} className= "testHomeText">
            <h4 className='nameTextTestimonialHome' style= {TestimonialInfoText}>{"- " + `${item.userFirstName}` + " " + `${item.userLastName}`}</h4>
            <h5 className='locationTextTestimonialHome' style= {TestimonialInfoText2}>{item.userLocationType}</h5>
            <h5 className='locationTextTestimonialHome'style= {TestimonialInfoText2}>{item.userLocation}</h5>
            <p  className='dateTestimonialHome' style= {TestimonialInfoText3}>{item.serviceCompletionDate}</p>
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
    <div style={{height:"auto", backgroundImage: `url(${TestimonialHomeBcg})`, backgroundPosition: 'center', backgroundSize: 'cover', marginBottom: '-1%', marginLeft:'15%', marginRight:'15%', borderRadius:'20px',     background: 'rgba(26, 35, 64, 0.5)'}}>
        <h3  className="headerText"  style={{fontSize:'2.2rem',paddingTop:'1%', color:'white', userSelect:'none', backgroundColor: 'transparent', textShadow: '2px 2px 2px black', marginBottom: '-.5%'}}>Testimonials</h3>
        <Carousel
          activeIndex={activeIndex}
          next={next} 
          previous={previous}
          >
          {slides}
          <div style={{marginTop:'1%', backgroundColor:'#009FE4'}}>
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