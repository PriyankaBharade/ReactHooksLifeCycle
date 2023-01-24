import { useState,useEffect } from "react";
import Child from "./Child";
function App() {
  const [count,setCount]= useState(0);
  useEffect(()=>{
    document.title = "count is "+ count;
  },[count===3])
  return (
    <div className="App">
      <h1>Use Lifecycle Hooks in Functional Component</h1>
      <Child count={count}/>
      <button onClick={()=>{
        setCount(count+1)
      }}>Click Me {count}</button>
    </div>
  );
}

export default App;
