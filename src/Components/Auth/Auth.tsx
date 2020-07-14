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
    updateTheToken(arg0:any, arg1:any, arg2:any, arg3:any): any
    currentUserId: any
    setCurrentUserId: any
    isServiceComplete(arg0:any):any
    userData:any
    setUserData:any
    setIsAdmin: any
    isAdmin:any

    // setCurrentUser: any
    // currentUser: string
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
                isAdmin: 'uwishuwereanadminha',
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
            
            //  if(userdata.Status !== undefined){

                if(userdata.ID && userdata.Status !== undefined){
                    props.setUserData(userdata)
                    
                    props.setCurrentUserId(userdata.ID)
                    props.updateTheToken(userdata.sessionToken, userdata.Email, userdata.ADMIN, userdata.ServiceComplete)
                    // props.isServiceComplete(userdata)


                    //Previous Service Complete Shit
                    console.log(props.currentUserId)
                    if(userdata.ServiceComplete === 'yes'){
                        props.setEnableTestCreate(true)
                    }else if(userdata.ServiceComplete ==='no'){
                        props.setEnableTestCreate(false)
                    }

                    //Previous Admin Shit
                    // if(userdata.ADMIN !== undefined){
                    //     props.setIsAdmin(true)
                    // }else{
                    //     props.setIsAdmin(false)
                    // }
                    console.log('Logged In!')
             }
            //  setCurrentUser(userdata.user.username);
            //  setUserId(userdata.user.id)
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
                          <p style={{color:'red'}}>{errorMessage}</p>
                          <p style={{color:'red'}}>{passwordError}</p>
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
                                <Input style = {inputStyles} type="number" name="phoneNumber" placeholder="5555555555" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required />
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