import { useEffect } from "react";
export default function Child(props) {
  useEffect(()=>{
    console.warn(props)
  })
  return (
    <div className="App">
      <h1>Child Component</h1>
       <h2>{props.count}</h2>
    </div>
  );
}
