import React from 'react'

const TodoInput = (props) => {
    console.log(props)

    let {text,inpchange,savetodo}=props
  return (
    
    <div>
        <h1>TodoInput</h1>
       

        <input type="text" className='col-lg-5' value={text} onChange={inpchange}  />
        <button onClick={savetodo} className='btn btn-primary'>Addtodo</button>
    </div>
  )
}

export default TodoInput