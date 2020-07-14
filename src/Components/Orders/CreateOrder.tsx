import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';
import Logo from '../../assets/Premier-Commercial-Services-icon.svg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


interface createOrder{
    showOrder: boolean
    setShowOrder: React.Dispatch<React.SetStateAction<any>> 
}

const CreateOrder: React.FunctionComponent<createOrder> = (props:createOrder) => {

    const [modal, setModal] = useState(true);
    
    const toggle = () => props.setShowOrder(!props.showOrder);
    const [startDate, setStartDate] = useState(new Date());
    const [serviceReq, setServiceReq] = useState('None');

    const handleChange = (date: any) => {
        setStartDate(date);
      };

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


        return (

        <Modal style={{borderRadius:'20px'}}isOpen={props.showOrder} toggle={toggle} className=''>
          <ModalHeader toggle={toggle} style={modalHeaderStyle}>
          
          <img src = {Logo} style={{width:'20%'}} />
          </ModalHeader>
          <ModalBody style={{backgroundColor: '#009FE4'}}>
          <form className="fs-frm" id="myForm" name="simple-contact-form" accept-charset="utf-8">

              <fieldset id="fs-frm-inputs">

                  <div style = {{display: 'flex', flexDirection: 'column', textAlign:'center'}}>
                  <label style={labelStyles} id="labelName" htmlFor="full-name">User Location:</label>
                  <input style = {inputStyles} type="text" name="name" id="full-name" placeholder="First and Last" required= {true}></input>

                  <label style={labelStyles} htmlFor="email-address">Service Required:</label>
                  
                  <select style = {inputStyles} name="name" id="full-name" placeholder="Select service required" value={serviceReq} required onChange={(e) => setServiceReq(e.target.value)}>
                      <option></option>
                      <option value="Athletics">Athletics</option>
                      <option value="Grocery">Grocery</option>
                      <option value="Medical">Medical</option>
                      <option value="Office">Office</option>
                      <option value="Restaurant">Restaurant</option>
                      <option value="Services">Services</option>
                  </select>
                  {serviceReq === 'Athletics' ?
                  
                  <>
                  <Input>Back Kitchen</Input>
                  <Input>Dining Area</Input>
                  <Input>Restrooms</Input>
                  <Input>Window Care</Input>
                  
                  </>
                   : null }

                  <label style={labelStyles} htmlFor="date">Date Required:</label>
                  <DatePicker selected={startDate} onChange={handleChange} />

                  </div>
              </fieldset>
              
              <div id="sendButton" style={{textAlign:'center', marginTop:'3%'}}> 
              <Button color="primary" type="submit" id="subm" value="Submit" className="btn btn-primary" >Send</Button>
              <Button color="secondary" onClick={toggle}>Cancel</Button>
              
              </div>
          </form>
        
          </ModalBody>
          <ModalFooter style={modalFooterStyle}>
        
          </ModalFooter>
          </Modal>
        );
    }


export default CreateOrder;