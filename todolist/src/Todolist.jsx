import { useState } from "react";
export default function Todolist(){
    const [tasks,setTasks] = useState([]);
    const [newTask,setNewtask]=useState("");

    function handleInputChange(event){
        setNewtask(event.target.value);
    }

    function addTask(){
        if(newTask.trim()!==""){
        setTasks(t=>[...t,newTask]);
        setNewtask("");
        }
    }

    function deleteTask(index){
        const updatedTask=tasks.filter((element,i)=> i!==index)
        setTasks(updatedTask);
    }

    function moveTaskup(index){
        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskdown(index){
            if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=
            [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}/>
                <button className="add-button"
                        onClick={addTask}>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task,index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button"
                    onClick={()=>deleteTask(index)}>Delete</button>
                    <button className="moveup-button"
                    onClick={()=>moveTaskup(index)}>Move Up</button>
                    <button className="movedown-button"
                    onClick={()=>moveTaskdown(index)}>Move Down</button>
                </li>
                )}
            </ol>
        </div>
    );
}