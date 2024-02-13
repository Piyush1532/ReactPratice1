import React from 'react'

const TodoList = (props) => {
    let {todoList}=props
  return (
    <div>
        <h1 className='text-center'>todolist</h1>
        <h2>hello world Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, doloribus ut molestiae, iure nemo accusamus, animi doloremque fugiat nobis possimus at. Ut quas quo impedit ad voluptatum quaerat modi mollitia.</h2>
        {todoList.map((value,index)=>{
return <h1 key={index} className=' list'>{value.name}</h1>
      })}
      

        </div>
  )
}

export default TodoList