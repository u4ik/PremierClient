import React, {useState, useEffect} from 'react';
import './App.css';
import Sitebar from './Components/Nav/Sitebar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Orders from './Components/Orders/Orders'
import TestimonialsPage from './Components/Testimonials/TestimonialsPage'
import ServicesPage from './Components/Services/ServicesPage'
import Users  from './Components/Users/Users'

import {useSpring, animated} from 'react-spring'

import HomeBackground from '../src/assets/Home/home-background.jpg';
// import {Switch, Route, BrowserRouter} from 'react-router-dom';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { propTypes } from 'react-bootstrap/esm/Image';

interface AppProps{

}



const App: React.FunctionComponent<AppProps> = (props:AppProps) => {

  const opacityChange = useSpring({opacity: 1, from : {opacity: 0}})

  const [updateToken, setUpdateToken] = useState<string>('');
  const [enableTestCreate, setEnableTestCreate] = useState<boolean>(false);

  const [currentUserId, setCurrentUserId] = useState()
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [signedIn, setSignedIn] = useState<any>(false);
  const [collapsed, setCollapsed] = useState<boolean>(true);


  useEffect(() => {
    window.scrollTo(0, 0)
  },[])


  return (
    <div className="App" style={{ }}  >

      
    <Router>
      
          <Sitebar collapsed={collapsed} setCollapsed={setCollapsed} currentUserId={currentUserId} setCurrentUserId={setCurrentUserId} signedIn={signedIn} setSignedIn={setSignedIn} isAdmin={isAdmin} setIsAdmin={setIsAdmin} setEnableTestCreate={setEnableTestCreate}  enableTestCreate={enableTestCreate} updateToken = {updateToken} setUpdateToken={setUpdateToken}  />
 
        <div style={{ minHeight: '88.5vh' ,backgroundAttachment:'fixed', backgroundImage: `url(${HomeBackground})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover',}} >
          <Switch>
        <React.Fragment>
              <div onClick={() => {
          setCollapsed(true)
        }}>
              <Route path="/" exact render={(props) => ( <Home collapsed={collapsed} setCollapsed={setCollapsed}  isAdmin ={isAdmin} signedIn={signedIn}/>)}/>
              </div>
              <animated.div style={opacityChange}>
              <div onClick={() => {
                setCollapsed(true)
              }}>
              <Route path ="/orders" exact render={(props) => (< Orders isAdmin ={isAdmin}  signedIn={signedIn} setSignedIn={setSignedIn} updateToken = {updateToken}/>)} />
                </div>
                <div onClick={() => {
                setCollapsed(true)
              }}>
                <Route path ="/testimonials" exact render={(props) => (<TestimonialsPage isAdmin={isAdmin} enableTestCreate={enableTestCreate} updateToken={updateToken}/>)}/>
 
               </div>
               <div onClick={() => {
                setCollapsed(true)
              }}>
                <Route path ="/services" exact render={(props) => ( <ServicesPage isAdmin ={isAdmin} signedIn={signedIn}/>)}/>
              </div>
              <div onClick={() => {
                setCollapsed(true)
              }}>
              <Route path ="/users" exact render={(props) => (<Users updateToken={updateToken} isAdmin={isAdmin} signedIn={signedIn}/>)}/>
              </div>
              </animated.div>

              </React.Fragment>

          </Switch>
        </div>
    </Router>  
    <div onClick={() => {
                setCollapsed(true)
              }}>
    <Footer isAdmin = {isAdmin}/>
    </div>
    </div>

   

  );
}




export default App;
