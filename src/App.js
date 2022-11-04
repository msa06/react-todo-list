import "./App.css";
import InputComponent from "./InputComponent";
import Todos from "./Todos";
import { useState } from "react";

function App({ todolist }) {
  const [todoName, setTodoName] = useState("");
  const [keyvalue, setKeyValue] = useState(3);
  const [todos, setTodos] = useState(todolist);

  const onChangeTodo = (e) => {
    let changevalue = e.target.value;

    setTodoName(changevalue);
  };
  const onTodoSubmit = (e) => {
    e.preventDefault();

    const newelement = { id: keyvalue, item: todoName, isdone: false };

    setTodos((prevstate) => [...prevstate, newelement]);
    setKeyValue((prevstate) => prevstate + 1);
    setTodoName("");
  };

  const onChangeTick = (e) => {
    const id = e.target.parentNode.firstChild.value;
    const newtodos = [...todos];
    const selected = newtodos[id];
    console.log(selected);
    selected["isdone"] = !selected.isdone;
    newtodos[id] = selected;
    setTodos(newtodos);
  };

  const onDelete = (e) => {
    console.log("Call");
    e.preventDefault();
    const sid = e.target.parentNode.firstChild.value;
    let newtodos = [...todos];
    console.log("id: " + sid);
    newtodos = newtodos.filter((todo) => todo.id !== sid);
    console.log(newtodos);
    setTodos(newtodos);
  };

  return (
    <div className="App">
      <h1>List Your Shit Down</h1>
      <InputComponent
        todoName={todoName}
        onChangeTodo={onChangeTodo}
        onTodoSubmit={onTodoSubmit}
      />
      <Todos todos={todos} onChangeTick={onChangeTick} onDelete={onDelete} />
    </div>
  );
}

export default App;
