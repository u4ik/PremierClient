import React, {useState, useEffect} from 'react'

import { Table } from 'reactstrap';


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


    const updateUser = () => {
        let token = localStorage.getItem('token')

        const reqBody = { 
            serviceComplete: serviceComplete
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
            getUsers();
            console.log(response)
        })
    }



    useEffect (() => {
   
        getUsers();

     },[])
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
                                   <select style = {{outline:'none', border:'none'}} name="name" id=""  onClick={() => {
                                   console.log(user.id)
                                   setUserId(user.id)
                                    }} onChange={(e) => {
                                        setServiceComplete(e.target.value);
                                        updateUser();
                                        }}>
                                        <option value={user.serviceComplete}>{user.serviceComplete}</option>
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