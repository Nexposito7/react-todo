import { useState, useContext } from "react"
import { TaskContext } from "../context/TaskContext" //traemos el NOMBRE del contexto

function TaskForm() { //informamos a TasK de q está recibiendo una prop
    const [title, setTitle] = useState("") //ahora vams hacer q cuando se ejecute el form se lea title 
    const [description, setdescription] = useState("")
    //handleSubmit 'como diciendo maneja el event onSubmit del form'
    //const value = useContext(TaskContext)
    const { createTask } = useContext(TaskContext)

    // const valor = useContext(TaskContext) //y extraemos el valor q tenga 
    // console.log(valor)
 
    const handleSubmit = (e) => {
        e.preventDefault() //a través del obj cancelamos el comport por defecto 
        //console.log(title, description) //ya estamos capt los valores pero n opasándoselos al createTask
        //console.log(title) //aquí era un string
        // const newTask = { //obj
        //     //title: title //el valor será lo q tengamos en este momento en el estado (title de useState)
        //     title, //se puede resumir así
        //     id: 4, //si lo añadimos así siempre pondría id 4 y daría error
        //     description: "algo nuevo"
        // }
        //console.log(newTask)//en lugar de mostrarlo por consola, se lo daremos como valor a la func q está recibiendo:
        // createTask(newTask) //ejec createTask y le damos como valor el newTask 
        //createTask(title) //ahora solo va a recibir el título, de nuevo un string  
        createTask({
            title,
            description
        })
        setTitle('')
        setdescription('')
    } //esto lo ejecutará el onSubmit 
    
    return ( <div className="max-w-md mx-auto"> {/*establecerá un ancho predeterminado*/}
                <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                    <h1 className="text-2xl font-bold text-white mb-3">Añade tu tarea</h1>
                    <input 
                        placeholder="Escribe tu tarea"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title} autoFocus
                        className="bg-slate-300 p-3 w-full mb-2"
                    />
                    <textarea 
                        placeholder="Escribe la descripción de la tarea"
                        onChange={(e) => setdescription(e.target.value)}
                        value={description}
                        className="bg-slate-300 p-3 w-full mb-2">
                    </textarea>
                    <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
                </form>
            </div>
    )
}//con esto ya tenem el valor guardado en la const title(const [title, setTitle] = useState(""))

export default TaskForm


