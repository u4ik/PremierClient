import React  from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Logo from '../../assets/Premier-Commercial-Services-icon.svg';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'



import APIURL from '../../helpers/environment';

interface Edit {
    updateToken:string
    setShowEdit: any
    showEdit : boolean
    testId: number
    testLocation: any 
    testQuote: string
    testRating: number
    testLocationType: string

    setTestLocation: any 
    setTestQuote: any
    setTestRating: any
    setTestLocationType: any

    getTestimonials: any
}
const modalHeaderStyle:React.CSSProperties= {
    backgroundColor:'#177BBD',
    color: 'white',
    textShadow: '.1rem .1rem .1rem black',
    borderColor:'transparent',
    borderRadius: '20px 20px 0px 0px',
} 
const modalFooterStyle:React.CSSProperties= {
    backgroundColor:'#177BBD',
    color: 'white',
    textShadow: '.1rem .1rem .1rem black',
    borderColor:'transparent',
    borderRadius: '0px 0px 20px 20px',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center'
} 
const inputStyles:React.CSSProperties= {
    textAlign: 'center',
    borderRadius:'5px',
    outline:'none',
    borderColor:'transparent',
    alignItems: 'center',
}
const labelStyles:React.CSSProperties= {
    textShadow: '.1rem .1rem .1rem black',
    color:'white',
    marginTop: '.5rem',
    alignItems: 'center',
    textAlign: 'center',
    fontSize:'1.5rem'
}
const EditTestimonial:React.FunctionComponent<Edit>   = (props:Edit) => {
    
    

        const toggle = () => props.setShowEdit(!props.showEdit);

        const getRating = (e:any) => {
            props.setTestRating(e.rating)
        }
        const dropDownSelect = (e:any) => {
            props.setTestLocationType(e)
        }

        const modalHeaderStyle:React.CSSProperties= {
            backgroundColor:'#177BBD',
            color: 'white',
            textShadow: '.1rem .1rem .1rem black',
            borderColor:'transparent',
            borderRadius: '20px 20px 0px 0px',
        } 
        const modalFooterStyle:React.CSSProperties= {
            backgroundColor:'#177BBD',
            color: 'white',
            textShadow: '.1rem .1rem .1rem black',
            borderColor:'transparent',
            borderRadius: '0px 0px 20px 20px'
        } 
        const inputStyles:React.CSSProperties= {
            textAlign: 'center',
            borderRadius:'5px',
            outline:'none',
            borderColor:'transparent',
            alignItems: 'center',
        }
        const labelStyles:React.CSSProperties= {
            textShadow: '.1rem .1rem .1rem black',
            color:'white',
            marginTop: '.5rem',
            alignItems: 'center',
            textAlign: 'center'
        }
        const textBoxStyle:React.CSSProperties={
            textAlign: 'center',
            borderRadius:'5px',
            outline:'none',
            resize: 'none',
            borderColor:'white',
            backgroundColor:'white',
            fontSize:'17px'  
        }
        const monthNames = ["1", "2", "3", "4", "5", "6",
        "7", "8", "9", "10", "11", "12"
    ];
    let dateObj = new Date();
    let month = monthNames[dateObj.getMonth()];
    let day = String(dateObj.getDate()).padStart(2, '0');
    let year = dateObj.getFullYear();
    let output = month + '/' + day + '/' + year;

        const editTestimonial = (e:any) => {
            e.preventDefault();

            const reqBody = { 
                userQuote: props.testQuote,
                userLocation: props.testLocation,
                userLocationType: props.testLocationType,
                serviceCompletionDate: output,
                userRating: props.testRating
            }
            fetch(`${APIURL}/testimonial/edit/` + props.testId,{
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : props.updateToken
                },
                body: JSON.stringify(reqBody)
                
            }).then(res => res.json())
            .then(() => props.getTestimonials())
            .catch(err => console.log(err.message))
        }



    return(
<Modal isOpen={props.showEdit} toggle={toggle} >
    <ModalHeader toggle={toggle} style={modalHeaderStyle}>
          <img src = {Logo} style={{width:'20%'}} />
    </ModalHeader>
    <ModalBody style={{backgroundColor: '#009FE4'}}>
          <form className="fs-frm" id="myForm" name="simple-contact-form" accept-charset="utf-8">
              <fieldset id="fs-frm-inputs">
                  <div style = {{display: 'flex', flexDirection: 'column', textAlign:'center'}}>
                  <label style={labelStyles} id="labelName" htmlFor="full-name">User Location:</label>
                  <input style = {inputStyles} type="text" name="name" id="full-name" placeholder="Location Name and/or Address"  value={props.testLocation} onChange={(e) => props.setTestLocation(e.target.value)} required= {true}></input>
                  <label style={labelStyles} htmlFor="email-address">Location Type:</label>
                  <select style = {inputStyles} name="name" id="" placeholder="Select service required" value={props.testLocationType} required onChange={(e) => dropDownSelect(e.target.value)} >                      
                      <option></option>
                      <option  value="Athletic">Athletics</option>
                      <option value="Grocery">Grocery</option>
                      <option value="Medical">Medical</option>
                      <option value="Office">Office</option>
                      <option value="Restaurant">Restaurant</option>
                      <option value="Services">Services</option>
                  </select>

                  <label style={labelStyles} htmlFor="email-address">Your Testimonial:</label>

                  <textarea style = {textBoxStyle} rows = {3} cols={50} name="message" id="message" placeholder="Type message here" required= {true} value={props.testQuote} onChange={(e) => props.setTestQuote(e.target.value)}></textarea>
       
                  
                  <label style={labelStyles} htmlFor="">Rating:</label>
                  <div style= {{transform: 'scale(2)'}}>
                  <Rater  total={5} rating={props.testRating}  interactive={true} onRate={getRating}  />
                  </div>                
                  </div>
              </fieldset>
              
              <div id="sendButton" style={{textAlign:'center', marginTop:'3%'}}> 
              <Button color="primary" type="submit" id="subm" value="Submit" className="btn btn-primary" onClick = {(e) => {
                editTestimonial(e);
               
             
                  toggle();
                  
                  }} >Update</Button>
              <Button  style={{marginLeft: '10%'}} color="secondary" onClick={toggle}>Cancel</Button>
              
              </div>
          </form>
        
          </ModalBody>
          <ModalFooter style={modalFooterStyle}>
        
          </ModalFooter>
</Modal>
    
    
    )}
                


export default EditTestimonial;