import React, { useState } from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './Auth.css';
import Logo from '../../assets/Premier-Commercial-Services-icon.svg';

const baseURL = 'http://localhost:3000/user';

interface displayAuthForm {
    showAuth: boolean
    setShowAuth: any
    updateToken: any
    setUpdateToken: any
    signup: any
    setSignup: any
    setSignedIn: any
    signedIn: boolean
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


const Auth: React.FunctionComponent<displayAuthForm> = (props:displayAuthForm) => {

    const [modal, setModal] = useState(true);
    
    const toggle = () => props.setShowAuth(!props.showAuth);

    
const [jsonStuff, setJsonStuff] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
  
   
    

    const submit = (e: any) => {
        e.preventDefault();
        const url = props.signup ? baseURL + '/create' : baseURL + '/login';
        const reqBody = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                passwordhash: password,
                location: location,
                phoneNumber: phoneNumber,
                isAdmin: 'something'

        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        }).then(response => response.json())
            .then(rjson =>{
                // console.log(rjson.message)
                // console.log(rjson.failure)
                console.log(rjson.Greeting)
                if (rjson.Greeting !== undefined){

                console.log(rjson)
                setJsonStuff(rjson);
                toggle()
                props.setSignedIn(true)
                props.setUpdateToken(rjson.sessionToken)
                console.log(props.updateToken)
                }
            })
        .catch(err => console.log(err.message))
    }

    return (
            <div>

                <Modal style={{borderRadius:'20px'}} isOpen={props.showAuth}  className=''>
                    <ModalHeader toggle={toggle} style={modalHeaderStyle}>
                    
                    <img src = {Logo} style={{width:'20%'}} />
                    </ModalHeader>
                    <ModalBody style={{backgroundColor: '#009FE4'}}>
                        <Form>
                            <h3>{props.signup ? 'Sign Up' : 'Sign In'}</h3>
                          
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input name="email" value={email} onChange={e => setEmail(e.target.value)} required />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required />
                            </FormGroup>

                            {props.signup ? 
                            <div>
                            <FormGroup>
                                <Label htmlFor="firstName">First Name</Label>
                                <Input name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} required />
                            </FormGroup>
                            

                            <FormGroup>
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} required />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="location">Location</Label>
                                <Input type="text" name="location" value={location} onChange={e => setLocation(e.target.value)} required />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="phoneNumber">Phone Number</Label>
                                <Input type="number" name="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required />
                            </FormGroup>
                            </div>
                            : null}
                            </Form>
                        
                    </ModalBody>
                    <ModalFooter style={modalFooterStyle}>
                        <Button type="button" onClick={() => props.setSignup(!props.signup)}>{props.signup ? 'Have an account? Signin' : 'Need an account? Signup!'}</Button>
                        <Button color="primary" onClick={(e) => {
                                // toggle()
                                submit(e)}}>Submit</Button>{' '}
                        
                    </ModalFooter>
                    
            </Modal>

                
                
            </div>
        );
}

export default Auth;