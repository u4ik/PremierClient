import React, {useState, useEffect} from 'react'
import {Container, Table, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { MDBDataTable, MDBBtn } from 'mdbreact';

import LoadingGif from '../../assets/Premier-Commercial-Services-icon.svg'
import APIURL from '../../helpers/environment';
import LogoIcon from '../../assets/Premier-Commercial-Services-icon.svg'
import DeleteArrow from '../../assets/deletearrow.svg'
import DeleteUser from '../Users/DeleteUser'

import {Spring, animated} from 'react-spring/renderprops'

interface UserProps  {
    updateToken: string
    isAdmin: any
    signedIn: any
}



const Users:React.FunctionComponent<UserProps> = (props:UserProps)  => {

    const [userData, setUserData] = useState<any>([])
    const [userId, setUserId] =useState<any>()
    const [serviceComplete, setServiceComplete] = useState<any>()

    const [showDelete, setShowDelete] =useState<boolean>(false)
    const [userErrorText, setUserErrorText] = useState<string>('')
    const [userName, setUserName] = useState('')


    const deleteArrowStyle={
        width:'2vw',
        filter:'drop-shadow(.1px .1px .2px black)',
        opacity: .7
      }



    const getUsers = () => {
        let token = localStorage.getItem('token')
        fetch(`${APIURL}/user/all`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : token!
            }
        }).then(res => res.json())
        .then(userStuff => {
                // console.log(userStuff)
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
        window.scrollTo(0, 0)
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
        fetch(`${APIURL}/user/edit/` + userId, {
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
            label: 'Name',
            field: 'name' ,
            sort: 'asc',
            width: 100
          },
      
          {
            label: 'Email',
            field: 'email',
            sort: 'asc',
            width: 250
          },
          {
            label: 'Location',
            field: "location",
            sort: 'asc',
            width: 150
          },
          {
            label: 'Phone #',
            field: 'phoneNumber',
            sort: 'asc',
            width: 120
          },
          {
            label: 'Complete',
            field: 'serviceComplete',
            sort: 'asc',
            width: 110
            
          },
          {
            label: 'X',
            field: 'deleteUser',
            sort: 'asc',
            width: 60
            
          },      
        ],
        
        rows: 

        
        
        userData ? userData.map((user: any) => ({
          ...user,
            name: user.firstName + ' '+user.lastName ,
            deleteUser: <img style={deleteArrowStyle}src={DeleteArrow} onClick={(e) => {
                // console.log(user.id);
                setUserId(user.id);
                setUserName(user.firstName +" "+ user.lastName);
                setShowDelete(true);
                setUserErrorText('')
            }}></img>,
          serviceComplete:  <select style = {{outline:'none', border:'none', backgroundColor:'transparent'}} value={user.serviceComplete} name="name" id=""  onClick={() => {
            // console.log(user.id);
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
        <div style={{backgroundColor:'white', color:'#009FE4' , textShadow:'.4px .4px 1px black', minHeight:'89vh'}}>
            <div style={{textShadow:'.4px .4px 1px black'}}>
            <Spring
                            config={{duration: 600}} 
                            native
                            from={{ o: 0, }}
                            to={{ o: 1 }} 
                            >
                            {({ o }) => (
                            <animated.div style={{
                                    opacity: o,
                                  
                                    
                            }}>
            
            <img src={LogoIcon} style={{width: '10vh', marginBottom: '.5rem', marginTop:'7%', filter:'drop-shadow(2px 2px 1px black)'}}></img>
            </animated.div>
                            )}
                    </Spring>
         
                    <Spring
                            config={{duration: 600, delay: 400}} 
                            native
                            from={{ o: 0, marginT: '' }}
                            to={{ o: 1, marginT: ''  }} 
                            >
                            {({ o, marginT }) => (
                            <animated.div style={{
                                    opacity: o,
                                    marginTop: marginT
                                    
                            }}>
            <h3 style={{fontSize:'2.2rem', paddingTop:'3%', textShadow:'0.5px 0.5px 0.5px black', color:'#177BBD', userSelect:'none', marginBottom: '1%', paddingBottom: '1%', borderBottom: 'solid 1px white', backgroundColor: 'white'}} onClick={(e) => getUsers()}>
            All Users</h3>
                        <p>{userErrorText}</p>
            </animated.div>
                            )}
                    </Spring>

            </div>


            <div className="" style={{ marginLeft: '', marginRight: '' }} >
                <Container>
                    
          <Spring
                          config={{duration: 600, delay:600}} 
                          native
                          from={{ o: 0, marginT: '' }}
                          to={{ o: 1, marginT: ''  }} 
                          >
                          {({ o, marginT }) => (
                          <animated.div style={{
                                  opacity: o,
                                  marginTop: marginT
                                  
                          }}>
            <MDBDataTable  style={{color: '', textShadow: ''}}
            scrollY
            maxHeight="500px"
            striped
            bordered
            small
            data={data} />
            </animated.div>
            )}
            </Spring> 
                </Container>
            </div>
            <DeleteUser userName={userName}  userErrorText = {userErrorText} setUserErrorText={setUserErrorText} updateToken={props.updateToken} setShowDelete={setShowDelete} showDelete ={showDelete} userId={userId} getUsers={getUsers} />
        </div>

    :   <div>
        <img style={{ width: '15vh',marginBottom: '50vh',marginTop: '28vh', filter: 'drop-shadow(2px 2px 2px black)'}} id = 'loadingImg' src ={LoadingGif}></img>
        </div>
    )
}

export default Users