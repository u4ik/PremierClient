import React, {useState, useEffect} from 'react'

import { Table, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

interface UserProps  {
    updateToken: string
}

const Users:React.FunctionComponent<UserProps> = (props:UserProps)  => {

    const [userData, setUserData] = useState<any>([])
    const [userId, setUserId] =useState<any>()
    const [serviceComplete, setServiceComplete] = useState<any>()
    

    
    const getUsers = () => {
        let token = localStorage.getItem('token')
        fetch('http://localhost:3000/user/all', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : token!
            }
        }).then(res => res.json())
        .then(userStuff => {
           
            setUserData(userStuff.mapStuff)
        })
        .catch(err => console.log(err))
    }

    const handleChange = (e:any) => {
        setServiceComplete(e.target.value);
        console.log(e.target.value)
        updateUser(e);
        getUsers();

    }
    
    useEffect (() => {
        getUsers();
     },[])
    

     const updateUser = (e:any) => {
        let token = localStorage.getItem('token')

        const reqBody = { 
            // serviceComplete: serviceComplete
             serviceComplete: e.target.value
        }
        fetch('http://localhost:3000/user/edit/' + userId, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : token!
            },
            body: JSON.stringify(reqBody)
        }).then(res => res.json())
        .then(response => {
         console.log(response)
            if(response.UserUpdated !== undefined){
            
            getUsers();
            } else {
                getUsers();
            }
        })
    }
     let displayUsers = userData.map((user:any) => {
        return(
                            <tr key={user.id}>
                                {/* <th scope="row">{user.id}</th> */}
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.location}</td>
                                <td>{user.phoneNumber}</td>
                                <td>   
                                    {/* DropdownMenu Y/N*/}
                                    <p>{user.serviceComplete}</p>
                                   <select style = {{outline:'none', border:'none'}} name="name" id=""  onClick={() => {
                                   console.log(user.id);
                                   setUserId(user.id);
                                   getUsers();
                                    }} onChange={(e) => {
                                     handleChange(e);
                                        }}>
                                        <option value={user.serviceComplete === 'yes'  ? 'yes' : 'no'}>{user.serviceComplete === 'yes' ? 'yes' : 'no'} </option>
                                        <option value={user.serviceComplete === 'yes'  ? 'no' : 'yes'}>{user.serviceComplete === 'yes' ? 'no' : 'yes'}</option>
                          
                                        
                                        {/* <option value='yes'>yes</option>
                                        <option value='no'>no</option> */}
                                    </select>
                             
                                    {/* <p>{user.serviceComplete}</p> */}
                                </td>
                            </tr>
        )
    })
    return (
        <div style={{backgroundColor:'white', color:'#009FE4' , textShadow:'.4px .4px 1px black'}}>
            <h3 style={{fontSize:'1.9rem', paddingTop:'3%', color:'#444343', userSelect:'none', marginBottom: '1%', paddingBottom: '1%', borderBottom: 'solid 1px white', backgroundColor: 'white'}} onClick={(e) => getUsers()}>
            All Users</h3>
            <div className="">
                    <Table>
                        <thead>
                            <tr>
                                {/* <th>#</th> */}
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Phone #</th>
                                <th>Service Complete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {displayUsers}
                        </tbody>
                    </Table>
            </div>
        </div>
    )
}

export default Users