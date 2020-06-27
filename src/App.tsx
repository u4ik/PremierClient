import React, {useState} from 'react';
import './App.css';
import Sitebar from './Components/Nav/Sitebar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import AuthForm from './Components/Auth/Auth'


const App: React.FunctionComponent = () => {

  const [updateToken, setUpdateToken] = useState<string>('')
  const [showAuth, setShowAuth] = useState<boolean>(false);
  const [signup, setSignup] = useState<boolean>(false);
  const [signedIn, setSignedIn] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <div className="App" >
 
      <Sitebar signedIn={signedIn} setSignedIn={setSignedIn} showAuth={showAuth} setShowAuth={setShowAuth} 
      updateToken={updateToken} setUpdateToken={setUpdateToken}  signup={signup} setSignup={setSignup} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>
      <Home />

      <Footer />
      
 
    </div>
  );
}

export default App;
