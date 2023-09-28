//imp + click
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
//import {tasks as data} from './tasks.js' //lo trasladamos a TaskContext.jsx 
//import { useState, useEffect } from 'react'

function App() {
  //const [tasks, setTasks] = useState([]); //este estado lo trasladamos a TasKcontext.jsx 

  // useEffect(() => { //tamb lo trasladamos al TasKcontext.jsx
  //     setTasks(data);
  // }, []);

  // function createTask(task) { //esta func la trasladamos a TasKcontext.jsx 
  //   setTasks([...tasks, { 
  //     title: task.title,
  //     id: tasks.length,
  //     description: task.description
  //   }])
  // }

  // function deleteTask(taskId) {  //y esta func tamb la trasladamos a TasKcontext.jsx 
  //   setTasks(tasks.filter(task => task.id !== taskId))
  // }

  return (<main className='bg-zinc-900 h-screen'> 
    <div className='container mx-auto p-10'> 
    <TaskForm /> <TaskList /> </div> </main> )
}
export default App


