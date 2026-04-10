import React,{useState,useEffect} from "react";
import {Link,useNavigate} from 'react-router-dom';
// TODO: Replace placeholder values with actual student and lab identifiers
const STUDENT_ID = "23WH1A0553";
const LAB_ID = "FSDLAB-2";

function Home() {
  const [Tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://bvritcloud.com/api/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-student-id": "23WH1A0553",
      },
    })
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
      <h1>Stack Track Lab</h1>
      <p>Student ID: {STUDENT_ID}</p>
      <p>Lab ID: {LAB_ID}</p>

      <Link to="/add-task">Add new Task</Link>
      <h2>Tasks List</h2>
      {Tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {Tasks.map((task) => (
            <li key={task._id}>{task.description}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
