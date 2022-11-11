import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState("");
  const fetchData = async () => {
    const api = await fetch("https://jsonplaceholder.typicode.com/todos/");
    setData(await api.json());
  };
  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);
  return <>
    <h1>I am fetching some todos data's</h1>
    <h2>{data.title}</h2>
    <h2>{data.completed}</h2>
</>;
};

export default App;