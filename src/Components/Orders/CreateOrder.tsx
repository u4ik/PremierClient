import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { MDBContainer } from "mdbreact";
import Logo from '../../assets/Premier-Commercial-Services-icon.svg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment"
import { Switch } from 'react-router-dom';

import APIURL from '../../helpers/environment';


interface createOrder {
    showOrder: boolean
    setShowOrder: React.Dispatch<React.SetStateAction<any>>
    updateToken: string
    fetchOrders: any
}

interface ServiceReq {
    Athletics?: Athletics
    Grocery?: Grocery
    Medical?: Medical
    Office?: Office
    Restaurant?: Restaurant
    Services?: Services
}

interface Athletics {
    ['Basketball Court Care']?: string
    ['Concessions Cleaning']?: string
    ['Large Restroom Cleaning']?: string
    ['Bleacher Cleanup']?: string
}

interface Grocery {
    ['Dairy Section']?: string
    ['Frozen Food Section']?: string
}

interface Medical {
    ['Treatment Room Cleaning']?: string
    ['Disinfecting Services']?: string
}

interface Office {
    ['Sanitization']?: string
    ['Floor Cleaning']?: string
    ['Restrooms']?: string
}

interface Restaurant {
    ['Back Kitchen']?: string
    ['Dining Area']?: string
    ['Restrooms']?: string
    ['Window Care']?: string
}

interface Services {
    ['Cleaning Chemical Procurement & Storage']?: string
    ['Snow Removal Management']?: string
    ['Landscaping Management']?: string
    ['Facility Cleaning']?: string
    ['Off-Site Storage Or Daily Delivery Service']?: string
    ['RFP Management']?: string
}

const CreateOrder: React.FunctionComponent<createOrder> = (props: createOrder) => {

    const monthNames = ["1", "2", "3", "4", "5", "6",
        "7", "8", "9", "10", "11", "12"
    ];
    let dateObj = new Date();
    let month = monthNames[dateObj.getMonth()];
    let day = String(dateObj.getDate()).padStart(2, '0');
    let year = dateObj.getFullYear();
    let output = month + '/' + day + '/' + year;

    const toggle = () => props.setShowOrder(!props.showOrder);
    const [startDate, setStartDate] = useState(new Date());
    const [serviceReq, setServiceReq] = useState({} as ServiceReq);
    const [serviceInput1, setServiceInput1] = useState('None');
    const [serviceInput2, setServiceInput2] = useState('None');
    const [serviceInput3, setServiceInput3] = useState('None');
    const [serviceInput4, setServiceInput4] = useState('None');
    const [serviceInput5, setServiceInput5] = useState('None');
    const [serviceInput6, setServiceInput6] = useState('None');
    const [userLocation, setUserLocation] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    let today = new Date()
    const [reqDateTime, setReqDateTime] = useState(output);
    const [serviceReqCategory, setServiceReqCategory] = useState('')







    const handleChange = (date: any) => {
        setStartDate(date)
        let tempString: string = date.toString().substring(4, 7)
        let fullDate;
        switch (tempString) {
            case 'Jan':
                fullDate = 1
                break;

            case 'Feb':
                fullDate = 2
                break;

            case 'Mar':
                fullDate = 3
                break;

            case 'Apr':
                fullDate = 4
                break;

            case 'May':
                fullDate = 5
                break;

            case 'Jun':
                fullDate = 6
                break;

            case 'Jul':
                fullDate = 7
                break;

            case 'Aug':
                fullDate = 8
                break;

            case 'Sep':
                fullDate = 9
                break;

            case 'Oct':
                fullDate = 10
                break;

            case 'Nov':
                fullDate = 11
                break;

            case 'Dec':
                fullDate = 12
                break;

            default: break

        }
        fullDate = fullDate + '/' + date.toString().substring(8, 10) + '/' + date.toString().substring(11, 16)
        setReqDateTime(fullDate)
    };

    const handleLocationChange = (e: any) => {
        setUserLocation(e.target.value);
    };

    const handleServiceChange = (e: any) => {
        setServiceReq(e.target.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();


        fetch(`${APIURL}/orders/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.updateToken
            },
            body: JSON.stringify({
                userLocation: userLocation,
                serviceReq: serviceReq,
                reqDateTime: reqDateTime.toString().substring(0, 15),
                isComplete: 'No'
            })
        }).then(res => res.json())
            .then(noteData => {
                props.fetchOrders();
            }).catch(err => console.log(err))

    }



    const modalHeaderStyle: React.CSSProperties = {
        backgroundColor: '#177BBD',
        color: 'white',
        textShadow: '.1rem .1rem .1rem black',
        borderColor: 'transparent',
        borderRadius: '20px 20px 0px 0px',

    }

    const modalFooterStyle: React.CSSProperties = {
        backgroundColor: '#177BBD',
        color: 'white',
        textShadow: '.1rem .1rem .1rem black',
        borderColor: 'transparent',
        borderRadius: '0px 0px 20px 20px'
    }


    const inputStyles: React.CSSProperties = {
        textAlign: 'center',
        borderRadius: '5px',
        outline: 'none',
        borderColor: 'transparent',
        alignItems: 'center',
    }
    const labelStyles: React.CSSProperties = {
        textShadow: '.1rem .1rem .1rem black',
        color: 'white',
        marginTop: '.5rem',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: '1.2rem'

    }

    const labelStyle: React.CSSProperties = {
        color: 'white',
        textShadow: '.1rem .1rem .1rem black',
    }


    return (

        <Modal style={{ borderRadius: '20px' }} isOpen={props.showOrder} toggle={toggle} className=''>
            <ModalHeader toggle={toggle} style={modalHeaderStyle}>

                <img src={Logo} style={{ width: '20%' }} />
            </ModalHeader>
            <ModalBody style={{ backgroundColor: '#009FE4' }}>
                <form className="fs-frm" id="myForm" name="simple-contact-form" accept-charset="utf-8" onSubmit={handleSubmit}>

                    <fieldset id="fs-frm-inputs">

                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                            <label style={labelStyles} id="labelName" htmlFor="full-name">User Location:</label>
                            <input onChange={handleLocationChange} style={inputStyles} type="text" name="name" id="full-name" placeholder="Enter your address here!" required={true}></input>

                            <label onChange={handleServiceChange} style={labelStyles} htmlFor="email-address">Service Required:</label>

                            <select style={inputStyles} name="name" id="" placeholder="Select service required" required onChange={(e) => { setServiceReqCategory(e.target.value); setServiceReq({ [e.target.value]: {} }) }}>
                                <option></option>
                                <option value="Athletics">Athletics</option>
                                <option value="Grocery">Grocery</option>
                                <option value="Medical">Medical</option>
                                <option value="Office">Office</option>
                                <option value="Restaurant">Restaurant</option>
                                <option value="Services">Services</option>
                            </select>

                            {serviceReqCategory === 'Athletics' ?

                                <MDBContainer className="mt-5" id="choices">
                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">Basketball Court Care</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Athletics: { ...serviceReq.Athletics, ['Basketball Court Care']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample1a" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample1a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Athletics: { ...serviceReq.Athletics, ['Basketball Court Care']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample1b" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample1b">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">Concessions Cleaning</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Athletics: { ...serviceReq.Athletics, ['Concessions Cleaning']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample2a" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => { setServiceInput2(e.target.value) }} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample2a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Athletics: { ...serviceReq.Athletics, ['Concessions Cleaning']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample2b" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => setServiceInput2(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample2b">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">Large Restroom Cleaning</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Athletics: { ...serviceReq.Athletics, ['Large Restroom Cleaning']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample3a" name="groupOfDefaultRadios3" value={serviceInput3} onChange={(e) => setServiceInput3(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample3a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Athletics: { ...serviceReq.Athletics, ['Large Restroom Cleaning']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample3b" name="groupOfDefaultRadios3" value={serviceInput3} onChange={(e) => setServiceInput3(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample3b">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">Bleacher Cleanup</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Athletics: { ...serviceReq.Athletics, ['Bleacher Cleanup']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample4a" name="groupOfDefaultRadios4" value={serviceInput4} onChange={(e) => setServiceInput4(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample4a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Athletics: { ...serviceReq.Athletics, ['Bleacher Cleanup']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample4b" name="groupOfDefaultRadios4" value={serviceInput4} onChange={(e) => setServiceInput4(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample4b">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </MDBContainer>

                                : null}


                            {serviceReqCategory === 'Grocery' ?
                                <MDBContainer className="mt-5" id="choices">
                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">Dairy Section</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Grocery: { ...serviceReq.Grocery, ['Dairy Section']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample5a" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample5a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Grocery: { ...serviceReq.Grocery, ['Dairy Section']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample5b" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample5b">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">Frozen Food Section</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Grocery: { ...serviceReq.Grocery, ['Frozen Food Section']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample6a" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => { setServiceInput2(e.target.value) }} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample6a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Grocery: { ...serviceReq.Grocery, ['Frozen Food Section']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample6b" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => setServiceInput2(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample6b">No</label>
                                            </div>
                                        </div>
                                    </div>

                                </MDBContainer>

                                : null}

                            {serviceReqCategory === 'Medical' ?

                                <MDBContainer className="mt-5" id="choices">
                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">Treatment Room Cleaning</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Medical: { ...serviceReq.Medical, ['Treatment Room Cleaning']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample7a" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample7a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Medical: { ...serviceReq.Medical, ['Treatment Room Cleaning']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample7b" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample7b">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">Disinfecting Services</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Medical: { ...serviceReq.Medical, ['Disinfecting Services']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample8a" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => { setServiceInput2(e.target.value) }} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample8a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Medical: { ...serviceReq.Medical, ['Disinfecting Services']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample8b" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => setServiceInput2(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample8b">No</label>
                                            </div>
                                        </div>
                                    </div>

                                </MDBContainer>

                                : null}

                            {serviceReqCategory === 'Office' ?

                                <MDBContainer className="mt-5" id="choices">
                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">Sanitization</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Office: { ...serviceReq.Office, ['Sanitization']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample9a" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample9a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Office: { ...serviceReq.Office, ['Sanitization']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample9b" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample9b">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">Floor Cleaning</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Office: { ...serviceReq.Office, ['Floor Cleaning']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample10a" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => { setServiceInput2(e.target.value) }} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample10a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Office: { ...serviceReq.Office, ['Floor Cleaning']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample10b" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => setServiceInput2(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample10b">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">Restrooms</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Office: { ...serviceReq.Office, ['Restrooms']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample11a" name="groupOfDefaultRadios3" value={serviceInput2} onChange={(e) => { setServiceInput2(e.target.value) }} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample11a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Office: { ...serviceReq.Office, ['Restrooms']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample11b" name="groupOfDefaultRadios3" value={serviceInput2} onChange={(e) => setServiceInput2(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample11b">No</label>
                                            </div>
                                        </div>
                                    </div>

                                </MDBContainer>

                                : null}

                            {serviceReqCategory === 'Restaurant' ?

                                <MDBContainer className="mt-5" id="choices">
                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">Back Kitchen</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Restaurant: { ...serviceReq.Restaurant, ['Back Kitchen']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample12a" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample12a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Restaurant: { ...serviceReq.Restaurant, ['Back Kitchen']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample12b" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample12b">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">Dining Area</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Restaurant: { ...serviceReq.Restaurant, ['Dining Area']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample13a" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => { setServiceInput2(e.target.value) }} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample13a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Restaurant: { ...serviceReq.Restaurant, ['Dining Area']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample13b" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => setServiceInput2(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample13b">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">Restrooms</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Restaurant: { ...serviceReq.Restaurant, ['Restrooms']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample14a" name="groupOfDefaultRadios3" value={serviceInput3} onChange={(e) => setServiceInput3(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample14a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Restaurant: { ...serviceReq.Restaurant, ['Restrooms']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample14b" name="groupOfDefaultRadios3" value={serviceInput3} onChange={(e) => setServiceInput3(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample14b">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">Window Care</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Restaurant: { ...serviceReq.Restaurant, ['Window Care']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample15a" name="groupOfDefaultRadios4" value={serviceInput4} onChange={(e) => setServiceInput4(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample15a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Restaurant: { ...serviceReq.Restaurant, ['Window Care']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample15b" name="groupOfDefaultRadios4" value={serviceInput4} onChange={(e) => setServiceInput4(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample15b">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </MDBContainer>

                                : null}

                            {serviceReqCategory === 'Services' ?

                                <MDBContainer className="mt-5" id="choices">
                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">Cleaning Chemical Procurement & Storage</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Services: { ...serviceReq.Services, ['Cleaning Chemical Procurement & Storage']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample16a" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample16a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Services: { ...serviceReq.Services, ['Cleaning Chemical Procurement & Storage']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample16b" name="groupOfDefaultRadios" value={serviceInput1} onChange={(e) => setServiceInput1(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample16b">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">Snow Removal Management</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Services: { ...serviceReq.Services, ['Snow Removal Management']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample17a" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => { setServiceInput2(e.target.value) }} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample17a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Services: { ...serviceReq.Services, ['Snow Removal Management']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample17b" name="groupOfDefaultRadios2" value={serviceInput2} onChange={(e) => setServiceInput2(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample17b">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">Landscaping Management</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Services: { ...serviceReq.Services, ['Landscaping Management']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample18a" name="groupOfDefaultRadios3" value={serviceInput3} onChange={(e) => setServiceInput3(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample18a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Services: { ...serviceReq.Services, ['Landscaping Management']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample18b" name="groupOfDefaultRadios3" value={serviceInput3} onChange={(e) => setServiceInput3(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample18b">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">Facility Cleaning</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Services: { ...serviceReq.Services, ['Facility Cleaning']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample19a" name="groupOfDefaultRadios4" value={serviceInput4} onChange={(e) => setServiceInput4(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample19a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Services: { ...serviceReq.Services, ['Facility Cleaning']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample19b" name="groupOfDefaultRadios4" value={serviceInput4} onChange={(e) => setServiceInput4(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample19b">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">Off Site Storage or Daily Delivery Service</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Services: { ...serviceReq.Services, ['Off-Site Storage Or Daily Delivery Service']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample20a" name="groupOfDefaultRadios5" value={serviceInput5} onChange={(e) => setServiceInput5(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample20a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Services: { ...serviceReq.Services, ['Off-Site Storage Or Daily Delivery Service']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample20b" name="groupOfDefaultRadios5" value={serviceInput5} onChange={(e) => setServiceInput5(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample20b">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyles} id="labelName" htmlFor="full-name">RFP Management</label>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <div className="custom-control custom-radio" style={{ marginRight: '10px' }}>
                                                <input onClick={() => setServiceReq({ Services: { ...serviceReq.Services, ['RFP Management']: 'true' } })} type="radio" className="custom-control-input" id="defaultGroupExample21a" name="groupOfDefaultRadios6" value={serviceInput6} onChange={(e) => setServiceInput6(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample21a">Yes</label>
                                            </div>

                                            <div className="custom-control custom-radio">
                                                <input onClick={() => setServiceReq({ Services: { ...serviceReq.Services, ['RFP Management']: 'false' } })} type="radio" className="custom-control-input" id="defaultGroupExample21b" name="groupOfDefaultRadios6" value={serviceInput6} onChange={(e) => setServiceInput6(e.target.value)} />
                                                <label className="custom-control-label" style={labelStyle} htmlFor="defaultGroupExample21b">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </MDBContainer>

                                : null}

                            <label style={labelStyles} htmlFor="date">Requested Date</label>
                            <DatePicker selected={startDate} onChange={handleChange} className="datePicker" />



                        </div>
                    </fieldset>

                    <div id="sendButton" style={{ textAlign: 'center', marginTop: '3%' }}>
                        <Button color="primary" type="submit" id="subm" value="Submit" className="btn btn-primary" onClick={toggle} >Send</Button>
                        <Button style={{ marginLeft: '10%' }} color="secondary" onClick={toggle}>Cancel</Button>

                    </div>
                </form>

            </ModalBody>
            <ModalFooter style={modalFooterStyle}>

            </ModalFooter>
        </Modal>
    );
}




export default CreateOrder;