import React, { useState } from 'react';
import AuthForm from '../Auth/Auth';


import './Sitebar.css'

import Contact from '../Contact/Contact';

import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import Logo from '../../assets/Premier-Commercial-Services-logo.svg';




const logo: React.CSSProperties ={
    // height: '8vh',
    width: '100%',
    height: 'auto',
    cursor: 'pointer',
    filter: 'drop-shadow(1px 1px 1px  #024160)'
}

const navbar: React.CSSProperties ={
    background: '#177BBD',
    alignItems: 'center'
    
}

const logoTitleStyle:React.CSSProperties={
    fontSize: '2.2rem',
    lineHeight:'1.2',
    color:'#E8C10D',
    textShadow:'2px 2px 1px black',
    fontWeight: 400
}

interface siteBarProps{
    signedIn: boolean
    setSignedIn: any
    signup: boolean
    setSignup: any
    showAuth: any
    setShowAuth: any
    updateToken: any
    setUpdateToken: any
    isAdmin: boolean
    setIsAdmin: any
}

const Sitebar: React.FunctionComponent<siteBarProps> = (props:siteBarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const [isAdmin, setIsAdmin] = useState(false);

    const [showContact, setShowContact] = useState<boolean>(false);
    
    const [flexType, setFlexType] = useState<any>()


    const showThatContact= (e:any) => {
        e.preventDefault();
        setShowContact(!showContact)
    }

    const showThatAuth = (e: any) =>{
        e.preventDefault();
        props.setShowAuth(!props.showAuth)
    }


        return (
            <div >
                <Navbar color="faded" light expand='lg' style={navbar}>

                    <div style={{
                        display: 'flex',
                        flexDirection:'row'
                    }}>
                        <div>
                            <img alt = 'Premier Commercial Services Logo'src={Logo} style={logo} />
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
                                textAlign: 'right'
                            }} >

                                <Contact setShowContact={setShowContact} showContact ={showContact} />   
                                <AuthForm updateToken={props.updateToken} setUpdateToken={props.setUpdateToken}  showAuth={props.showAuth} setShowAuth={props.setShowAuth} signup={props.signup} setSignup={props.setSignup}/>    

                                <NavItem >
                                    <NavLink href="/" className="nav-links">Home</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/" className="nav-links">Services</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/" className="nav-links">Testimonials</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/" className="nav-links" onClick={(e:any) => {
                                        showThatContact(e);
                                    }} 
                                    >Contact Us</NavLink>
                                </NavItem>
                           
                                {props.signedIn === true ? 
                                <NavItem>
                                    <NavLink href="/" className="nav-links">My Orders</NavLink>
                                </NavItem>
                                : null}
                                {props.signedIn === true ? 
                                <NavItem>
                                    <NavLink href="/" className="nav-links" onClick={props.setSignedIn(false)}>Logout</NavLink>
                                </NavItem>
                                :    <NavItem>
                                <NavLink href="/" className="nav-links" onClick={(e: any) => showThatAuth(e)}>Signup/Login</NavLink>
                                </NavItem>}
                                {props.isAdmin === true ? 
                                <NavItem>
                                <NavLink href="/" className="nav-links">All Orders</NavLink>
                                 </NavItem> : null}


                            </div>
                            </Nav>
        
                    </Collapse>
                        
                </Navbar>
            </div>

    )
}

export default Sitebar;