import React from 'react'

const TodoList = (props) => {
    let {todoList}=props
  return (
    <div>
        <h1 className='text-center'>todolist</h1>
        
        {todoList.map((value,index)=>{
return <h1 key={index} className=' list'>{value.name}</h1>
      })}
      

        </div>
  )
}

export default TodoList