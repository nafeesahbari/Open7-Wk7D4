import { useState } from "react";

function Form() {
  // controlled inputs use state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    const newTodo = {
      title,
      description,
      time
    }

    // instead of setting the data array, we are going to make a POST request to our back-end server

    // re-fetch data 
    fetchTodos();
    setTitle("");
    setDescription("");
    setTime("");
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
