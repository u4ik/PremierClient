import React, {useState} from 'react';
import './App.css';
import Sitebar from './Components/Nav/Sitebar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Orders from './Components/Orders/Orders'


const App: React.FunctionComponent = () => {

  const [updateToken, setUpdateToken] = useState<any>('')
  // const [showAuth, setShowAuth] = useState<boolean>(false);
  // const [signup, setSignup] = useState<boolean>(false);
  // const [signedIn, setSignedIn] = useState<boolean>(false);
  // const [isAdmin, setIsAdmin] = useState<boolean>(false);

  return (
    <div className="App" >
 
      <Sitebar updateToken = {updateToken} setUpdateToken={setUpdateToken}  />

      <Orders updateToken = {updateToken} />
      {/* <Home  /> */}

      <Footer />
      
 
    </div>
  );
}

export default App;
