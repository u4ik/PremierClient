import React,{useEffect, useState}  from "react";
import { MDBCard, MDBCardBody,MDBCardImage, MDBCardTitle,MDBCardText, MDBBtn} from "mdbreact";
import {Container} from 'reactstrap'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './TestimonialsPage.css'

import RestaurantImg from  '../../assets/locationIcons/restaurant.svg'
import AthleticImg from  '../../assets/locationIcons/athletic.svg'
import GroceryImg from  '../../assets/locationIcons/grocery.svg'
import MedicalImg from  '../../assets/locationIcons/medical2.svg'
import OfficeImg from  '../../assets/locationIcons/office.svg'
import ServicesImg from  '../../assets/locationIcons/services.svg'

import Edit from '../../assets/testimonialPage/edit.svg'
import Delete from '../../assets/testimonialPage/delete.svg'

import CreateTest from "./CreateTestimonial";

import DeleteTes from "./DeleteTestimonial";

interface testProps {
    enableTestCreate: boolean,
    updateToken: string,
    isAdmin: boolean
}
const TestimonialsPage:React.FunctionComponent<testProps> = (props:testProps) => {
  const [testimonialData, setTestimonialData] = useState<any>([])
  const [testUserData, setTestUserData] = useState<any>()
  const [newImg, setNewImg] = useState<any>()
  const [showTestCreate, setShowTestCreate] = useState<any>()
  const [showDelete, setShowDelete] = useState<any>()

  const [deleteImg, setDeleteImg] = useState<any>()
  const [editImg, setEditImg] = useState<any>()

  const [testId, setTestId] = useState<any>()

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
    // backgroundColor:'#E8C10D',
    backgroundColor:'#177BBD',
    borderRadius:'20px 20px 0px 0px',
    width:'',
    padding:'30%',
    marginTop:'1%',
    filter: 'drop-shadow(1px 1px 1px black)'
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
    fontSize:'.8rem',
    lineHeight: '0.9rem'
  }
  const cardLocationStyle={
    fontSize:'.6rem'
  }
  const serviceCompletionDateStyle={
    fontSize:'.6rem'
  }
  const createTestTextStyle={
    color: '#177BBD',
    fontSize: '1.3rem',
    marginTop:'2%',
    // textShadow: '1px 1px 1px black'
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

        <MDBCard  id="cardStyle2" onMouseEnter={(e:any) => {
          // console.log(item.userId)
          // console.log(localStorage.getItem('id'))
          setTestId(item.id)
   
          if(localStorage.getItem('id') === item.userId.toString()){
            setDeleteImg(Delete)
            setEditImg(Edit)
         
    
           setTestId(item.id)
          }
          else{
       
            setDeleteImg(null)
            setEditImg(null)
          } 
        }} 
        onMouseLeave={(e:any) => {

          setDeleteImg(null)
          setEditImg(null)
        }}
        
        
        style={cardStyle}>
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
            <div style={{transform: 'scale(1.5)'}}>
            <Rater  total={5} rating={item.userRating} interactive={false}  />
            </div>
            <MDBCardTitle style={cardNameStyle}>{``+`${item.userFirstName}` + " " + `${item.userLastName}`}</MDBCardTitle>
            <div style={{overflowY:'auto', height: 'auto', minHeight:'4rem', maxHeight:'4rem'}}>
              <MDBCardText style={cardQuoteStyle}>
              {`"` + item.userQuote + `"`}
              </MDBCardText>
            </div>
            <MDBCardTitle style={cardLocationStyle}>{item.userLocation}</MDBCardTitle>
            <MDBCardTitle style={serviceCompletionDateStyle}>{item.serviceCompletionDate}</MDBCardTitle>
     
            {localStorage.getItem('id') === item.userId.toString() ?
            <div>
            <img style= {{width: '10%'}}src = {editImg}></img>
            <img style= {{width: '10%', marginLeft: '15%'}}src = {deleteImg} onClick={(e) => setShowDelete(true)}></img>
            </div>
            : <div style={{paddingBottom:'14%'}}></div>}
        </MDBCardBody>
   
        </MDBCard>
      </div>
    )});
  return (
    <div style={{backgroundColor:'#f9f9f9'}}>
       <h3 style={{fontSize:'1.9rem', paddingTop:'3%', textShadow:'0.5px 0.5px 0.5px #024160', color:'#444343', userSelect:'none', marginBottom: '1%', paddingBottom: '1%', borderBottom: 'solid 1px white', backgroundColor: 'white'}}>All Testimonials</h3>
        {props.isAdmin === false ?
        <div>
        {props.enableTestCreate === true ? <MDBBtn  style={{fontSize: '1.2rem', color:'#009FE4', textShadow:'.4px .4px 1px black'}} onClick={(e:any) => {
            setShowTestCreate(e);
        }} >Create a Testimonial!</MDBBtn>
        :<p style={createTestTextStyle}>Complete a service with us to leave a testimonial!</p>}
        </div>
        : null }
         <CreateTest updateToken={props.updateToken} setShowTestCreate ={setShowTestCreate} showTestCreate= {showTestCreate} getTestimonials={getTestimonials} />
         <DeleteTes getTestimonials={getTestimonials} testId = { testId} showDelete={showDelete} setShowDelete={setShowDelete} updateToken={props.updateToken}/>
       <Container style={{display:'flex', flexDirection:'row', justifyContent:'center', flexWrap:'wrap'}}>
        {slides}
        </Container>
      </div>
  );
};
export default TestimonialsPage;