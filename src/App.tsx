import React, {useState} from 'react';
import './App.css';
import Sitebar from './Components/Nav/Sitebar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Orders from './Components/Orders/Orders'
import TestimonialsPage from './Components/Testimonials/TestimonialsPage'
import ServicesPage from './Components/Services/ServicesPage'


// import {Switch, Route, BrowserRouter} from 'react-router-dom';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App: React.FunctionComponent = () => {

  const [updateToken, setUpdateToken] = useState<string>('');
  const [enableTestCreate, setEnableTestCreate] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  return (
    <div className="App" style={{ }}  >

      
      <Router>
        <Sitebar isAdmin={isAdmin} setIsAdmin={setIsAdmin} setEnableTestCreate={setEnableTestCreate}  enableTestCreate={enableTestCreate} updateToken = {updateToken} setUpdateToken={setUpdateToken}  />

    <div style={{ minHeight: '80vh', backgroundColor: '#009FE4'}}>
      <Switch>
          <Route path="/" exact component={Home}  />
          <Route path ="/orders" exact render={(props) => (< Orders updateToken = {updateToken}/>)} />
          <Route path ="/testimonials" exact render={(props) => (<TestimonialsPage  enableTestCreate={enableTestCreate}/>)}/>
          <Route path ="/services" exact component= {ServicesPage}/>
      </Switch>
    </div>

        <Footer />
      </Router>  




 
    </div>
  );
}




export default App;
