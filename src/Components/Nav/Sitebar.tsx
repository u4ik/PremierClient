import React, { useState } from 'react';


import './Sitebar.css'

import Contact from '../Contact/Contact';


// import Authform from '../Auth/Auth';


import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import Logo from '../../assets/Premier-Commercial-Services-icon.svg';




const logo: React.CSSProperties ={
    height: '5.5vh',
    cursor: 'pointer',
    filter: 'drop-shadow(1px 1px 1px  black)'
}

const navbar: React.CSSProperties ={
    background: '#177BBD',
    alignItems: 'center'
    
}

const logoTitleStyle:React.CSSProperties={
    fontSize: '2.2rem',
    lineHeight:'1.2',
    color:'#E8C10D',
    textShadow:'1px 1px 1px black',
    fontWeight: 400
}



const Sitebar: React.FunctionComponent<{ props?: any }> = ({props}) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const [signedIn, setSignedIn] = useState<boolean>(true);
    const [isAdmin, setIsAdmin] = useState(true);

    const [showContact, setShowContact] = useState<boolean>(false);
    
    const [flexType, setFlexType] = useState<any>()


    const showThatContact= (e:any) => {
        e.preventDefault();
        setShowContact(!showContact)
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

                        <div>
                            <h1 style={logoTitleStyle}>Premier Commercial Services</h1>
                        </div>
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
                           
                                {signedIn === true ? 
                                <NavItem>
                                    <NavLink href="/" className="nav-links">Logout</NavLink>
                                </NavItem>
                                :    <NavItem>
                                <NavLink href="/" className="nav-links">Signup/Login</NavLink>
                                </NavItem>}
                                {isAdmin === true ? 
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