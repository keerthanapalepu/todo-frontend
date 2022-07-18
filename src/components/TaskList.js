import React, {useState, useEffect} from 'react';
import { getTodos } from '../API/api';
import AddTask from './AddTask';
import TaskItem from './TaskItem';
import '../styles/tasklist.css';

const TaskList = () => {
  
    let [tasks, setTasks] = useState([]);
    
    let getTasks = async () => {
        const newTodo = await getTodos();
        console.log(newTodo.todos);
        setTasks(newTodo.todos);
     }

    useEffect(() => {
        getTasks();
      }, [])

    useEffect(() => {
        getTasks();
    },[tasks])

    return (
		<>
      <AddTask tasks={tasks} setTasks={setTasks}/>
      <div className='row'>
        {tasks?.map((task, index) => (
          <TaskItem id={task._id} name={task.name} completed={task.completed} index={index} />
        ))}
      </div>
    </>
	);
}

export default TaskList;