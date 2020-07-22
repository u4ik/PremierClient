import React, {useState, useEffect} from 'react'

import { Table } from 'reactstrap';


interface UserProps  {

    updateToken: string


}

const Users:React.FunctionComponent<UserProps> = (props:UserProps)  => {

    const [userData, setUserData] = useState<any>([])


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
            console.log(userStuff.mapStuff)
            setUserData(userStuff.mapStuff)
        })
        .catch(err => console.log(err))
    }
    useEffect (() => {
        getUsers();
        
     },[])

    const displayUsers = userData.map((user:any) => {
        return(
                            <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.location}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.serviceComplete}</td>
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
                                <th>#</th>
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