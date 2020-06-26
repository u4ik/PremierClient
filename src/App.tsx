import React from 'react';
import './App.css';
import Sitebar from './Components/Nav/Sitebar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import AuthForm from './Components/Auth/Auth'


const App: React.FunctionComponent = () => {
  return (
    <div className="App" >
 
      <Sitebar />
      <Home />
      {/* <AuthForm/> */}

      <Footer />
      
 
    </div>
  );
}

export default App;
