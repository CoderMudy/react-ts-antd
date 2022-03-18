import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const App:React.FC = (props)=> {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>你点击了{count}次</p>
      <button onClick={()=>{setCount(count+1)}}>
        click
      </button>
    </div>
  );
}

export default App;
