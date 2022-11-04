import React from 'react'

const Todo = ({todo,onChangeTick,onDelete}) => {
  return (
    <div className="row">
      <input type="hidden" defaultValue={todo.id}/>
      <button className="deletebtn" onClick={onDelete}>X</button>
      {/* <input type="checkbox" defaultChecked={todo.isdone} onChange={onChangeTick}/> */}
      <p className={todo.isdone ? 'strikethrough' : 'clearthrough'} onClick={onChangeTick}>{todo.item}</p>
      
   </div>
  )
}

export default Todo