import React, {useState} from 'react';
import './App.css';
import Sitebar from './Components/Nav/Sitebar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';



const App: React.FunctionComponent = () => {

  // const [updateToken, setUpdateToken] = useState<string>('')
  // const [showAuth, setShowAuth] = useState<boolean>(false);
  // const [signup, setSignup] = useState<boolean>(false);
  // const [signedIn, setSignedIn] = useState<boolean>(false);
  // const [isAdmin, setIsAdmin] = useState<boolean>(false);

  return (
    <div className="App" >
 
      <Sitebar  />
      <Home />

      <Footer />
      
 
    </div>
  );
}

export default App;
