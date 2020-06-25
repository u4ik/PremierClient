
import React, { useState } from 'react';

import './TestimonialsHome.css'

import IconBackground from '../../assets/IconBackground.png'

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: IconBackground,
    altText: 'Testimonail 1',
    caption: '"Testimonial 1"',
    captionName: '-Name1'

  },
  {
    src: IconBackground,
    altText: 'Testimonial 2',
    caption: '"Testimonial 2"',
    captionName:'-Name2'
  },
  {
    src: IconBackground,
    altText: 'Testimonial 3',
    caption: '"Testimonial 3"',
    captionName:'-Name3'
  }
];

const TestimonialsHome: React.FunctionComponent = (props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex:any) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        

        <CarouselCaption style={{ color:'pink'}}  captionText={item.captionName}  captionHeader={item.caption} />

 
      </CarouselItem>
    );
  });

  return (
    <div style={{width:'100vw', backgroundColor:'#177BBD'}}>
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        >

        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    </div>
  );
}



export default TestimonialsHome;