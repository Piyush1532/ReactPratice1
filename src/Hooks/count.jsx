import React, { useCallback, useState } from 'react'
import MemoComponent from './memocomponent'
const ParentCount = () => {
    const[count,setcount]=useState(0)
    

    const addCount=()=>{
      setcount(count+1)
      // console.log(" Parentcount component rendered");
    }
// without using callback
//     const changeWord=()=>{
//  return "Fullstack" +count
//     }
   
const changeWord=useCallback(()=>{
return "FullStack"+count
},[count])

  return (
    <div>
      <div className="container">
      <h3 className='my-4 mx-4'>{count}</h3>
        <button onClick={addCount} className='btn btn-primary'>Add</button>
      </div>

      <div className="container my-5">
        <MemoComponent word={"software"} changeWord={changeWord}/>
      </div>


    </div>
  )
}

export default ParentCount