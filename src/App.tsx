
import Todo from "./components/Todo";
import Todos from "./models/Todos";



function App() {

  const todos=[new Todos('Learn Todo'),new Todos('Learn Typescript')]
  return <>
  <Todo item={todos}/>
  </>
}

export default App;
