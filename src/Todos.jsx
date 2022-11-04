import React from 'react'
import Todo from './Todo';
const Todos = ({todos,onChangeTick,onDelete}) => {

    
    const row = todos.map((todo)=><Todo todo={todo} key={todo.id} onChangeTick={onChangeTick} onDelete={onDelete} />
    )
    return(
      <div>
          {row}
      </div>
    )
}

export default Todos