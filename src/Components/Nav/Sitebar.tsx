import React, { useState } from 'react';

import './Sitebar.css'
// import Authform from '../Auth/Auth';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import Logo from '../../assets/Premier-Commercial-Services-logo.svg';
// import MediaQuery from 'react-responsive';


// const container: React.C
const logo: React.CSSProperties ={
    height: '5.5vh',
    cursor: 'pointer'
}

const navbar: React.CSSProperties ={
    background: '#177BBD',
    alignItems: 'center'
    
}



const Sitebar: React.FunctionComponent<{ props?: any }> = ({props}) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const [signedIn, setSignedIn] = useState(true);
    const [isAdmin, setIsAdmin] = useState(true);
    const [flexType, setFlexType] = useState<any>('row')

        return (
            <div >
                <Navbar color="faded" light expand='lg' style={navbar}>
                    <img src={Logo} style={logo} />
                    <NavbarToggler onClick={(e) => {
                        {collapsed===true ? setFlexType('column'): setFlexType('row')}
                        toggleNavbar()}} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav>
                            
                            <div className='navlinkWrap' style={{
                                display: 'flex',
                                flexDirection: flexType,
                                justifyContent: 'center',
                                float: 'right',
                                textAlign: 'right'
                            }} >
                            
                     
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
                                    <NavLink href="/" className="nav-links">Contact Us</NavLink>
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


                                {/* <NavItem>
                                    {signedIn?
                                        <Authform/>
                                        : <></>
                                    }
                                </NavItem> */}
                            </div>

                        </Nav>
        
                    </Collapse>
                    
                </Navbar>
            </div>

    )
}

export default Sitebar;