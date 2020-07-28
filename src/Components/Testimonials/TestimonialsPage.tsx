import React,{useEffect, useState}  from "react";
import { MDBCard, MDBCardBody,MDBCardImage, MDBCardTitle,MDBCardText, MDBBtn} from "mdbreact";
import {Container} from 'reactstrap'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './TestimonialsPage.css'

import {Spring, animated} from 'react-spring/renderprops'
import APIURL from '../../helpers/environment';

import RestaurantImg from  '../../assets/locationIcons/restaurantyellow.svg'
import AthleticImg from  '../../assets/locationIcons/athleticyellow.svg'
import GroceryImg from  '../../assets/locationIcons/groceryyellow.svg'
import MedicalImg from  '../../assets/locationIcons/medical2yellow.svg'
import OfficeImg from  '../../assets/locationIcons/officeyellow.svg'
import ServicesImg from  '../../assets/locationIcons/servicesyellow.svg'

import Edit from '../../assets/edit/delete/edit.svg'
import Delete from '../../assets/edit/delete/delete.svg'

import CreateTest from "./CreateTestimonial";
import EditTest from "./EditTestimonial";
import DeleteTest from "./DeleteTestimonial";

import LogoIcon from '../../assets/Premier-Commercial-Services-icon.svg'

interface testProps {
    enableTestCreate: boolean,
    updateToken: string,
    isAdmin: any
}
const TestimonialsPage:React.FunctionComponent<testProps> = (props:testProps) => {
  const [testimonialData, setTestimonialData] = useState<any>([])
  const [testUserData, setTestUserData] = useState<any>()
  const [newImg, setNewImg] = useState<any>()
  const [showTestCreate, setShowTestCreate] = useState<any>()
  const [showDelete, setShowDelete] = useState<any>()
  const [showEdit, setShowEdit] = useState<any>()

  const [deleteImg, setDeleteImg] = useState<any>()
  const [editImg, setEditImg] = useState<any>()

  const [testId, setTestId] = useState<any>()
  const [testLocation, setTestLocation] = useState<any>()
  const [testLocationType, setTestLocationType] = useState<any>()
  const [testQuote, setTestQuote] = useState<any>()
  const [testRating, setTestRating] = useState<any>()

  const cardStyle ={
  width: "13rem", 
  marginBottom:'10%',
  marginTop:'2%', 
  height:'455px', 
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
    fontSize:'1rem',
    marginTop:'5%'
  }
  const cardQuoteStyle={
    fontSize:'.8rem',
    lineHeight: '1rem'
  }
  const cardLocationStyle={
    fontSize:'.6rem',
    marginTop:'1rem'
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

  const createButton={

      fontSize: '1.6rem',
      color: '#009FE4',
      textShadow: '1px 1px 1px black'
  }
  
  const getTestimonials = () => {
    // const APIURL:string = `${APIURL}/testimonial/all`
    fetch(`${APIURL}/testimonial/all`  ,{
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
      <div key={item.id} className="cardStyle" style={{margin:'2%', backgroundColor: 'transparent'}}>
                  <Spring
                          config={{duration: 600, delay:600}} 
                          native
                          from={{ o: 0, marginT: '' }}
                          to={{ o: 1, marginT: ''  }} 
                          >
                          {({ o, marginT }) => (
                          <animated.div style={{
                                  opacity: o,
                                  marginTop: marginT
                                  
                          }}>
        <MDBCard  id="cardStyle2" onMouseEnter={(e:any) => {
          // console.log(item.userId)
          // console.log(localStorage.getItem('id'))
          setTestId(item.id)
   
          if(localStorage.getItem('id') === item.userId.toString() || props.isAdmin === true){
           setDeleteImg(Delete)
           setEditImg(Edit)
           setTestId(item.id)
           setTestLocation(item.userLocation)
           setTestQuote(item.userQuote)
           setTestRating(item.userRating)
           setTestLocationType(item.userLocationType)
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
            <div style={{overflowY:'auto', height: '3.05rem', minHeight:'2.5rem', maxHeight:'4rem'}}>
              <MDBCardText style={cardQuoteStyle}>
              {`"` + item.userQuote + `"`}
              </MDBCardText>
            </div>
            <MDBCardTitle style={cardLocationStyle}>{item.userLocation}</MDBCardTitle>
            <MDBCardTitle style={serviceCompletionDateStyle}>{item.serviceCompletionDate}</MDBCardTitle>
     
            {localStorage.getItem('id') === item.userId.toString() ?
            <div>
            <img style= {{width: '10%'}}src = {editImg} onClick={(e) => setShowEdit(true)}></img>
            <img style= {{width: '10%', marginLeft: '15%'}}src = {deleteImg} onClick={(e) => setShowDelete(true)}></img>
            </div>
            : null}
                 {props.isAdmin ?
            <div>
            <img style= {{width: '10%', marginLeft: ''}}src = {deleteImg} onClick={(e) => setShowDelete(true)}></img>
            </div>
            : null}
        </MDBCardBody>
   
        </MDBCard>
                                  </animated.div>
                                  )}
                          </Spring>
      
      
      </div>
    )});
  return (
    <div style={{backgroundColor:'white'}}>
       <Spring
                            config={{duration: 600}} 
                            native
                            from={{ o: 0, marginT: '' }}
                            to={{ o: 1, marginT: ''  }} 
                            >
                            {({ o, marginT }) => (
                            <animated.div style={{
                                    opacity: o,
                                    marginTop: marginT
                                    
                            }}>
                           <img src={LogoIcon} style={{width: '10vh', marginBottom: '.5rem', marginTop:'7%', filter:'drop-shadow(2px 2px 1px black)'}}></img>
                            </animated.div>
                            )}
                    </Spring>
       
                    <Spring
                            config={{duration: 600, delay: 500}} 
                            native
                            from={{ o: 0, marginT: '' }}
                            to={{ o: 1, marginT: ''  }} 
                            >
                            {({ o, marginT }) => (
                            <animated.div style={{
                                    opacity: o,
                                    marginTop: marginT
                                    
                            }}>
       <h3 style={{fontSize:'2.2rem', paddingTop:'3%', textShadow:'0.5px 0.5px 0.5px black', color:'#177BBD', userSelect:'none', marginBottom: '1%', paddingBottom: '1%', borderBottom: 'solid 1px white', backgroundColor: 'white'}}>
         All Testimonials</h3>
       
       </animated.div>
                            )}
                            </Spring>
            <Spring
                          config={{duration: 600, delay:600}} 
                          native
                          from={{ o: 0, marginT: '' }}
                          to={{ o: 1, marginT: ''  }} 
                          >
                          {({ o, marginT }) => (
                          <animated.div style={{
                                  opacity: o,
                                  marginTop: marginT
                                  
                          }}>
         {props.isAdmin === false ?
          <div>


          


            {props.enableTestCreate === true ?
                         
            
            <MDBBtn style={createButton }onClick={(e:any) => {
                setShowTestCreate(e);
            }} >Create a Testimonial!</MDBBtn>
    
            :
            
            
            <p style={createButton}>Complete a service with us to leave a testimonial!</p>}
            
            
            
            
          </div>
          : null }
          </animated.div>
          )}
          </Spring>
         <CreateTest updateToken={props.updateToken} setShowTestCreate ={setShowTestCreate} showTestCreate= {showTestCreate} getTestimonials={getTestimonials} />
         <DeleteTest getTestimonials={getTestimonials} testId = { testId} showDelete={showDelete} setShowDelete={setShowDelete} updateToken={props.updateToken}/>
         <EditTest  getTestimonials={getTestimonials} setTestLocation ={setTestLocation} setTestQuote={setTestQuote} setTestRating={setTestRating} setTestLocationType={setTestLocationType} testLocation ={testLocation} testQuote={testQuote} testRating={testRating} testLocationType={testLocationType} testId = { testId} showEdit={showEdit} setShowEdit={setShowEdit} updateToken={props.updateToken}/>
       <Container style={{display:'flex', flexDirection:'row', justifyContent:'center', flexWrap:'wrap'}}>
        
        
        
        {slides}
        </Container>
      </div>
  );
};
export default TestimonialsPage;