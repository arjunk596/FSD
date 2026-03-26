import React from 'react'

const ToDoList = (props) => {

    const [toDoList, setToDoList] = React.useState([]);

    function addTask() {
        let taskInput = document.getElementById("task");
        let task = taskInput.value;
        if (task.trim() !== "") {
            setToDoList([...toDoList, task]); //here we are creating a completely new array with todolist + task. 
            taskInput.value = ""; //reset values
        }
    }

    function deleteTask(index) {
        setToDoList(toDoList.toSpliced(index, 1)); //toSpliced is used to remove an element from an array without mutating the original array.
    }

    return (
        <div>
            <label>task : <input type="text" id="task" /></label>
            <button onClick={addTask}>Add</button>
            <ul id="list">
                {toDoList.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList