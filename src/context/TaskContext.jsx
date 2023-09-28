import { createContext, useState, useEffect } from "react" //importamos la func de React y useSate y useE
import {tasks as data} from '../data/tasks.js' //lo trasladamos desde TaskContext.jsx 

export const TaskContext = createContext()

export function TaskContextProvider(props) { //este es el comp q engloba al resto de comp (proveedor) 
  const [tasks, setTasks] = useState([]); //traemos/trasladamos este estado desde App.jsx

  function createTask(task) { //traemos/trasladamos esta func desde App.jsx
    setTasks([...tasks, { 
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }

  function deleteTask(taskId) { //traemos/trasladamos esta func desde App.jsx
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  useEffect(() => { //tamb lo trasladamos desde el TasKcontext.jsx
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider value={{
      tasks: tasks, //una propied q como valor va a ser el arreglo tasks 
      deleteTask: deleteTask, //y le pasamos la func 
      createTask: createTask //y esta también 
    }}>
      {props.children} {/*children es como decir q dentro van a ir más comps*/}
    </TaskContext.Provider>
  )
}
//ya tenemos el contenedor supremo, y ya podemos empezar a utilizarlo 
//export default TaskContext
