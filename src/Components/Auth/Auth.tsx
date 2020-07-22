import React, { useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './Auth.css';
import Logo from '../../assets/Premier-Commercial-Services-icon.svg';

const baseURL = 'http://localhost:3000/user';

interface displayAuthForm {
    showAuth: boolean
    setShowAuth: any
    updateToken: string
    setUpdateToken: any
    signup: any
    setSignup: any
    setSignedIn: any
    signedIn: boolean
    setEnableTestCreate: any
    enableTestCreate: boolean
    updateTheToken(arg0:any, arg1:any, arg2:any, arg3:any, arg4:any, arg5:any, arg6:any): any
    currentUserId: any
    setCurrentUserId: any
 
    userData:any
    setUserData:any
    setIsAdmin: any
    isAdmin:any

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
    borderColor:'white',
    backgroundColor:'white',
    fontSize:'17px'
}

const labelStyles:React.CSSProperties= {
    textShadow: '.1rem .1rem .1rem black',
    color:'white',
    marginTop: '.5rem',
    fontSize:'22px',
    

}
const errorStyle:React.CSSProperties ={
    color: 'white',
    textShadow: '1px 1px 1px black',
    fontSize:'1.5rem'

}

const Auth: React.FunctionComponent<displayAuthForm> = (props:displayAuthForm) => {

    const [modal, setModal] = useState(true);
    const toggle = () => props.setShowAuth(!props.showAuth);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [errorMessage, setErrorMessage] = useState('')
    const [passwordError, setPasswordError] = useState('')

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
                // isAdmin: 'congratsyoureanadmin',
                isAdmin: 'uwishuwereanadminha1',
                serviceComplete: 'No'
        };
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        }).then(response => response.json())
            .then(userdata =>{
             console.log(userdata)
             setErrorMessage(userdata.message)
                if(userdata.ID && userdata.Status !== undefined){
                    let userFirstName =  userdata.Greeting.replace(`Hello,!♥  Welcome :)`, '')
                    props.setUserData(userdata)
                    props.setCurrentUserId(userdata.ID)
                    props.updateTheToken(userdata.sessionToken, userdata.Email, userdata.ADMIN, userdata.ServiceComplete, userdata.ID, userdata.FirstName, userdata.LastName)
                    console.log('Logged In!')
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
                        <Form style={{textAlign:'center'}}>
                            <h3 style={{textAlign:'center'}}>{props.signup ? 'Sign Up' : 'Sign In'}</h3>
                          <p style={errorStyle}>{errorMessage}</p>
                          <p style={errorStyle}>{passwordError}</p>
                            <FormGroup>
                                <Label style={labelStyles} htmlFor="email">Email</Label>
                                <Input style = {inputStyles} name="email" placeholder="johnsmith@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
                            </FormGroup>
                            <FormGroup>
                                <Label style={labelStyles} htmlFor="password">Password</Label>
                                <Input style = {inputStyles} type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required />
                            </FormGroup>
                            {props.signup ? 
                            <div>
                            <FormGroup>
                                <Label style={labelStyles} htmlFor="firstName">First Name</Label>
                                <Input style = {inputStyles} name="firstName" placeholder="John" value={firstName} onChange={e => setFirstName(e.target.value)} required />
                            </FormGroup>
                            <FormGroup>
                                <Label style={labelStyles} htmlFor="lastName">Last Name</Label>
                                <Input style = {inputStyles} name="lastName" placeholder="Smith" value={lastName} onChange={e => setLastName(e.target.value)} required />
                            </FormGroup>
                            <FormGroup>
                                <Label style={labelStyles} htmlFor="location">Location</Label>
                                <Input style = {inputStyles} type="text" name="location" value={location} onChange={e => setLocation(e.target.value)} required />
                            </FormGroup>
                            <FormGroup>
                                <Label style={labelStyles} htmlFor="phoneNumber">Phone Number</Label>
                                <Input style = {inputStyles} type="number" name="phoneNumber" placeholder="555-555-5555" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required />
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