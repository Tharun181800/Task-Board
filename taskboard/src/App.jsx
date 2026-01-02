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
        setTasks([...tasks, task]);
    }

    const updateTask = (updatedTask,  index) => {
      const newTask = [...tasks];
      newTask[index] = updatedTask
      setTasks(newTask);
    }

    const deleteTask = (index) => {
      setTasks(tasks.filter((_, i) => i != index ))
    }

    const clearTasks = () => {
      setTasks([]);
    }

  return (
    <div>
        <header>
      <h1>Task Board</h1>
      <p><i>Your friendly Task Manager</i></p>
      </header>
      <TaskForm addTask = {addTask}/>
      <TaskList tasks = {tasks} 
      updateTask = {updateTask} 
      deleteTask = {deleteTask}/>
      <ProgressTracker/>
      {tasks.length>0 && (<button className="clear-btn"
      onClick={clearTasks}>Clear All Tasks</button>)}
   </div>
  )
}
