import React from 'react'
import { memo } from 'react';
const MemoComponent = ({word,changeWord}) => {
  console.log("Memocomponent rendered");
  return (
    <div>
        <p>I am a {word} devloper</p> 
        <button className='btn btn-success' onClick={()=>{changeWord()}}>Change</button>
        <h4>{changeWord()}</h4>
    </div>
  )
}

export default memo(MemoComponent)