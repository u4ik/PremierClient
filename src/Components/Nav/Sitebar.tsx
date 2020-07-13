import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'


import AuthForm from '../Auth/Auth';


import './Sitebar.css'

import Contact from '../Contact/Contact';

import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import Logo from '../../assets/Premier-Commercial-Services-logo.svg';





const logo: React.CSSProperties ={
    // height: '8vh',
    width: '100%',
    height: 'auto',
    // cursor: 'pointer',
    filter: 'drop-shadow(1px 1px 1px  #024160)'
}

const navbar: React.CSSProperties ={
    background: '#177BBD',
    alignItems: 'center',
    
    
}

// const logoTitleStyle:React.CSSProperties={
//     fontSize: '2.2rem',
//     lineHeight:'1.2',
//     color:'#E8C10D',
//     textShadow:'2px 2px 1px black',
//     fontWeight: 400
// }

interface siteBarProps{
    signedIn: any
    setSignedIn: any
    // signup: boolean
    // setSignup: any
    // showAuth: any
    // setShowAuth: any
    updateToken: string
    setUpdateToken: any

    enableTestCreate: boolean
    setEnableTestCreate: any
    isAdmin: any
    setIsAdmin: any
}





const Sitebar: React.FunctionComponent<siteBarProps> = (props:siteBarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
 

    const [showContact, setShowContact] = useState<boolean>(false);
    
    const [flexType, setFlexType] = useState<any>()



 
    const [showAuth, setShowAuth] = useState<boolean>(false);
    const [signup, setSignup] = useState<boolean>(false);




    const [userData, setUserData] = useState<any>()

    const [currentUserId, setCurrentUserId] = useState<any>()

    
    const [currentUser, setCurrentUser] = useState('')



    //TESTING SHIT OUT HERE
    const isServiceComplete = (userdata:any) => {
        console.log(userdata.ID)
        setCurrentUserId(userdata.ID)
        console.log(currentUserId)

        // fetch('http://localhost:3000/user' + "/" + userdata.ID)
        // .then(res => res.json())
        // .then(userget => {
        //     console.log(userget)
        // })
    }
    //     useEffect(() => {

    //     isServiceComplete(userdata);

    //     })


    const updateTheToken = (newToken:any, user:any, admin:any,  serviceComplete:any) =>{
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', user);
        localStorage.setItem('admin', admin);
        localStorage.setItem('serviceComplete', serviceComplete);
        // setCurrentUser(user);
        // console.log(userData)
        // console.log(newToken)
        props.setUpdateToken(newToken);

        if(localStorage.getItem('admin') === 'Account is Admin'){
            props.setIsAdmin(true)
        } else if (localStorage.getItem('admin') === 'Negative'){
            props.setIsAdmin(false)
        }


   
        props.setSignedIn(true);
      
        setShowAuth(false)
      };
    
      const logOut = () => {
        props.setSignedIn(false);
        props.setUpdateToken('');
        localStorage.removeItem('token')
    
      }
    
      useEffect(() => {
        
        if(localStorage.getItem('token')){
          updateTheToken(localStorage.getItem('token'),localStorage.getItem('user'),localStorage.getItem('admin'),localStorage.getItem('service'));

        }


        
      },[])

   




    const showThatContact= (e:any) => {
        e.preventDefault();
        setShowContact(!showContact)
    }

    const showThatAuth = (e: any) =>{
        e.preventDefault();
        setShowAuth(!showAuth)
    }


        return (
            <div id="titleId" >
                <Navbar color="faded" light expand='lg' fixed='top' style={navbar}>

                    <div style={{
                        display: 'flex',
                        flexDirection:'row'
                    }}>
                        <div>
                            <img alt = 'Premier Commercial Services Logo' src={Logo} style={logo} />
                        </div>

                        {/* <div>
                            <h1 style={logoTitleStyle}>Premier Commercial Services</h1>
                        </div> */}
                        <div>


                        </div>
                    </div>
                    <NavbarToggler onClick={(e) => {

                        collapsed===true ? setFlexType('column'): setFlexType('row')

                        toggleNavbar()}} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav>
                            <div id = 'navlinkwrap' style={{

                                display: 'flex',
                                flexDirection: flexType,
                                justifyContent: 'center',
                                float: 'right',
                                textAlign: 'right',
                            }} >


                            {/* CONTACT COMPONENT/MODAL */}
                                <Contact setShowContact={setShowContact} showContact ={showContact} />   

                            {/* AUTHFORM COMPONENT/MODAL */}
                                <AuthForm isAdmin={props.isAdmin} setIsAdmin={props.setIsAdmin} userData={userData} setUserData={setUserData} isServiceComplete={isServiceComplete} setCurrentUserId={setCurrentUserId} currentUserId={currentUserId} enableTestCreate={props.enableTestCreate}  setEnableTestCreate={props.setEnableTestCreate} updateTheToken={updateTheToken} signedIn = {props.signedIn}  setSignedIn = {props.setSignedIn}  updateToken={props.updateToken} setUpdateToken={props.setUpdateToken}  showAuth={showAuth} setShowAuth={setShowAuth} signup={signup} setSignup={setSignup}/>    

                                <NavItem >
                                    <Link  className="nav-links" to ="/">
                                    <NavLink  className="nav-links" href="">Home</NavLink>
                                    </Link>
                                </NavItem>

                                <NavItem>
                                <Link  className="nav-links" to ="/services">
                                    <NavLink  className="nav-links" href="">Services</NavLink>
                                    </Link>
                                </NavItem>

                                <NavItem>
                                <Link  className="nav-links" to ="/testimonials">
                                    <NavLink  className="nav-links" href="">Testimonials</NavLink>
                                </Link>
                                </NavItem>

                                <NavItem>
                                <Link  className="nav-links" to ="/contact">
                                    <NavLink href="/" className="nav-links" onClick={(e:any) => {
                                        showThatContact(e);
                                    }} 
                                    >Contact Us</NavLink>
                                    </Link>
                                </NavItem>
                           
                                {props.signedIn === true && props.isAdmin === false ? 
                                
                                <NavItem>
                                    <Link  className="nav-links" to ="/orders">
                                    <NavLink  className="nav-links" href="">My Orders</NavLink>
                                </Link>
                                </NavItem>
                                : null}
                                {props.signedIn === true ? 
                                <NavItem>
                                    <NavLink href="/" className="nav-links" onClick={(e: any) => {logOut()}}>Logout</NavLink>
                                </NavItem>
                                :    <NavItem>
                                <NavLink href="/" className="nav-links" onClick={(e: any) => showThatAuth(e)}>Signup/Login</NavLink>
                                </NavItem>}
                                {props.isAdmin === true ? 
                                <NavItem>
                                    <Link className="nav-links" to= "/orders">
                                <NavLink href="" className="nav-links">All Orders</NavLink>
                                </Link>
                                 </NavItem> : null}


                            </div>
                            </Nav>
        
                    </Collapse>
                     
                </Navbar>
            </div>

    )
}

export default Sitebar;