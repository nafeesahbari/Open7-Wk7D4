import { useState, useEffect } from "react";
import ListItem from "./components/ListItem.jsx";
import Form from "./components/Form.jsx";
import "./App.css";

function App() {
  // data no longer hard coded - getting this from our backend API
  const [data, setData] = useState([]);

  const [isTodoListVisible, setIsTodoListVisible] = useState(false);

  const [numberOfRenders, setNumberOfRenders] = useState(1);
  // define function to fetch todos from API - explore back-end folder to figure out what route to call
  async function fetchTodos() {
    const response = await fetch('http://localhost:3000/todo');
    const todos = await response.json();
    setData(todos);
  }

  // run function to fetch todos inside the useEffect and set the data in state (why inside the useEffect and not outside of it?)
  useEffect(() => {
    fetchTodos();
  }, [data])

  return (
    <div className="App">
      {!isTodoListVisible ? (
        <button onClick={() => setIsTodoListVisible(true)}>
          Show Todo List
        </button>
      ) : (
        <h1>Todo List</h1>
      )}
      <Form 
        numberOfRenders={numberOfRenders} 
        setNumberOfRenders={setNumberOfRenders}
      />
      {isTodoListVisible && (
        <ol>
          {data.map((itemObj, index) => (
            <ListItem
              key={index}
              title={itemObj.title}
              description={itemObj.description}
              time={itemObj.time}
            />
          ))}
          <button onClick={() => setIsTodoListVisible(false)}>
            Hide Todo List
          </button>
        </ol>
      )}
    </div>
  );
}

export default App;