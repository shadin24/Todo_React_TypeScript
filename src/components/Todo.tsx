import React from 'react'
import Todos from '../models/Todos';
import TodoItem from './TodoItem';


 const Todo:React.FC<{item:Todos[]}> = (props)=>{
  return(
    <ul >{props.item.map((items)=><TodoItem key={items.id} text={items.text}
    />)}</ul>
  )
}
export default Todo;
