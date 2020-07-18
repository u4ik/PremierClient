import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { MDBContainer, MDBInput } from "mdbreact";
import Logo from '../../assets/Premier-Commercial-Services-icon.svg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


interface createOrder{
    showOrder: boolean
    setShowOrder: React.Dispatch<React.SetStateAction<any>> 
}

const CreateOrder: React.FunctionComponent<createOrder> = (props:createOrder) => {

    // const [modal, setModal] = useState(true);
    
    const toggle = () => props.setShowOrder(!props.showOrder);
    const [startDate, setStartDate] = useState(new Date());
    const [serviceReq, setServiceReq] = useState('None');
    const [ serviceInput1, setServiceInput1 ] = useState('None');
    const [ serviceInput2, setServiceInput2 ] = useState('None');
    const [ serviceInput3, setServiceInput3 ] = useState('None');
    const [ serviceInput4, setServiceInput4 ] = useState('None');

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
                  
                  <select style = {inputStyles} name="name" id="" placeholder="Select service required" value={serviceReq} required onChange={(e) => setServiceReq(e.target.value)}>
                      <option></option>
                      <option value="Athletics">Athletics</option>
                      <option value="Grocery">Grocery</option>
                      <option value="Medical">Medical</option>
                      <option value="Office">Office</option>
                      <option value="Restaurant">Restaurant</option>
                      <option value="Services">Services</option>
                  </select>

                  {serviceReq === 'Athletics' ?
                  
                    <MDBContainer className="mt-5" id= "choices">
                        <div>
                            <label style={labelStyles} id="labelName" htmlFor="full-name">Basketball Court Care</label>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                <input type="radio" className="custom-control-input" id="defaultGroupExample1a" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)}/>
                                <label className="custom-control-label" htmlFor="defaultGroupExample1a">True</label>
                                </div>

                                <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="defaultGroupExample1b" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)}/>
                                <label className="custom-control-label" htmlFor="defaultGroupExample1b">False</label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label style={labelStyles} id="labelName" htmlFor="full-name">Concessions cleaning</label>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                <input type="radio" className="custom-control-input" id="defaultGroupExample2a" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => {console.log (e.target); setServiceInput2(e.target.value)}}/>
                                <label className="custom-control-label" htmlFor="defaultGroupExample2a">True</label>
                                </div>

                                <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="defaultGroupExample2b" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => setServiceInput2(e.target.value)}/>
                                <label className="custom-control-label" htmlFor="defaultGroupExample2b">False</label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label style={labelStyles} id="labelName" htmlFor="full-name">Large restroom cleaning</label>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                <input type="radio" className="custom-control-input" id="defaultGroupExample3a" name="groupOfDefaultRadios3" value={serviceInput3} onChange={(e) => setServiceInput3(e.target.value)}/>
                                <label className="custom-control-label" htmlFor="defaultGroupExample3a">True</label>
                                </div>

                                <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="defaultGroupExample3b" name="groupOfDefaultRadios3" value={serviceInput3} onChange={(e) => setServiceInput3(e.target.value)}/>
                                <label className="custom-control-label" htmlFor="defaultGroupExample3b">False</label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label style={labelStyles} id="labelName" htmlFor="full-name">Bleacher cleanup</label>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                <input type="radio" className="custom-control-input" id="defaultGroupExample4a" name="groupOfDefaultRadios4" value={serviceInput4} onChange={(e) => setServiceInput4(e.target.value)}/>
                                <label className="custom-control-label" htmlFor="defaultGroupExample4a">True</label>
                                </div>

                                <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="defaultGroupExample4b" name="groupOfDefaultRadios4" value={serviceInput4} onChange={(e) => setServiceInput4(e.target.value)}/>
                                <label className="custom-control-label" htmlFor="defaultGroupExample4b">False</label>
                                </div>
                            </div>
                        </div>
                    </MDBContainer>

                   : null }


                {serviceReq === 'Grocery' ?
                <MDBContainer className="mt-5" id= "choices">
                    <div>
                        <label style={labelStyles} id="labelName" htmlFor="full-name">Dairy section</label>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                            <input type="radio" className="custom-control-input" id="defaultGroupExample5a" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)}/>
                            <label className="custom-control-label" htmlFor="defaultGroupExample5a">True</label>
                            </div>

                            <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="defaultGroupExample5b" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)}/>
                            <label className="custom-control-label" htmlFor="defaultGroupExample5b">False</label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label style={labelStyles} id="labelName" htmlFor="full-name">Frozen food section</label>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                            <input type="radio" className="custom-control-input" id="defaultGroupExample6a" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => {console.log (e.target); setServiceInput2(e.target.value)}}/>
                            <label className="custom-control-label" htmlFor="defaultGroupExample6a">True</label>
                            </div>

                            <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="defaultGroupExample6b" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => setServiceInput2(e.target.value)}/>
                            <label className="custom-control-label" htmlFor="defaultGroupExample6b">False</label>
                            </div>
                        </div>
                    </div>

                </MDBContainer>

                : null}

                {serviceReq === 'Medical' ?
                  
                  <MDBContainer className="mt-5" id= "choices">
                      <div>
                          <label style={labelStyles} id="labelName" htmlFor="full-name">Treatment room cleaning</label>
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                              <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                              <input type="radio" className="custom-control-input" id="defaultGroupExample7a" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)}/>
                              <label className="custom-control-label" htmlFor="defaultGroupExample7a">True</label>
                              </div>

                              <div className="custom-control custom-radio">
                              <input type="radio" className="custom-control-input" id="defaultGroupExample7b" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)}/>
                              <label className="custom-control-label" htmlFor="defaultGroupExample7b">False</label>
                              </div>
                          </div>
                      </div>

                      <div>
                          <label style={labelStyles} id="labelName" htmlFor="full-name">Disinfecting services</label>
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                              <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                              <input type="radio" className="custom-control-input" id="defaultGroupExample8a" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => {console.log (e.target); setServiceInput2(e.target.value)}}/>
                              <label className="custom-control-label" htmlFor="defaultGroupExample8a">True</label>
                              </div>

                              <div className="custom-control custom-radio">
                              <input type="radio" className="custom-control-input" id="defaultGroupExample8b" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => setServiceInput2(e.target.value)}/>
                              <label className="custom-control-label" htmlFor="defaultGroupExample8b">False</label>
                              </div>
                          </div>
                      </div>

                  </MDBContainer>

                 : null }

                {serviceReq === 'Office' ?
                  
                    <MDBContainer className="mt-5" id= "choices">
                      <div>
                          <label style={labelStyles} id="labelName" htmlFor="full-name">Sanitization</label>
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                              <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                              <input type="radio" className="custom-control-input" id="defaultGroupExample9a" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)}/>
                              <label className="custom-control-label" htmlFor="defaultGroupExample9a">True</label>
                              </div>

                              <div className="custom-control custom-radio">
                              <input type="radio" className="custom-control-input" id="defaultGroupExample9b" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)}/>
                              <label className="custom-control-label" htmlFor="defaultGroupExample9b">False</label>
                              </div>
                          </div>
                      </div>

                      <div>
                          <label style={labelStyles} id="labelName" htmlFor="full-name">Floor cleaning</label>
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                              <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                              <input type="radio" className="custom-control-input" id="defaultGroupExample10a" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => {console.log (e.target); setServiceInput2(e.target.value)}}/>
                              <label className="custom-control-label" htmlFor="defaultGroupExample10a">True</label>
                              </div>

                              <div className="custom-control custom-radio">
                              <input type="radio" className="custom-control-input" id="defaultGroupExample10b" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => setServiceInput2(e.target.value)}/>
                              <label className="custom-control-label" htmlFor="defaultGroupExample10b">False</label>
                              </div>
                          </div>
                      </div>

                      <div>
                          <label style={labelStyles} id="labelName" htmlFor="full-name">Restrooms</label>
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                              <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                              <input type="radio" className="custom-control-input" id="defaultGroupExample11a" name="groupOfDefaultRadios3" value={serviceInput2} onChange={(e) => {console.log (e.target); setServiceInput2(e.target.value)}}/>
                              <label className="custom-control-label" htmlFor="defaultGroupExample11a">True</label>
                              </div>

                              <div className="custom-control custom-radio">
                              <input type="radio" className="custom-control-input" id="defaultGroupExample11b" name="groupOfDefaultRadios3" value={serviceInput2} onChange={(e) => setServiceInput2(e.target.value)}/>
                              <label className="custom-control-label" htmlFor="defaultGroupExample11b">False</label>
                              </div>
                          </div>
                      </div>

                  </MDBContainer>

                 : null }

                {serviceReq === 'Restaurant' ?
                  
                    <MDBContainer className="mt-5" id= "choices">
                  <div>
                      <label style={labelStyles} id="labelName" htmlFor="full-name">Back Kitchen</label>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                          <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                          <input type="radio" className="custom-control-input" id="defaultGroupExample12a" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)}/>
                          <label className="custom-control-label" htmlFor="defaultGroupExample12a">True</label>
                          </div>

                          <div className="custom-control custom-radio">
                          <input type="radio" className="custom-control-input" id="defaultGroupExample12b" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)}/>
                          <label className="custom-control-label" htmlFor="defaultGroupExample12b">False</label>
                          </div>
                      </div>
                  </div>

                  <div>
                      <label style={labelStyles} id="labelName" htmlFor="full-name">Dining Area</label>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                          <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                          <input type="radio" className="custom-control-input" id="defaultGroupExample13a" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => {console.log (e.target); setServiceInput2(e.target.value)}}/>
                          <label className="custom-control-label" htmlFor="defaultGroupExample13a">True</label>
                          </div>

                          <div className="custom-control custom-radio">
                          <input type="radio" className="custom-control-input" id="defaultGroupExample13b" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => setServiceInput2(e.target.value)}/>
                          <label className="custom-control-label" htmlFor="defaultGroupExample13b">False</label>
                          </div>
                      </div>
                  </div>

                  <div>
                      <label style={labelStyles} id="labelName" htmlFor="full-name">Restrooms</label>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                          <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                          <input type="radio" className="custom-control-input" id="defaultGroupExample14a" name="groupOfDefaultRadios3" value={serviceInput3} onChange={(e) => setServiceInput3(e.target.value)}/>
                          <label className="custom-control-label" htmlFor="defaultGroupExample14a">True</label>
                          </div>

                          <div className="custom-control custom-radio">
                          <input type="radio" className="custom-control-input" id="defaultGroupExample14b" name="groupOfDefaultRadios3" value={serviceInput3} onChange={(e) => setServiceInput3(e.target.value)}/>
                          <label className="custom-control-label" htmlFor="defaultGroupExample14b">False</label>
                          </div>
                      </div>
                  </div>

                  <div>
                      <label style={labelStyles} id="labelName" htmlFor="full-name">Window Care</label>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                          <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                          <input type="radio" className="custom-control-input" id="defaultGroupExample15a" name="groupOfDefaultRadios4" value={serviceInput4} onChange={(e) => setServiceInput4(e.target.value)}/>
                          <label className="custom-control-label" htmlFor="defaultGroupExample15a">True</label>
                          </div>

                          <div className="custom-control custom-radio">
                          <input type="radio" className="custom-control-input" id="defaultGroupExample15b" name="groupOfDefaultRadios4" value={serviceInput4} onChange={(e) => setServiceInput4(e.target.value)}/>
                          <label className="custom-control-label" htmlFor="defaultGroupExample15b">False</label>
                          </div>
                      </div>
                  </div>
              </MDBContainer>

                 : null }

                {serviceReq === 'Services' ?
                  
                    <MDBContainer className="mt-5" id= "choices">
                  <div>
                      <label style={labelStyles} id="labelName" htmlFor="full-name">Cleaning Chemical procurement & storage</label>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                          <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                          <input type="radio" className="custom-control-input" id="defaultGroupExample16a" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)}/>
                          <label className="custom-control-label" htmlFor="defaultGroupExample16a">True</label>
                          </div>

                          <div className="custom-control custom-radio">
                          <input type="radio" className="custom-control-input" id="defaultGroupExample16b" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)}/>
                          <label className="custom-control-label" htmlFor="defaultGroupExample16b">False</label>
                          </div>
                      </div>
                  </div>

                  <div>
                      <label style={labelStyles} id="labelName" htmlFor="full-name">Snow removal management</label>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                          <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                          <input type="radio" className="custom-control-input" id="defaultGroupExample17a" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => {console.log (e.target); setServiceInput2(e.target.value)}}/>
                          <label className="custom-control-label" htmlFor="defaultGroupExample17a">True</label>
                          </div>

                          <div className="custom-control custom-radio">
                          <input type="radio" className="custom-control-input" id="defaultGroupExample17b" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => setServiceInput2(e.target.value)}/>
                          <label className="custom-control-label" htmlFor="defaultGroupExample17b">False</label>
                          </div>
                      </div>
                  </div>

                  <div>
                      <label style={labelStyles} id="labelName" htmlFor="full-name">Landscaping management</label>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                          <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                          <input type="radio" className="custom-control-input" id="defaultGroupExample18a" name="groupOfDefaultRadios3" value={serviceInput3} onChange={(e) => setServiceInput3(e.target.value)}/>
                          <label className="custom-control-label" htmlFor="defaultGroupExample18a">True</label>
                          </div>

                          <div className="custom-control custom-radio">
                          <input type="radio" className="custom-control-input" id="defaultGroupExample18b" name="groupOfDefaultRadios3" value={serviceInput3} onChange={(e) => setServiceInput3(e.target.value)}/>
                          <label className="custom-control-label" htmlFor="defaultGroupExample18b">False</label>
                          </div>
                      </div>
                  </div>

                  <div>
                      <label style={labelStyles} id="labelName" htmlFor="full-name">Facility cleaning</label>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                          <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                          <input type="radio" className="custom-control-input" id="defaultGroupExample19a" name="groupOfDefaultRadios4" value={serviceInput4} onChange={(e) => setServiceInput4(e.target.value)}/>
                          <label className="custom-control-label" htmlFor="defaultGroupExample19a">True</label>
                          </div>

                          <div className="custom-control custom-radio">
                          <input type="radio" className="custom-control-input" id="defaultGroupExample19b" name="groupOfDefaultRadios4" value={serviceInput4} onChange={(e) => setServiceInput4(e.target.value)}/>
                          <label className="custom-control-label" htmlFor="defaultGroupExample19b">False</label>
                          </div>
                      </div>
                  </div>

                  <div>
                      <label style={labelStyles} id="labelName" htmlFor="full-name">Off site storage/daily delivery service</label>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                          <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                          <input type="radio" className="custom-control-input" id="defaultGroupExample20a" name="groupOfDefaultRadios3" value={serviceInput3} onChange={(e) => setServiceInput3(e.target.value)}/>
                          <label className="custom-control-label" htmlFor="defaultGroupExample20a">True</label>
                          </div>

                          <div className="custom-control custom-radio">
                          <input type="radio" className="custom-control-input" id="defaultGroupExample20b" name="groupOfDefaultRadios3" value={serviceInput3} onChange={(e) => setServiceInput3(e.target.value)}/>
                          <label className="custom-control-label" htmlFor="defaultGroupExample20b">False</label>
                          </div>
                      </div>
                  </div>

                  <div>
                      <label style={labelStyles} id="labelName" htmlFor="full-name">RFP management</label>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                          <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                          <input type="radio" className="custom-control-input" id="defaultGroupExample21a" name="groupOfDefaultRadios4" value={serviceInput4} onChange={(e) => setServiceInput4(e.target.value)}/>
                          <label className="custom-control-label" htmlFor="defaultGroupExample21a">True</label>
                          </div>

                          <div className="custom-control custom-radio">
                          <input type="radio" className="custom-control-input" id="defaultGroupExample21b" name="groupOfDefaultRadios4" value={serviceInput4} onChange={(e) => setServiceInput4(e.target.value)}/>
                          <label className="custom-control-label" htmlFor="defaultGroupExample21b">False</label>
                          </div>
                      </div>
                  </div>
              </MDBContainer>

                 : null }
                
                <label style={labelStyles} htmlFor="date">Date Required:</label>
                <DatePicker selected={startDate} onChange={handleChange} className="datePicker"/>
                  
                

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