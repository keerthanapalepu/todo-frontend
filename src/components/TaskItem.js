import React, { useState } from 'react'
import { deleteTodo, toggleComplete } from '../API/api'
import '../styles/taskitem.css';


const TaskItem = ({ id, name, completed, index }) => {

	const [complete, setComplete] = useState(completed);

    const handleDeleteClick = () => {
		deleteTodo(id);
	}

    const handleCompleteClick = () => {
		toggleComplete(id, complete);
		if(complete === true){
			setComplete(false);
		} else {
			setComplete(true);
		}
	}
    
	return (
		<div className='col-lg-4 col-md-6'>
		<span className={complete === true ? 'fa-stack icon visible' : 'fa-stack icon invisible'}>
			<i className="fa fa-circle fa-stack-2x"></i>
			<i class="fa-solid fa-check fa-stack-1x"></i>
		</span>
		<div style={{display: "inline-flex"}}>
		<span className="indexNumber" >{index+1}.</span>
			<div className={complete === true ? 'card completed-card' : 'card incomplete-card'}>
				<div className='card-body'>
					<h5 className="card-title taskname">{name}</h5>
					<hr className="solid"/>
					<div className="Cardbuttons" >
					<button onClick={handleCompleteClick} className={complete === false ? 'cardButton incomplete' : 'cardButton complete'}>{complete === false ? 'Mark as completed' : 'Mark as incomplete'}</button>
					<span className="deleteButton" onClick={handleDeleteClick} >Delete</span>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
}

export default TaskItem