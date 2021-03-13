import logo from './logo.svg';
import './App.css';

import Button from "./components/Button.js"
import About from "./components/About.js"
import Example from './components/Example/Example.js'


function App() {
  return (
   
    <body className="App">

 
      <div>
      <Example/>
       <About/>
       <Button/>

      </div>

      
    </body>
  );
}

export default App;
