import React, {useState} from 'react';
import './App.css';
import Sitebar from './Components/Nav/Sitebar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Orders from './Components/Orders/Orders'


// import {Switch, Route, BrowserRouter} from 'react-router-dom';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App: React.FunctionComponent = () => {

  const [updateToken, setUpdateToken] = useState<any>('')
  // const [showAuth, setShowAuth] = useState<boolean>(false);
  // const [signup, setSignup] = useState<boolean>(false);
  // const [signedIn, setSignedIn] = useState<boolean>(false);
  // const [isAdmin, setIsAdmin] = useState<boolean>(false);

  return (
    <div className="App" >
      <Router>
        <Sitebar updateToken = {updateToken} setUpdateToken={setUpdateToken}  />


    <Switch>
        <Route path="/" exact component={Home}  />
        <Route path ="/orders" exact render={(props) => (< Orders updateToken = {updateToken}/>)} />
    </Switch>

        <Footer />
      </Router>  




 
    </div>
  );
}




export default App;
