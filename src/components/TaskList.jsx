import TaskCard from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

//function TaskList(props) { //TasLisk va a recibir los props >(*1)
function TaskList() {

    const { tasks } = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aún</h1>
    } //comprobamos antes de que se retorne la lista de tareas ↓ 

    return (
        <div className="grid grid-cols-4 gap-2">
            {tasks.map(task => ( //> y desde props va a recibir tasks (*1)
            <TaskCard key={task.id} task={task} /> 
            ))}
        </div>
    )
}

export default TaskList

