import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import ProgressTracker from "./components/ProgressTracker"

import { useEffect, useState } from 'react'
 
export default function App() {
    
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    });



    const addTask = (task) => {
        setTasks([...tasks,task]);
    }
  return (
    <div>
        <header>
      <h1>Task Board</h1>
      <p><i>Your friendly Task Manager</i></p>
      </header>
      <TaskForm addTask = {addTask}/>
      <TaskList/>
      <ProgressTracker/>
      <button>Clear All Tasks</button>
    </div>
  )
}
