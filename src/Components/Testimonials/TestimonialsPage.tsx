import React,{useEffect, useState, useReducer}  from "react";
import { MDBCarousel, MDBCard, MDBCardBody,MDBCardImage, MDBCardTitle,MDBCardText,MDBBtn, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import {Container,Col, Row, UncontrolledPopover, PopoverHeader, PopoverBody, Button} from 'reactstrap'



import RestaurantImg from  '../../assets/locationIcons/restaurant.svg'
import AthleticImg from  '../../assets/locationIcons/athletic.svg'
import GroceryImg from  '../../assets/locationIcons/grocery.svg'
import MedicalImg from  '../../assets/locationIcons/medical2.svg'
import OfficeImg from  '../../assets/locationIcons/office.svg'
import ServicesImg from  '../../assets/locationIcons/services.svg'


import './TestimonialsPage.css'




const TestimonialsPage = () => {


  const [testimonialData, setTestimonialData] = useState<any>([])
  const [testUserData, setTestUserData] = useState<any>()


  const [newImg, setNewImg] = useState<any>()

const cardStyle ={
  width: "13rem", 
  marginBottom:'10%',
  marginTop:'2%', 
  height:'fit-content', 
  borderRadius:'20px',
  border:'solid 2px white',
  filter: 'drop-shadow(3px 3px 3px black)'

}
  const cardImgStyle={
    backgroundColor:'',
    borderRadius:'20px 20px 0px 0px',
    width:'',
    padding:'30%',
    marginTop:'1%',
    filter: 'drop-shadow(3px 3px 3px black)'

  }

  const cardBodyStyle={
    backgroundColor:'white',
    borderRadius:'0px 0px 15px 15px',
    border: 'solid 2px white'

  }

  const cardNameStyle={
    fontSize:'1rem'
  }
  const cardQuoteStyle={
    fontSize:'.8rem'
  }

  const cardLocationStyle={
    fontSize:'.6rem'
  }
  const serviceCompletionDateStyle={
    fontSize:'.6rem'
  }
  
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
     
      <div  className="cardStyle" style={{margin:'2%'}}>

      <MDBCard  id="cardStyle2"  style={cardStyle}>

        {item.userLocationType === 'Restaurant' ? 
      <MDBCardImage style={cardImgStyle} className="img-fluid" src= {RestaurantImg} waves />
      : null}
        {item.userLocationType === 'Grocery' ? 
      <MDBCardImage style={cardImgStyle} className="img-fluid" src= {GroceryImg} waves />
      : null}
        {item.userLocationType === 'Office' ? 
      <MDBCardImage style={cardImgStyle} className="img-fluid" src= {OfficeImg} waves />
      : null}
        {item.userLocationType === 'Medical' ? 
      <MDBCardImage style={cardImgStyle} className="img-fluid" src= {MedicalImg} waves />
      : null}
        {item.userLocationType === 'Athletic' ? 
      <MDBCardImage style={cardImgStyle} className="img-fluid" src= {AthleticImg} waves />
      : null}
      {item.userLocationType === 'Services' ? 
      <MDBCardImage style={cardImgStyle} className="img-fluid" src= {ServicesImg} waves />
      : null}

      <MDBCardBody style={cardBodyStyle}>
      <MDBCardTitle style={cardNameStyle}>{``+`${item.userFirstName}` + " " + `${item.userLastName}`}</MDBCardTitle>
      <div style={{overflowY:'auto', height: 'auto', minHeight:'4rem', maxHeight:'4rem'}}>
           
        <MDBCardText style={cardQuoteStyle}>
         {`"` + item.userQuote + `"`}
      
        </MDBCardText>
        </div>

    <MDBCardTitle style={cardLocationStyle}>{item.userLocation}</MDBCardTitle>
    <MDBCardTitle style={serviceCompletionDateStyle}>{item.serviceCompletionDate}</MDBCardTitle>
        {/* <MDBBtn href="#">MDBBtn</MDBBtn> */}
      </MDBCardBody>
    </MDBCard></div>

    )})



  return (
    <div style={{backgroundColor:'#009FE4'}}>
       <h3 style={{fontSize:'1.7rem',paddingTop:'1%', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none', marginBottom: 'none', paddingBottom: '1%', backgroundColor: '#177BBD', borderBottom: 'solid 1px white', borderTop:'solid 1px white'}}>All Testimonials</h3>

       <Container style={{display:'flex', flexDirection:'row', justifyContent:'center', flexWrap:'wrap'}}>
        {slides}
        </Container>
      </div>
  );
}

export default TestimonialsPage;