import React, { useEffect, useRef, useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

const incrementCount=()=>{
  setCount(count+1)
  console.log("rendering...");
}   

const updref=()=>{

  countRef.current=countRef.current+1
  console.log("ref rendered")
}





  useEffect(() => {
    

  },[])
  


  return (
    <>
    <div>
      <p>Count (useState): {count}</p>
      <button onClick={incrementCount} className='btn btn-primary'>Add</button>
    </div>

    <div>
      <h4>Count (useRef) : {countRef.current}</h4>
      <button onClick={updref}>Add ref</button>
    </div>
    </>

  );
}

export default MyComponent;
