import React from 'react';
import './App.css';
import Sitebar from './Components/Nav/Sitebar';
import Home from './Components/Home/Home';


const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Sitebar />
      <Home />
    </div>
  );
}

export default App;
