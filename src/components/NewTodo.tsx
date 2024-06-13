import { useRef } from "react";
import classes from './New.module.css'

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandle = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current?.value;
    
    if (!enteredText || enteredText.trim().length === 0) {
      // Error handling
      return;
    }
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandle} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" ref={todoTextInputRef}></input>
      <button type="submit">Add</button>
    </form>
  );
};
export default NewTodo;
