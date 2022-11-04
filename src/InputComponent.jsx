import React from 'react'

const InputComponent = ({todoName,onChangeTodo,onTodoSubmit}) => {
  return (
    <div>
      <form onSubmit={onTodoSubmit}>
        <input type="text" value={todoName} onChange={onChangeTodo} placeholder="Enter your shit"/>
          <button className="submitbtn" type="submit">Sure?</button>
      </form>
   </div>
  )
}

export default InputComponent