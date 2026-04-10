import React from "react";

// TODO: Import any API functions you need from '../../api/client'
// Example: import { get, post } from '../../api/client';
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function QuestionComponent() {
  // TODO: Define state variables needed for your question set
  const navigate = useNavigate();
  const [Tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  // TODO: Implement data fetching inside a useEffect hook
  useEffect(() => {
    fetch("http://bvritcloud.com/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-student-id": "23WH1A0553",
      },
    })
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.log(err));
  }, []);

  // TODO: Implement any event handlers required by your question set
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = { title, description, status };
    fetch("http://bvritcloud.com/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-student-id": "23WH1A0553",
      },
      body: JSON.stringify(newTask),
    })
      .then(res => res.json())
      .then(data => {
        //setTasks([...Tasks, data]); 
        setTitle("");
        setDescription("");
        setStatus("pending");
        //navigate("/");
      })
      .catch(err => console.error("error:",err));
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>

          <button type="submit">Add Task</button>
        </form>
        <Link to="/">Back to Home</Link>
      {/* TODO: Render fetched data or form elements as required */}
    </div>
  );
}

export default QuestionComponent;
