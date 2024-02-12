import React from 'react'

const Todoapp = () => {
    const [text, settext] = useState('')
    const [todo, settodo] = useState([])
  
    let addtodo=()=>{
          let _newtodo={
            name:text
          }

          let newtodolist=[...todo]
          newtodolist.push(_newtodo)
          settodo(newtodolist)
          settodo("")
    }
let inputchange=(evt)=>{
settext(evt.target.value)
}
  return (
    <div>
        <input type="text" onChange={inputchange} value={text} />
        <button onClick={addtodo}>Addtodo</button>
    </div>
  )
}

export default Todoapp