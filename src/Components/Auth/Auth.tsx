import React, { useState } from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const baseURL = 'http://localhost:3000/user';


const Auth:React.FunctionComponent<{ props?: any }> = ({props}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [signup, setSignup] = useState(true);

    const submit = (e: any) => {
        e.preventDefault();
        const url = signup ? baseURL + '/signup' : baseURL + '/signin';
        const reqBody = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                passwordhash: password,
                location: location,
                phoneNumber: phoneNumber,
                isAdmin: isAdmin

        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        }).then(response => response.json())
            .then(rjson =>{
                props.updateToken(rjson.sessionToken)
            })
        .catch(err => console.log(err.message))
    }

    return (
            <div>
                <Form onSubmit={e => submit(e)}>
                    <h3>{signup ? 'Sign Up' : 'Sign In'}</h3>
                        
                    <FormGroup>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} required />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} required />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input name="email" value={email} onChange={e => setEmail(e.target.value)} required />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="location">Location</Label>
                        <Input type="text" name="location" value={location} onChange={e => setLocation(e.target.value)} required />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input type="number" name="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required />
                    </FormGroup>

                    <Button type="button" onClick={() => setSignup(!signup)}>{signup ? 'Have an account? Signin' : 'Need an account? Signup!'}</Button>
                    <Button type="submit">Submit</Button>
                </Form>
                
            </div>
        );
}

export default Auth;