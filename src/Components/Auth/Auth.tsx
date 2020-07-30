import React, { useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, FormFeedback} from 'reactstrap';
import './Auth.css';
import Logo from '../../assets/Premier-Commercial-Services-icon.svg';
import APIURL from '../../helpers/environment';
// import { invalid } from 'moment';



const baseURL = `${APIURL}/user`;

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

    // children: any

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
    fontSize:'.9rem'

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
    const [phoneInputError, setPhoneInputError] = useState<boolean>(true);
    const [passwordInputError, setPasswordInputError] = useState<boolean>(true);
    const [emailInputError, setEmailInputError] = useState<boolean>(true);

    const [emailError, setEmailError] = useState('')
    const [passwordLengthError, setPasswordLengthError] = useState('')
    
    const [phoneNumberError, setPhoneNumberError] = useState('')

    const [showSubmit, setShowSubmit] = useState(true); 
    const [disabledSignupButton, setDisabledSignupButton] = useState(true)

    // Keyboard.dismiss()



    const submit = (e: any) => {
        e.preventDefault();
        const url = props.signup ? baseURL + '/create' : baseURL + '/login';
        const reqBody = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                passwordhash: password,
                location: location,
                phoneNumber: '('+ phoneNumber.substring(0, 3) + ')' + '-'+phoneNumber.substring(3, 6) + '-' + phoneNumber.substring(6, 10),
                isAdmin: 'sdf3x6G3kfDSkV38dY94',
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
             setPasswordLengthError(userdata.PasswordError)
             setEmailError(userdata.EmailError)
           
             if(userdata.EmailError !== undefined){
                 setEmailInputError(true)
             }
             else{
                setEmailInputError(false)
             }

             if(userdata.Greeting !== undefined){
                 props.setSignup(false)
             }

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
                    <ModalBody style={{backgroundColor: '#009FE4', borderRadius: '0px 0px 20px 20px'}}>
                        <Form onSubmit={(e) => {
                                 submit(e)
                             
                           
                        }} style={{textAlign:'center'}}>
                            <h3 style={{textAlign:'center'}}>{props.signup ? 'Sign Up' : 'Sign In'}</h3>
                          <p style={errorStyle}>{errorMessage}</p>
                          {/* <p style={errorStyle}>{phoneErrorMessage} </p> */}
                          {/* <p style={errorStyle}>{emailError}</p> */}
                          {/* <p style={errorStyle}>{passwordLengthError}</p> */}
                            <FormGroup>
                                <Label style={labelStyles} htmlFor="email">Email</Label>
                                <Input invalid={emailInputError} valid={!emailInputError} style = {inputStyles} type= "email" name="email" placeholder="johnsmith@email.com" value={email} onChange={(e) => {
                                    setEmailError('')
                                    setEmail(e.target.value)
                                        if(e.target.value.includes('@') && e.target.value.includes('.')){
                                            setEmailInputError(false)
                                        }
                                        else{
                                            setEmailInputError(true)
                                        }
                                    }} required />
                            
                            
                            
                            <FormFeedback style={errorStyle} >{emailError}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label style={labelStyles} htmlFor="password">Password</Label>
                                <Input invalid={passwordInputError} valid={!passwordInputError} style = {inputStyles} minLength={5} type="password" name="password" value={password} onChange={(e) => {
                                           setPassword(e.target.value)
                                    if(e.target.value.length < 5) {
                                  
                                        setPasswordInputError(true)

                                    }else{
                                 
                                        setPasswordInputError(false)
                                    }
                                
                                }} required
                                    
                                    
                                    />
                            <FormFeedback style={errorStyle}>{passwordLengthError}</FormFeedback>
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
                                <Input style = {inputStyles} type="text" name="location" value={location} onChange={e => {
                                    
                                    
                                    
                                    setLocation(e.target.value)}} required />
                            </FormGroup>
                            <FormGroup>
                                <Label style={labelStyles} htmlFor="phoneNumber">Phone Number</Label>
                                <Input invalid={phoneInputError} valid={!phoneInputError} style = {inputStyles} maxlength = "10" type="tel" name="phoneNumber" placeholder="5555555555"  onChange={e => {
                                   
                                   setPhoneNumber(e.target.value)
                                   if(e.target.value.length < 10   ) {
                                    setPhoneNumberError('Please input your full number')
                                        setPhoneInputError(true)
                                        setDisabledSignupButton(true)
                                        if(e.target.value.length < 1){
                                            setPhoneNumberError('')
                                        }
                                    }
                                    else{
                                     
                                        setDisabledSignupButton(false)
                                        setPhoneInputError(false)
                                    }

                               }} required />
                               <FormFeedback style={errorStyle}>{phoneNumberError}</FormFeedback>
                            </FormGroup>
                            
                            </div>
                            : null}
                                             
                 
                        <Button  type="button" onClick={() => {
                            
                            setPasswordLengthError('')
                            setEmailError('')
                            setErrorMessage('')
                            props.setSignup(!props.signup)}}>{props.signup ? 'Have an account? Signin' : 'Need an account? Signup!'}</Button>
                        { props.signup ?
                        <Button disabled={disabledSignupButton}  type='submit'   color="primary" onClick={(e) => {
                               
                                // submit(e)
                      
                           
                            }}>Signup</Button>:
                        <Button type='submit'  color="primary" onClick={(e) => {
                                // toggle()
                                // submit(e)
                           
                      
                            }}>Login</Button>
                        }
                    
                
                         
                    </Form>
                    </ModalBody>
            </Modal>
            
            </div>
        );
}

export default Auth;