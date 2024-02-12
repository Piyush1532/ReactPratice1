import React, { useState } from 'react'

const Todoapp1 = () => {
    const [text, settext] = useState('')
    const [todolist, settodolist] = useState([])
  
const addtodo=()=>{
  let newtodo={
    name:text,
    key:1
  }
    let _todolist=[...todolist]
   _todolist.push(newtodo)
   settodolist(_todolist)
  settext('')
  console.log(_todolist)
}
let inputchange=(evt)=>{
settext(evt.target.value)
console.log()
}
  return (
    <div>
        hello

        <input type="text"  value={text} onChange={inputchange} />
        <button onClick={addtodo}>Addtodo</button>
    
    <ul>
      {todolist.map((value,index)=>{
return <li key={index}>{value.name}</li>
      })}
    </ul>
    </div>
  )
}

export default Todoapp1