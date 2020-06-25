import React from 'react';
import './App.css';
import Sitebar from './Components/Nav/Sitebar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';


const App: React.FunctionComponent = () => {
  return (
    <div className="App" >
 
      <Sitebar />
      <Home />
      <Footer />
      
 
    </div>
  );
}

export default App;
