import React, { useState, useMemo } from 'react';

const MemoPractice = () => {
  const [count, setCount] = useState(0);

  const [inputValue, setInputValue] = useState('');

  const expensiveComputation = (count) => {
    console.log('Performing expensive computation...');
    // Simulating an expensive computation by calculating the factorial of the count
    let result = 1;
    for (let i = 1; i <= count; i++) {
      result *= i;
    }
    return result;
  };

  const uppercaseValue = useMemo(() => {
    console.log('Calculating uppercase value...');
    return inputValue.toUpperCase();
  }, [inputValue]);


  // Memoize the result of the expensive computation
  const memoizedResult = useMemo(() => expensiveComputation(count), [count]);
  return (
    <>
       <div>
       <div>
      <h1>Expensive Component</h1>
      <p>Count: {count}</p>
      <p>Result of Expensive Computation: {memoizedResult}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
    </div>

    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Uppercase Value: {uppercaseValue}</p>
    </div>
    </>
 
  )
}

export default MemoPractice