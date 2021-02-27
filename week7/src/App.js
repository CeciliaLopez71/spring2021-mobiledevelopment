import logo from './logo.svg';
import './App.css';

import Input from './components/Input.js';
import Reset from './components/Reset.js';
import { Component } from 'react';
import React, { useState } from 'react';


const App = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
      setCount(count + 1 )
    }

    const reset = () => {
      setCount(0)
    }

  
  return (
    <div className="App">
    <h1>Exercise Tracker</h1>
    <div>
      <h1> {count} </h1>
    <Input count = {count} setCount = {setCount}/>
    <Reset count = {count} setCount = {setCount}/>
    </div>
  

    
    </div>

  
    
    
  );
}

export default App;
