import React, { useEffect, useRef, useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  useEffect(() => {


 
  },[incrementCount])
  


  return (
    <div>
      <p>Count (useState): {count}</p>
      <p>Count (useRef): {countRef.current}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default MyComponent;
