import React, {useState} from 'react';
import './App.css';
import Sitebar from './Components/Nav/Sitebar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Orders from './Components/Orders/Orders'
import TestimonialsPage from './Components/Testimonials/TestimonialsPage'
import ServicesPage from './Components/Services/ServicesPage'
import Users  from './Components/Users/Users'


// import {Switch, Route, BrowserRouter} from 'react-router-dom';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App: React.FunctionComponent = () => {

  const [updateToken, setUpdateToken] = useState<string>('');
  const [enableTestCreate, setEnableTestCreate] = useState<boolean>(false);

  const [currentUserId, setCurrentUserId] = useState()
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [signedIn, setSignedIn] = useState<any>(false);



  return (
    <div className="App" style={{ }}  >

      
      <Router>
        <Sitebar currentUserId={currentUserId} setCurrentUserId={setCurrentUserId} signedIn={signedIn} setSignedIn={setSignedIn} isAdmin={isAdmin} setIsAdmin={setIsAdmin} setEnableTestCreate={setEnableTestCreate}  enableTestCreate={enableTestCreate} updateToken = {updateToken} setUpdateToken={setUpdateToken}  />

    <div style={{ minHeight: '80vh', backgroundColor: '#f9f9f9'}}>
      <Switch>
          <Route path="/" exact component={Home}  />
          <Route path ="/orders" exact render={(props) => (< Orders isAdmin ={isAdmin}  signedIn={signedIn} setSignedIn={setSignedIn} updateToken = {updateToken}/>)} />
          <Route path ="/testimonials" exact render={(props) => (<TestimonialsPage isAdmin={isAdmin} enableTestCreate={enableTestCreate} updateToken={updateToken}/>)}/>
          <Route path ="/services" exact component= {ServicesPage}/>
          <Route path ="/users" exact render={(props) => (<Users updateToken={updateToken}/>)}/>
      </Switch>
    </div>

        <Footer />
      </Router>  




 
    </div>
  );
}




export default App;
