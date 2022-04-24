import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter,setCounter]= useState(0)
   const increaseCounter = (payload)=>{
     setCounter(counter+payload)

   }




  return (
    <div className="App">
      <div classname="counterapp">
        <p>The value of the counter is {counter} </p>
        <button onClick={()=>increaseCounter(1)}>
          Increase the counter by 1
        </button>
        <button onClick={()=>increaseCounter(5)}>
          Increase the counter by 5
        </button>
        <button onClick={()=>increaseCounter(8)}>
          Increase the counter by 8
        </button>
        
      </div>
    </div>
  );
}

export default App;
