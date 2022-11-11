import React, { useEffect, useState } from "react";
//components
import ToDoList from "./ToDoList";

const App = () => {
  const [data, setData] = useState("");
  const [ toDoList, setToDoList ] = useState(data);
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTodos(data)
        setData(data)
        setToDoList(data)
      })
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <>
    <h1>I am fetching some todos data's</h1>
    return (
   <div className="App">
     <ToDoList toDoList={toDoList}/>
   </div>
 );
</>;
};

export default App;