import React from 'react'
import Todos from '../models/Todos';
import TodoItem from './TodoItem';
import classes from './Todos.module.css'


 const Todo:React.FC<{item:Todos[]}> = (props)=>{
  return(
    <ul className={classes.todos}>{props.item.map((items)=><TodoItem key={items.id} text={items.text}
    />)}</ul>
  )
}
export default Todo;
