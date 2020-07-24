import React, {useState, useEffect} from 'react'
import { Table, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { MDBDataTable, MDBBtn } from 'mdbreact';

import LoadingGif from '../../assets/Premier-Commercial-Services-icon.svg'

import LogoIcon from '../../assets/Premier-Commercial-Services-icon.svg'

interface UserProps  {
    updateToken: string
    isAdmin: any
    signedIn: any
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
                console.log(userStuff)
           if(localStorage.getItem('admin') !== 'Negative' || null || undefined && props.isAdmin === true && userStuff.mapStuff !== undefined){
            
            
            setUserData(userStuff.mapStuff)
           }else {
               setUserData([])
           }
        })
        .catch(err => console.log(err))
    }


    if(localStorage.getItem('admin') === 'Negative' || null || undefined){
        setUserData([])
       }

    const handleChange = (e:any) => {
        setServiceComplete(e.target.value);
        // console.log(e.target.value)
        updateUser(e);
        getUsers();

    }
    
    useEffect (() => {
        if (localStorage.getItem('admin') !== 'Negative' && props.signedIn === true &&  props.isAdmin === true){ 
            if(userData !== undefined && userData.length === 0){
            getUsers()
            }
        }
 
     })

     
    

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
  


    let data = {
      
        columns: [
          {
            label: 'First Name',
            field: 'firstName',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Last Name',
            field: 'lastName',
            sort: 'asc',
            width: 100
          },
    
          {
            label: 'Email',
            field: 'email',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Location',
            field: "location",
            sort: 'asc',
            width: 200
          },
          {
            label: 'Phone #',
            field: 'phoneNumber',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Complete',
            field: 'serviceComplete',
            sort: 'asc',
            width: 80
            
          },
        ],
        
        rows: 

        
        
        userData ? userData.map((user: any) => ({
          ...user,
         
          serviceComplete:  <select style = {{outline:'none', border:'none', backgroundColor:'transparent'}} value={user.serviceComplete} name="name" id=""  onClick={() => {
            console.log(user.id);
            setUserId(user.id);
         //    getUsers();
             }} onChange={(e) => {
              handleChange(e);
                 }}>
                 <option value={user.serviceComplete === 'Yes'  ? 'Yes' : 'No'}>{user.serviceComplete === 'Yes' ? 'Yes' : 'No'} </option>
                 <option value={user.serviceComplete === 'Yes'  ? 'No' : 'Yes'}>{user.serviceComplete === 'Yes' ? 'No' : 'Yes'}</option>
   
                 
                 {/* <option value='yes'>yes</option>
                 <option value='no'>no</option> */}
             </select>
        })
        )  : []
      
       
      
      
      };



    return (
        props.isAdmin ? 
        <div style={{backgroundColor:'white', color:'#009FE4' , textShadow:'.4px .4px 1px black'}}>
            <div style={{textShadow:'.4px .4px 1px black'}}>
            <img src={LogoIcon} style={{width: '10vh', marginBottom: '.5rem', marginTop:'2rem', filter:'drop-shadow(1px 1px 1px black)'}}></img>
            <h3 style={{fontSize:'1.9rem', paddingTop:'3%', color:'#444343', userSelect:'none', marginBottom: '1%', paddingBottom: '1%', borderBottom: 'solid 1px white', backgroundColor: 'white'}} onClick={(e) => getUsers()}>
            All Users</h3>
            </div>


            <div className="" style={{ marginLeft: '10%', marginRight: '10%' }} >
                    
            <MDBDataTable  style={{color: '', textShadow: ''}}
            scrollY
            maxHeight="500px"
            striped
            bordered
            small
            data={data} />


            </div>
        </div>

    :   <div>
        <img style={{ width: '15vh',marginTop: '28vh', filter: 'drop-shadow(1px 1px 2px black)'}} id = 'loadingImg' src ={LoadingGif}></img>
        </div>
    )
}

export default Users