import React, { useState, useCallback, useEffect } from 'react';

function CallBack1() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // Memoizing the increment function using useCallback
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // No dependencies, so the function is only created once

  useEffect(() => {
    if (count % 2 === 0) {
      setMessage('Count is even');
    } else {
      setMessage('Count is odd');
    }
  }, [count]); // Re-run effect only when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <p>{message}</p>
      {/* Passing the memoized increment function to the child component */}
      <ChildComponent increment={increment} />
    </div>
  );
}

function ChildComponent({ increment }) {
  console.log('ChildComponent rendering...');
  return (
    <button onClick={increment}>Increment</button>
  );
}

export default CallBack1;
